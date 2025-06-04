document.addEventListener('DOMContentLoaded', () => {
    const pacoPacoPostosContainer = document.getElementById('paco-paco-postos-container');
    const backToSimulationBtn = document.getElementById('backToSimulationBtn');

    // Constantes do Paco-Paco (4 fileiras x 10 colunas)
    const PACO_PACO_ROWS = 4;
    const PACO_PACO_COLUMNS = 10;
    const PACO_PACO_CAVITY_SIZE = 60; // Tamanho em pixels de cada cavidade (para facilitar visualização)

    let allOriginalOtsByPostoFromMain = {}; // { 'postoId': ['ot0190', 'ot0192', ...] } - Dados da aba principal
    // NEW: `pacoPacoStates` agora é persistido no localStorage para esta aba
    let pacoPacoStates = {}; // { 'postoId': { 'cavityId': 'otId' } } - Estado da organização do Paco-Paco NA NOVA ABA

    let draggedOt = null; // OT sendo arrastada nesta aba

    /**
     * Salva o estado da organização do Paco-Paco NA NOVA ABA no localStorage.
     */
    function savePacoPacoState() {
        try {
            localStorage.setItem('pacoPacoOrganizationStates', JSON.stringify(pacoPacoStates));
            console.log("Estado de organização do Paco-Paco salvo nesta aba!");
        } catch (e) {
            console.error("Erro ao salvar o estado de organização do Paco-Paco:", e);
        }
    }

    /**
     * Carrega o estado da organização do Paco-Paco NA NOVA ABA do localStorage.
     */
    function loadPacoPacoState() {
        try {
            const savedState = localStorage.getItem('pacoPacoOrganizationStates');
            if (savedState) {
                pacoPacoStates = JSON.parse(savedState);
                console.log("Estado de organização do Paco-Paco carregado nesta aba!");
            }
        } catch (e) {
            console.error("Erro ao carregar o estado de organização do Paco-Paco:", e);
            pacoPacoStates = {}; // Limpa se houver erro
        }
    }

    /**
     * Carrega os dados dos postos e OTs originais do sessionStorage (da página principal).
     */
    function loadInitialDataFromMain() {
        const otsByPostoString = sessionStorage.getItem('allOriginalOtsByPosto');
        if (otsByPostoString) {
            allOriginalOtsByPostoFromMain = JSON.parse(otsByPostoString);
        } else {
            console.warn('Nenhum dado de OTs por posto encontrado no sessionStorage. Verifique a página principal.');
            allOriginalOtsByPostoFromMain = {};
        }

        // Carrega o estado salvo da organização do Paco-Paco desta aba
        loadPacoPacoState();

        // Garante que todos os postos (mesmo os sem OTs inicialmente) tenham um slot para estado de Paco-Paco
        for (const postoId in allOriginalOtsByPostoFromMain) {
            if (!pacoPacoStates[postoId]) {
                pacoPacoStates[postoId] = {};
            }
        }
    }

    /**
     * Gera a interface do Paco-Paco para um posto específico.
     * @param {string} postoId - O ID do posto (e.g., 'posto-p01').
     * @param {Array<string>} initialOtsForThisPosto - Array de IDs das OTs originais para este posto.
     */
    function createPacoPacoForPosto(postoId, initialOtsForThisPosto) {
        const postoDiv = document.createElement('div');
        postoDiv.classList.add('paco-posto-section');
        postoDiv.id = `paco-posto-${postoId}`;

        const postoTitle = document.createElement('h2');
        postoTitle.textContent = `Paco-Paco do Posto ${parseInt(postoId.replace('posto-p', ''))}`;
        postoDiv.appendChild(postoTitle);

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('paco-posto-content-wrapper');
        postoDiv.appendChild(contentWrapper);

        // Paleta de OTs para este posto
        const pacoPalette = document.createElement('div');
        pacoPalette.classList.add('paco-paco-palette-local');
        pacoPalette.id = `palette-${postoId}`;
        const paletteTitle = document.createElement('h3');
        paletteTitle.textContent = 'OTs Disponíveis';
        pacoPalette.appendChild(paletteTitle);

        const availableOtsDiv = document.createElement('div');
        availableOtsDiv.classList.add('paco-palette-ots');
        pacoPalette.appendChild(availableOtsDiv);

        // OTs que estão no Paco-Paco (estado salvo)
        // Precisamos rastrear quais instâncias de OT estão no Paco-Paco para ocultar as cópias na paleta.
        // Um Set para os IDs das OTs que já estão em alguma cavidade.
        const otsInCavities = new Set();
        if (pacoPacoStates[postoId]) {
            for (const cavityId in pacoPacoStates[postoId]) {
                otsInCavities.add(pacoPacoStates[postoId][cavityId]);
            }
        }

        if (initialOtsForThisPosto.length === 0) {
            const noOtsMsg = document.createElement('p');
            noOtsMsg.textContent = 'Nenhuma OT inserida neste posto na simulação.';
            availableOtsDiv.appendChild(noOtsMsg);
        } else {
            initialOtsForThisPosto.forEach(otId => {
                // Criar a primeira OT (otId-1)
                const otImg1 = document.createElement('img');
                otImg1.src = `images/${otId.replace('ot', '')}.png`;
                otImg1.alt = otId;
                otImg1.id = `paco-palette-${postoId}-${otId}-1`; // ID único para a 1ª OT na paleta
                otImg1.classList.add('ot-base', 'draggable', 'paco-ot-draggable');
                otImg1.draggable = true;

                // Oculta a OT da paleta se o ID original da OT já estiver em alguma cavidade
                if (otsInCavities.has(otId)) {
                    otImg1.style.display = 'none';
                    otImg1.draggable = false;
                }

                otImg1.addEventListener('dragstart', (e) => {
                    draggedOt = e.target;
                    e.dataTransfer.setData('text/plain', draggedOt.id); // Transfere o ID da OT na paleta
                    e.dataTransfer.setData('application/json', JSON.stringify({
                        otId: otId, // O ID original da OT (ex: 'ot0190')
                        paletteOtId: draggedOt.id, // O ID da instância na paleta (ex: 'paco-palette-posto-p01-ot0190-1')
                        sourcePostoId: postoId
                    }));
                    draggedOt.classList.add('dragging');
                });
                otImg1.addEventListener('dragend', () => {
                    draggedOt.classList.remove('dragging');
                    draggedOt = null;
                });
                availableOtsDiv.appendChild(otImg1);

                // Criar a segunda OT (otId-2) - Duplicata
                const otImg2 = document.createElement('img');
                otImg2.src = `images/${otId.replace('ot', '')}.png`;
                otImg2.alt = otId;
                otImg2.id = `paco-palette-${postoId}-${otId}-2`; // ID único para a 2ª OT na paleta
                otImg2.classList.add('ot-base', 'draggable', 'paco-ot-draggable');
                otImg2.draggable = true;

                // Oculta a OT da paleta se o ID original da OT já estiver em alguma cavidade
                if (otsInCavities.has(otId)) {
                    otImg2.style.display = 'none';
                    otImg2.draggable = false;
                }

                otImg2.addEventListener('dragstart', (e) => {
                    draggedOt = e.target;
                    e.dataTransfer.setData('text/plain', draggedOt.id); // Transfere o ID da OT na paleta
                    e.dataTransfer.setData('application/json', JSON.stringify({
                        otId: otId, // O ID original da OT (ex: 'ot0190')
                        paletteOtId: draggedOt.id, // O ID da instância na paleta (ex: 'paco-palette-posto-p01-ot0190-2')
                        sourcePostoId: postoId
                    }));
                    draggedOt.classList.add('dragging');
                });
                otImg2.addEventListener('dragend', () => {
                    draggedOt.classList.remove('dragging');
                    draggedOt = null;
                });
                availableOtsDiv.appendChild(otImg2);
            });
        }
        contentWrapper.appendChild(pacoPalette);


        // Grade do Paco-Paco
        const pacoGridArea = document.createElement('div');
        pacoGridArea.classList.add('paco-paco-grid-area-local');
        pacoGridArea.id = `grid-${postoId}`;
        pacoGridArea.style.gridTemplateColumns = `repeat(${PACO_PACO_COLUMNS}, ${PACO_PACO_CAVITY_SIZE}px)`;
        pacoGridArea.style.gridTemplateRows = `repeat(${PACO_PACO_ROWS}, ${PACO_PACO_CAVITY_SIZE}px)`;

        // Definição das legendas dos slots
        const slotLabels = [];
        const rows = ['D', 'C', 'B', 'A']; // D (superior) -> A (inferior)
        for (let r = 0; r < PACO_PACO_ROWS; r++) {
            const rowLabel = rows[r];
            for (let c = 0; c < PACO_PACO_COLUMNS; c++) {
                slotLabels.push(`${rowLabel}${String(c + 1).padStart(2, '0')}`);
            }
        }
        let currentSlotLabelIndex = 0; // Para iterar sobre as legendas

        // Gera as cavidades
        for (let r = 0; r < PACO_PACO_ROWS; r++) {
            for (let c = 0; c < PACO_PACO_COLUMNS; c++) {
                const cavityId = `cavity-${postoId}-${r}-${c}`;
                const cavityDiv = document.createElement('div');
                cavityDiv.classList.add('paco-paco-cavity-local');
                cavityDiv.id = cavityId;
                cavityDiv.dataset.postoId = postoId;

                // Adiciona a legenda ao slot
                const labelSpan = document.createElement('span');
                labelSpan.classList.add('paco-cavity-label');
                labelSpan.textContent = slotLabels[currentSlotLabelIndex++];
                cavityDiv.appendChild(labelSpan);

                // Restaura OT se existir no estado salvo
                if (pacoPacoStates[postoId] && pacoPacoStates[postoId][cavityId]) {
                    const savedOtData = pacoPacoStates[postoId][cavityId]; // Pode ser apenas o ID da OT ou um objeto {otId, paletteOtId}
                    let savedOtId;
                    let savedPaletteOtId;

                    if (typeof savedOtData === 'object') {
                        savedOtId = savedOtData.otId;
                        savedPaletteOtId = savedOtData.paletteOtId;
                    } else { // Compatibilidade com estados antigos
                        savedOtId = savedOtData;
                        // Tentar inferir o paletteOtId, ou deixar em branco se não for possível.
                        // Poderíamos procurar por ambas as instâncias '-1' ou '-2' na paleta.
                        savedPaletteOtId = `paco-palette-${postoId}-${savedOtId}-1`; // Assume a primeira instância se não houver um ID salvo
                        if (!document.getElementById(savedPaletteOtId)) {
                             savedPaletteOtId = `paco-palette-${postoId}-${savedOtId}-2`;
                        }
                    }

                    const otCopy = document.createElement('img');
                    otCopy.src = `images/${savedOtId.replace('ot', '')}.png`;
                    otCopy.alt = savedOtId;
                    otCopy.id = `paco-cavity-${postoId}-${savedOtId}`; // ID único na cavidade
                    otCopy.classList.add('paco-ot-in-cavity');
                    otCopy.draggable = false;
                    otCopy.dataset.originalPaletteOtId = savedPaletteOtId; // Guarda o ID da OT original da paleta
                    cavityDiv.appendChild(otCopy);
                    cavityDiv.classList.add('has-ot');

                    // Esconde a OT original da paleta novamente (se não estiver já escondida)
                    const originalPaletteOt = document.getElementById(savedPaletteOtId);
                    if (originalPaletteOt) {
                        originalPaletteOt.style.display = 'none';
                        originalPaletteOt.draggable = false;
                    }

                    // Re-anexar listener de clique para remover
                    otCopy.addEventListener('click', () => {
                        const otToReturnId = otCopy.dataset.originalPaletteOtId; // Usa o ID da OT da paleta que foi usada
                        cavityDiv.removeChild(otCopy);
                        cavityDiv.classList.remove('has-ot');
                        delete pacoPacoStates[postoId][cavityDiv.id];
                        savePacoPacoState(); // Salva estado após remoção

                        const originalPaletteOtElement = document.getElementById(otToReturnId);
                        if (originalPaletteOtElement) {
                            originalPaletteOtElement.style.display = 'block';
                            originalPaletteOtElement.draggable = true;
                        }
                    });
                }


                cavityDiv.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    // Apenas permite drop se a OT vier de uma paleta do Paco-Paco e a cavidade estiver vazia
                    if (draggedOt && draggedOt.classList.contains('paco-ot-draggable') && !cavityDiv.querySelector('.paco-ot-in-cavity')) {
                        cavityDiv.classList.add('drag-over');
                    }
                });
                cavityDiv.addEventListener('dragleave', () => {
                    cavityDiv.classList.remove('drag-over');
                });
                cavityDiv.addEventListener('drop', (e) => {
                    e.preventDefault();
                    cavityDiv.classList.remove('drag-over');

                    const otDataTransfer = JSON.parse(e.dataTransfer.getData('application/json'));
                    const droppedOtId = otDataTransfer.otId; // ID original da OT (ex: 'ot0190')
                    const droppedPaletteOtId = otDataTransfer.paletteOtId; // ID da instância da OT na paleta (ex: 'paco-palette-posto-p01-ot0190-1')
                    const sourcePostoIdFromDrag = otDataTransfer.sourcePostoId;

                    // Verifica se a OT está vindo da paleta do posto correto e se a cavidade está vazia
                    if (draggedOt && sourcePostoIdFromDrag === postoId && !cavityDiv.querySelector('.paco-ot-in-cavity')) {
                        // Encontra a OT original na paleta deste posto para escondê-la (usando o ID da instância da paleta)
                        const originalPaletteOt = document.getElementById(droppedPaletteOtId);
                        if (originalPaletteOt) {
                            originalPaletteOt.style.display = 'none';
                            originalPaletteOt.draggable = false;
                        }

                        const otCopy = document.createElement('img');
                        otCopy.src = `images/${droppedOtId.replace('ot', '')}.png`;
                        otCopy.alt = droppedOtId;
                        otCopy.id = `paco-cavity-${postoId}-${droppedOtId}`; // ID único na cavidade
                        otCopy.classList.add('paco-ot-in-cavity');
                        otCopy.draggable = false; // Não arrastável da cavidade (por clique para remover)
                        otCopy.dataset.originalPaletteOtId = droppedPaletteOtId; // Guarda o ID da OT original da paleta

                        cavityDiv.appendChild(otCopy);
                        cavityDiv.classList.add('has-ot');
                        // Armazena o ID original da OT e o ID da instância da paleta
                        pacoPacoStates[postoId][cavityDiv.id] = { otId: droppedOtId, paletteOtId: droppedPaletteOtId };
                        savePacoPacoState(); // Salva estado após drop

                        // Listener para remover a OT da cavidade
                        otCopy.addEventListener('click', () => {
                            const otToReturnId = otCopy.dataset.originalPaletteOtId; // Usa o ID da OT da paleta que foi usada
                            cavityDiv.removeChild(otCopy);
                            cavityDiv.classList.remove('has-ot');
                            delete pacoPacoStates[postoId][cavityDiv.id];
                            savePacoPacoState(); // Salva estado após remoção

                            // Retorna a OT para a paleta e a torna arrastável novamente
                            const originalPaletteOtElement = document.getElementById(otToReturnId);
                            if (originalPaletteOtElement) {
                                originalPaletteOtElement.style.display = 'block';
                                originalPaletteOtElement.draggable = true;
                            }
                        });
                    }
                });
                pacoGridArea.appendChild(cavityDiv);
            }
        }
        contentWrapper.appendChild(pacoGridArea);
        pacoPacoPostosContainer.appendChild(postoDiv);
    }

    /**
     * Gera todas as seções de Paco-Paco para cada posto.
     */
    function generateAllPacoPacoSections() {
        pacoPacoPostosContainer.innerHTML = ''; // Limpa a área
        const postoIds = Object.keys(allOriginalOtsByPostoFromMain).sort((a, b) => {
            const numA = parseInt(a.replace('posto-p', ''));
            const numB = parseInt(b.replace('posto-p', ''));
            return numA - numB;
        });

        if (postoIds.length === 0) {
            pacoPacoPostosContainer.innerHTML = '<p style="text-align: center; color: #ccc;">Nenhum posto encontrado ou nenhuma OT original inserida nos postos da simulação.</p>';
            return;
        }

        postoIds.forEach(postoId => {
            const otsForThisPosto = allOriginalOtsByPostoFromMain[postoId] || [];
            createPacoPacoForPosto(postoId, otsForThisPosto);
        });
    }

    // Listener para o botão "Voltar para Simulação"
    backToSimulationBtn.addEventListener('click', () => {
        // Ao voltar, a guia principal deve manter o estado.
        // Fechar esta aba (se foi aberta por window.open) é a ação mais limpa.
        window.close();
    });

    // Inicialização da página Paco-Paco ao carregar
    loadInitialDataFromMain(); // Carrega os dados da página principal e o estado de organização desta aba
    generateAllPacoPacoSections();
});
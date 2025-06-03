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

        // OTs que estão na paleta (não estão no Paco-Paco)
        const otsCurrentlyInPaco = new Set(Object.values(pacoPacoStates[postoId] || {}));

        if (initialOtsForThisPosto.length === 0) {
            const noOtsMsg = document.createElement('p');
            noOtsMsg.textContent = 'Nenhuma OT inserida neste posto na simulação.';
            availableOtsDiv.appendChild(noOtsMsg);
        } else {
            initialOtsForThisPosto.forEach(otId => {
                const otImg = document.createElement('img');
                otImg.src = `images/${otId.replace('ot', '')}.png`;
                otImg.alt = otId;
                otImg.id = `paco-palette-${postoId}-${otId}`; // ID único para a OT na paleta do Paco-Paco
                otImg.classList.add('ot-base', 'draggable', 'paco-ot-draggable');
                otImg.draggable = true;

                // Esconde a OT da paleta se ela já estiver no Paco-Paco (estado salvo)
                if (otsCurrentlyInPaco.has(otId)) {
                    otImg.style.display = 'none';
                    otImg.draggable = false;
                }

                otImg.addEventListener('dragstart', (e) => {
                    draggedOt = e.target;
                    e.dataTransfer.setData('text/plain', draggedOt.id); // Transfere o ID da OT
                    e.dataTransfer.setData('application/json', JSON.stringify({
                        otId: otId,
                        sourcePostoId: postoId // Indica de qual paleta de posto a OT veio
                    }));
                    draggedOt.classList.add('dragging');
                });
                otImg.addEventListener('dragend', () => {
                    draggedOt.classList.remove('dragging');
                    draggedOt = null;
                });
                availableOtsDiv.appendChild(otImg);
            });
        }
        contentWrapper.appendChild(pacoPalette);


        // Grade do Paco-Paco
        const pacoGridArea = document.createElement('div');
        pacoGridArea.classList.add('paco-paco-grid-area-local');
        pacoGridArea.id = `grid-${postoId}`;
        pacoGridArea.style.gridTemplateColumns = `repeat(${PACO_PACO_COLUMNS}, ${PACO_PACO_CAVITY_SIZE}px)`;
        pacoGridArea.style.gridTemplateRows = `repeat(${PACO_PACO_ROWS}, ${PACO_PACO_CAVITY_SIZE}px)`;

        // Gera as cavidades
        for (let r = 0; r < PACO_PACO_ROWS; r++) {
            for (let c = 0; c < PACO_PACO_COLUMNS; c++) {
                const cavityId = `cavity-${postoId}-${r}-${c}`;
                const cavityDiv = document.createElement('div');
                cavityDiv.classList.add('paco-paco-cavity-local');
                cavityDiv.id = cavityId;
                cavityDiv.dataset.postoId = postoId; // Marca a qual posto a cavidade pertence

                // Restaura OT se existir no estado salvo
                if (pacoPacoStates[postoId] && pacoPacoStates[postoId][cavityId]) {
                    const savedOtId = pacoPacoStates[postoId][cavityId];
                    const otCopy = document.createElement('img');
                    otCopy.src = `images/${savedOtId.replace('ot', '')}.png`;
                    otCopy.alt = savedOtId;
                    otCopy.id = `paco-cavity-${postoId}-${savedOtId}`;
                    otCopy.classList.add('paco-ot-in-cavity');
                    otCopy.draggable = false;
                    cavityDiv.appendChild(otCopy);
                    cavityDiv.classList.add('has-ot');

                    // Re-anexar listener de clique para remover
                    otCopy.addEventListener('click', () => {
                        cavityDiv.removeChild(otCopy);
                        cavityDiv.classList.remove('has-ot');
                        delete pacoPacoStates[postoId][cavityDiv.id];
                        savePacoPacoState(); // Salva estado após remoção

                        const originalPaletteOt = document.getElementById(`paco-palette-${postoId}-${savedOtId}`);
                        if (originalPaletteOt) {
                            originalPaletteOt.style.display = 'block';
                            originalPaletteOt.draggable = true;
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
                    const droppedOtId = otDataTransfer.otId;
                    const sourcePostoIdFromDrag = otDataTransfer.sourcePostoId; // Posto de onde a OT veio na paleta

                    // Verifica se a OT está vindo da paleta do posto correto e se a cavidade está vazia
                    if (draggedOt && sourcePostoIdFromDrag === postoId && !cavityDiv.querySelector('.paco-ot-in-cavity')) {
                        // Encontra a OT original na paleta deste posto para escondê-la
                        const originalPaletteOt = document.getElementById(`paco-palette-${postoId}-${droppedOtId}`);
                        if (originalPaletteOt) {
                            originalPaletteOt.style.display = 'none';
                            originalPaletteOt.draggable = false; // Não arrastável da paleta uma vez usada
                        }

                        const otCopy = document.createElement('img');
                        otCopy.src = `images/${droppedOtId.replace('ot', '')}.png`;
                        otCopy.alt = droppedOtId;
                        otCopy.id = `paco-cavity-${postoId}-${droppedOtId}`; // ID único na cavidade
                        otCopy.classList.add('paco-ot-in-cavity');
                        otCopy.draggable = false; // Não arrastável da cavidade (por clique para remover)

                        cavityDiv.appendChild(otCopy);
                        cavityDiv.classList.add('has-ot');
                        pacoPacoStates[postoId][cavityDiv.id] = droppedOtId; // Armazena o estado
                        savePacoPacoState(); // Salva estado após drop

                        // Listener para remover a OT da cavidade
                        otCopy.addEventListener('click', () => {
                            cavityDiv.removeChild(otCopy);
                            cavityDiv.classList.remove('has-ot');
                            delete pacoPacoStates[postoId][cavityDiv.id];
                            savePacoPacoState(); // Salva estado após remoção

                            // Retorna a OT para a paleta e a torna arrastável novamente
                            if (originalPaletteOt) {
                                originalPaletteOt.style.display = 'block';
                                originalPaletteOt.draggable = true;
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
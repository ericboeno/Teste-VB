document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Definição dos Conectores e Seus Slots ---
    const connectorDefinitions = {
        '7287-1144-40': { // Conector existente
            imageSrc: 'images/7287-1144-40.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 315, left: 415, idSuffix: '1' },
                { top: 315, left: 315, idSuffix: '2' },
                { top: 315, left: 225, idSuffix: '3' },
                { top: 315, left: 130, idSuffix: '4' },
                { top: 410, left: 415, idSuffix: '5' },
                { top: 410, left: 315, idSuffix: '6' },
                { top: 410, left: 225, idSuffix: '7' },
                { top: 410, left: 130, idSuffix: '8' }
            ]
        },
        '7283-8850-30': { // Conector existente
            imageSrc: 'images/7283-8850-30.png',
            width: 600,
            height: 350,
            slotSize: 60,
            slotPositions: [
                { top: 330, left: 155, idSuffix: '1' },
                { top: 330, left: 230, idSuffix: '2' },
                { top: 330, left: 385, idSuffix: '3' },
                { top: 330, left: 460, idSuffix: '4' }
            ]
        },
        '7287-4904-30': { // Conector existente
            imageSrc: 'images/7287-4904-30.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 327, left: 77, idSuffix: '1' },
                { top: 327, left: 152, idSuffix: '2' },
                { top: 327, left: 232, idSuffix: '3' },
                { top: 327, left: 307, idSuffix: '4' },
                { top: 327, left: 383, idSuffix: '5' },
                { top: 327, left: 465, idSuffix: '6' }
            ]
        },
        '7283-8857-80': { // Conector existente
            imageSrc: 'images/7283-8857-80.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 342, left: 374, idSuffix: '1' },
                { top: 342, left: 303, idSuffix: '2' },
                { top: 342, left: 235, idSuffix: '3' },
                { top: 342, left: 163, idSuffix: '4' }
            ]
        },
        '7282-9812-30': { // Conector existente
            imageSrc: 'images/7282-9812-30.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 260, left: 77, idSuffix: '1' },
                { top: 260, left: 152, idSuffix: '2' },
                { top: 260, left: 230, idSuffix: '3' },
                { top: 260, left: 308, idSuffix: '4' },
                { top: 260, left: 390, idSuffix: '5' },
                { top: 260, left: 468, idSuffix: '6' },
                { top: 352, left: 77, idSuffix: '7' },
                { top: 352, left: 152, idSuffix: '8' },
                { top: 352, left: 230, idSuffix: '9' },
                { top: 352, left: 308, idSuffix: '10' },
                { top: 352, left: 390, idSuffix: '11' },
                { top: 352, left: 468, idSuffix: '12' }
            ]
        },
        '7287-3333-90': { // Conector existente
            imageSrc: 'images/7287-3333-90.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 315, left: 411, idSuffix: '1' },
                { top: 315, left: 315, idSuffix: '2' },
                { top: 315, left: 225, idSuffix: '3' },
                { top: 315, left: 130, idSuffix: '4' },
                { top: 410, left: 411, idSuffix: '5' },
                { top: 410, left: 315, idSuffix: '6' },
                { top: 410, left: 225, idSuffix: '7' },
                { top: 410, left: 130, idSuffix: '8' }
            ]
        },
        '7287-0853-30': { // Conector existente
            imageSrc: 'images/7287-0853-30.png',
            width: 600,
            height: 650,
            slotSize: 60,
            slotPositions: [
                { top: 315, left: 411, idSuffix: '1' },
                { top: 315, left: 315, idSuffix: '2' },
                { top: 315, left: 225, idSuffix: '3' },
                { top: 315, left: 130, idSuffix: '4' },
                { top: 410, left: 411, idSuffix: '5' },
                { top: 410, left: 315, idSuffix: '6' },
                { top: 410, left: 225, idSuffix: '7' },
                { top: 410, left: 130, idSuffix: '8' }
            ]
        },
        '7287-1856-30': { // Conector existente
            imageSrc: 'images/7287-1856-30.png',
            width: 800,
            height: 850,
            slotSize: 40,
            slotPositions: [
                { top: 320, left: 85, idSuffix: '1' },
                { top: 320, left: 143, idSuffix: '2' },
                { top: 320, left: 202, idSuffix: '3' },
                { top: 320, left: 256, idSuffix: '4' },
                { top: 320, left: 314, idSuffix: '5' },
                { top: 320, left: 370, idSuffix: '6' },
                { top: 320, left: 427, idSuffix: '7' },
                { top: 320, left: 486, idSuffix: '8' },
                { top: 320, left: 542, idSuffix: '9' },
                { top: 320, left: 600, idSuffix: '10' },
                { top: 380, left: 85, idSuffix: '11' },
                { top: 380, left: 143, idSuffix: '12' },
                { top: 380, left: 202, idSuffix: '13' },
                { top: 380, left: 256, idSuffix: '14' },
                { top: 380, left: 314, idSuffix: '15' },
                { top: 380, left: 370, idSuffix: '16' },
                { top: 380, left: 427, idSuffix: '17' },
                { top: 380, left: 486, idSuffix: '18' },
                { top: 380, left: 542, idSuffix: '19' },
                { top: 380, left: 600, idSuffix: '20' },
                { top: 380, left: 660, idSuffix: '21' },
                { top: 438, left: 85, idSuffix: '22' },
                { top: 438, left: 143, idSuffix: '23' },
                { top: 438, left: 202, idSuffix: '24' },
                { top: 438, left: 256, idSuffix: '25' },
                { top: 438, left: 314, idSuffix: '26' },
                { top: 438, left: 370, idSuffix: '27' },
                { top: 438, left: 427, idSuffix: '28' },
                { top: 438, left: 486, idSuffix: '29' },
                { top: 438, left: 542, idSuffix: '30' },
                { top: 438, left: 600, idSuffix: '31' },
                { top: 438, left: 660, idSuffix: '32' },
                { top: 495, left: 85, idSuffix: '33' },
                { top: 495, left: 143, idSuffix: '34' },
                { top: 495, left: 202, idSuffix: '35' },
                { top: 495, left: 256, idSuffix: '36' },
                { top: 495, left: 314, idSuffix: '37' },
                { top: 495, left: 370, idSuffix: '38' },
                { top: 495, left: 427, idSuffix: '39' },
                { top: 495, left: 486, idSuffix: '40' },
                { top: 495, left: 542, idSuffix: '41' },
                { top: 495, left: 600, idSuffix: '42' }
            ]
        },
        '7287-1892': { // Conector existente
            imageSrc: 'images/7287-1892.png',
            width: 600,
            height: 650,
            slotSize: 48,
            slotPositions: [
                { top: 315, left: 62, idSuffix: '1' },
                { top: 315, left: 122, idSuffix: '2' },
                { top: 315, left: 182, idSuffix: '3' },
                { top: 315, left: 245, idSuffix: '4' },
                { top: 315, left: 304, idSuffix: '5' },
                { top: 315, left: 364, idSuffix: '6' },
                { top: 315, left: 425, idSuffix: '7' },
                { top: 315, left: 486, idSuffix: '8' },
                { top: 377, left: 62, idSuffix: '9' },
                { top: 377, left: 122, idSuffix: '10' },
                { top: 377, left: 182, idSuffix: '11' },
                { top: 377, left: 245, idSuffix: '12' },
                { top: 377, left: 304, idSuffix: '13' },
                { top: 377, left: 364, idSuffix: '14' },
                { top: 377, left: 425, idSuffix: '15' },
                { top: 377, left: 486, idSuffix: '16' }
            ]
        },
        '7287-8592': { // Conector existente
            imageSrc: 'images/7287-8592.png',
            width: 600,
            height: 650,
            slotSize: 120,
            slotPositions: [
                { top: 325, left: 169, idSuffix: '1' },
                { top: 325, left: 310, idSuffix: '2' }
            ]
        },
        // --- NOVOS COMPONENTES GROMMETS (SEM SLOTS) ---
        'GROMMET1': {
            imageSrc: 'images/GROMMET1.png',
            width: 200,
            height: 200,
        },
        'GROMMET2': {
            imageSrc: 'images/GROMMET2.png',
            width: 250,
            height: 250,
        }
    };

    // --- Referências aos Elementos do DOM ---
    const numPostosSelect = document.getElementById('numPostos');
    const gerarPostosBtn = document.getElementById('gerarPostosBtn');
    const otPalette = document.getElementById('ot-palette');
    const postosArea = document.getElementById('postos-area');
    const connectorPalette = document.getElementById('connector-palette');
    const taktTimeInput = document.getElementById('taktTime');
    const gerarRelatorioBtn = document.getElementById('gerarRelatorioBtn');
    const limparRelatorioBtn = document.getElementById('limparRelatorioBtn');
    const reportArea = document.getElementById('report-area');
    const goToPacoPacoBtn = document.getElementById('goToPacoPacoBtn'); // Botão "Ir para Paco-Paco" global

    // --- Variáveis de Controle ---
    let draggedOt = null;
    let draggedConnectorType = null;
    let postoTimes = {}; // Objeto para armazenar o tempo acumulado de cada posto
    let connectorTypeCounts = {}; // Armazena { 'TIPO_CONECTOR': count }
    let slotContents = {}; // { 'postoId': { 'conectorId': { 'slotId': { otId: 'ot0190', isPropagated: false } } } }
    let originalOtsByPosto = {}; // { 'postoId': ['ot0190', 'ot0192', ...] } - OTs originais por posto, para a nova aba

    let availableOts = new Set(); // Para rastrear IDs das OTs que estão visíveis e arrastáveis na paleta
    let initialOtOrder = []; // Armazena a ordem inicial dos IDs das OTs na paleta
    let otElementsMap = new Map(); // Mapeia ID da OT para o elemento DOM original
    let otGroupElementsMap = new Map(); // Mapeia ID do ot-group para o elemento DOM original
    let scrollInterval = null;
    let postoActionLog = {}; // Log de ações por posto para o relatório detalhado
    let connectorInstanceAddTimes = {}; // { 'conector-instance-id': tempo_original_adicionado }

    // --- Constantes de Tempo (em segundos) ---
    const TIME_PER_OT = 5; // 6: Inserções de Circuitos
    const TIME_PER_CONNECTOR_GRAB_TO_HOUSE = 2.88; // 4: Pegar o conector da caixa e direcionar no house
    const TIME_BARCODE_SCAN = 1.74; // 2: Realizar a leitura do código de barras do kanban
    const TIME_TAKE_SAO_BAR_TO_TABLE = 2.82; // 1: Pegar barra de SAO e colocar na mesa
    const TIME_PLACE_KANBAN_LABEL = 5.16; // 3: Colocar etiqueta kanban no S A O
    const TIME_GROMMET_PASS_CIRCUIT = 20.04; // 11: Passar circuito pelo grommet
    const TIME_REMOVE_CONNECTOR_TO_COMB = 2.04; // 14: Tirar o conector e direcionar no pente
    const TIME_LOCK_CONNECTOR = 2.16; // 15: Travar conector
    const TIME_CHECK_CONNECTOR_LOCK = 2.58; // 17: Checar a trava do conector
    const TIME_PASS_SAO = 1.74; // 18: Passar o pente entre os postos
    const TIME_REMOVE_SAO_FROM_SUB = 8.04; // 19: Remover pente da sub e colocar na área de montagem
    const UNIQUE_CONNECTOR_ADD_TIME = 2.88; // Tempo para conector não presente em outro posto
    const DUPLICATE_CONNECTOR_ADD_TIME = 1; // Tempo para conector já presente em outro posto

    const SCROLL_SPEED = 10;
    const SCROLL_ZONE_HEIGHT = 50;

    // --- Funções de Salvar e Carregar Estado ---
    function saveAppState() {
        try {
            localStorage.setItem('numPostos', numPostosSelect.value);
            localStorage.setItem('taktTime', taktTimeInput.value);
            localStorage.setItem('postoTimes', JSON.stringify(postoTimes));
            localStorage.setItem('connectorTypeCounts', JSON.stringify(connectorTypeCounts));
            localStorage.setItem('slotContents', JSON.stringify(slotContents));
            localStorage.setItem('originalOtsByPosto', JSON.stringify(originalOtsByPosto));
            localStorage.setItem('postoActionLog', JSON.stringify(postoActionLog));
            localStorage.setItem('connectorInstanceAddTimes', JSON.stringify(connectorInstanceAddTimes));

            // Salvar o HTML atual da área de postos (incluindo conectores e OTs)
            // Isso pode ser grande, mas é a forma mais direta de restaurar o layout
            localStorage.setItem('postosAreaHTML', postosArea.innerHTML);
            console.log("Estado da simulação salvo com sucesso!");
        } catch (e) {
            console.error("Erro ao salvar o estado no localStorage:", e);
        }
    }

    function loadAppState() {
        try {
            const savedNumPostos = localStorage.getItem('numPostos');
            const savedTaktTime = localStorage.getItem('taktTime');
            const savedPostoTimes = localStorage.getItem('postoTimes');
            const savedConnectorTypeCounts = localStorage.getItem('connectorTypeCounts');
            const savedSlotContents = localStorage.getItem('slotContents');
            const savedOriginalOtsByPosto = localStorage.getItem('originalOtsByPosto');
            const savedPostoActionLog = localStorage.getItem('postoActionLog');
            const savedConnectorInstanceAddTimes = localStorage.getItem('connectorInstanceAddTimes');
            const savedPostosAreaHTML = localStorage.getItem('postosAreaHTML');


            if (savedNumPostos) {
                numPostosSelect.value = savedNumPostos;
                taktTimeInput.value = savedTaktTime;
                postoTimes = JSON.parse(savedPostoTimes);
                connectorTypeCounts = JSON.parse(savedConnectorTypeCounts);
                slotContents = JSON.parse(savedSlotContents);
                originalOtsByPosto = JSON.parse(savedOriginalOtsByPosto);
                postoActionLog = JSON.parse(savedPostoActionLog);
                connectorInstanceAddTimes = JSON.parse(savedConnectorInstanceAddTimes);

                // Restaurar o HTML e re-anexar listeners
                postosArea.innerHTML = savedPostosAreaHTML;
                console.log("HTML dos postos restaurado.");

                // Re-anexar listeners a todos os elementos dinâmicos
                reattachListeners();
                console.log("Listeners reanexados.");

                // Atualizar barras de progresso
                Object.keys(postoTimes).forEach(updateProgressBar);

                // Sincronizar a paleta de OTs com o estado carregado
                syncOtPaletteVisibility();
                console.log("Estado da simulação carregado com sucesso!");
                return true;
            }
            return false;
        } catch (e) {
            console.error("Erro ao carregar o estado do localStorage:", e);
            // Limpar dados corrompidos se houver um erro de parsing
            clearSavedState();
            return false;
        }
    }

    function clearSavedState() {
        localStorage.clear();
        console.log("Estado salvo limpo.");
    }

    // Função para reanexar listeners após carregar HTML
    function reattachListeners() {
        // Conectores
        document.querySelectorAll('.posto-content .conector').forEach(conectorDiv => {
            // Reanexar listener do botão de remover
            const removeButton = conectorDiv.querySelector('.remove-connector-btn');
            if (removeButton) {
                // Remove o listener existente se houver um (para evitar duplicação)
                removeButton.onclick = null;
                removeButton.addEventListener('click', () => {
                    const postoId = conectorDiv.closest('.posto-container').id;
                    let timeToSubtract = 0;
                    let actionsLogged = [];

                    const type = conectorDiv.dataset.connectorType;
                    const originalAddTimeForThisInstance = connectorInstanceAddTimes[conectorDiv.id] || 0;

                    if (originalAddTimeForThisInstance === 0) {
                        timeToSubtract += DUPLICATE_CONNECTOR_ADD_TIME;
                        actionsLogged.push({
                            action: `Conector ${type} removido (Débito padrão por falta de registro original): -${DUPLICATE_CONNECTOR_ADD_TIME.toFixed(2)}s.`,
                            time: -DUPLICATE_CONNECTOR_ADD_TIME,
                            type: 'subtract',
                            conectorId: conectorDiv.id,
                            conectorType: type
                        });
                    } else {
                        timeToSubtract += originalAddTimeForThisInstance;
                        actionsLogged.push({
                            action: `Conector ${type} removido (Débito do tempo de adição original): -${originalAddTimeForThisInstance.toFixed(2)}s.`,
                            time: -originalAddTimeForThisInstance,
                            type: 'subtract',
                            conectorId: conectorDiv.id,
                            conectorType: type
                        });
                    }

                    const checkboxInput = conectorDiv.querySelector('.conector-trava-checkbox');
                    if (checkboxInput && checkboxInput.checked) {
                        const checkboxTime = TIME_LOCK_CONNECTOR + TIME_CHECK_CONNECTOR_LOCK;
                        timeToSubtract += checkboxTime;
                        actionsLogged.push({
                            action: `Checkbox "Travar/Checar Conector" de ${type} desmarcado automaticamente (devido à remoção do conector): -${checkboxTime.toFixed(2)}s.`,
                            time: -checkboxTime,
                            type: 'subtract',
                            conectorId: conectorDiv.id,
                            conectorType: type
                        });
                    }

                    const definition = connectorDefinitions[type];
                    if (definition && definition.slotPositions) {
                        const slotsInConnector = conectorDiv.querySelectorAll('.slot');
                        slotsInConnector.forEach(slot => {
                            const otInSlot = slot.querySelector('.ot');
                            if (otInSlot) {
                                const otIsPropagated = otInSlot.dataset.isPropagated === 'true';
                                const otOriginalId = slotContents[postoId]?.[conectorDiv.id]?.[slot.id]?.otId || otInSlot.id;

                                if (!otIsPropagated) {
                                    timeToSubtract += TIME_PER_OT;
                                    actionsLogged.push({
                                        action: `OT ${otOriginalId} removida do slot ${slot.id.split('-').pop()} do conector ${type} (devido à remoção do conector). (Remoção de Circuitos): -${TIME_PER_OT.toFixed(2)}s.`,
                                        time: -TIME_PER_OT,
                                        type: 'subtract',
                                        otId: otOriginalId,
                                        conectorId: conectorDiv.id,
                                        conectorType: type,
                                        slotId: slot.id
                                    });
                                    depropagateOt(postoId, conectorDiv.id, slot.id, otOriginalId);

                                    const otToReturn = otElementsMap.get(otOriginalId);
                                    if (otToReturn) {
                                        otToReturn.style.display = 'block';
                                        otToReturn.draggable = true;
                                        availableOts.add(otToReturn.id);

                                        otToReturn.classList.remove('propagated-ot');
                                        delete otToReturn.dataset.isPropagated;
                                        delete otToReturn.dataset.originalPosto;
                                        const paletteOtLabel = otToReturn.querySelector('.origin-label');
                                        if(paletteOtLabel) {
                                            otToReturn.removeChild(paletteOtLabel);
                                        }
                                    }
                                }
                                slot.removeChild(otInSlot);
                                const originLabelInSlot = slot.querySelector('.origin-label');
                                if (originLabelInSlot) {
                                    slot.removeChild(originLabelInSlot);
                                }
                                slot.classList.remove('has-ot');

                                if (slotContents[postoId] && slotContents[postoId][conectorDiv.id]) {
                                    delete slotContents[postoId][conectorDiv.id][slot.id];
                                }
                            }
                        });
                    }
                    if (slotContents[postoId]) {
                        delete slotContents[postoId][conectorDiv.id];
                        if (Object.keys(slotContents[postoId]).length === 0) {
                            delete slotContents[postoId];
                        }
                    }

                    postoTimes[postoId] -= timeToSubtract;
                    updateProgressBar(postoId);

                    connectorTypeCounts[type] = (connectorTypeCounts[type] || 0) - 1;
                    if (connectorTypeCounts[type] < 0) connectorTypeCounts[type] = 0;

                    conectorDiv.parentNode.removeChild(conectorDiv);
                    delete connectorInstanceAddTimes[conectorDiv.id];

                    if (!postoActionLog[postoId]) postoActionLog[postoId] = [];
                    postoActionLog[postoId].push(...actionsLogged);

                    syncOtPaletteVisibility();
                    updateOriginalOtsByPosto();
                    saveAppState(); // Salva estado após remoção
                });
            }

            // Reanexar listener do checkbox (se existir)
            const checkboxInput = conectorDiv.querySelector('.conector-trava-checkbox');
            if (checkboxInput) {
                // Remove o listener existente
                checkboxInput.onchange = null;
                checkboxInput.addEventListener('change', (e) => {
                    const currentPostoId = conectorDiv.closest('.posto-container').id;
                    const isChecked = e.target.checked;
                    let timeChange = 0;
                    let actionDescription = "";
                    const type = conectorDiv.dataset.connectorType;

                    if (isChecked) {
                        timeChange += TIME_LOCK_CONNECTOR;
                        timeChange += TIME_CHECK_CONNECTOR_LOCK;
                        actionDescription = `Checkbox "Travar/Checar Conector" de ${type} marcado (Travar: ${TIME_LOCK_CONNECTOR.toFixed(2)}s, Checar: ${TIME_CHECK_CONNECTOR_LOCK.toFixed(2)}s).`;
                    } else {
                        timeChange -= TIME_LOCK_CONNECTOR;
                        timeChange -= TIME_CHECK_CONNECTOR_LOCK;
                        actionDescription = `Checkbox "Travar/Checar Conector" de ${type} desmarcado (Remover Travar: ${TIME_LOCK_CONNECTOR.toFixed(2)}s, Remover Checar: ${TIME_CHECK_CONNECTOR_LOCK.toFixed(2)}s).`;
                    }

                    postoTimes[currentPostoId] += timeChange;
                    updateProgressBar(currentPostoId);

                    if (!postoActionLog[currentPostoId]) postoActionLog[currentPostoId] = [];
                    postoActionLog[currentPostoId].push({
                        action: actionDescription,
                        time: timeChange,
                        type: isChecked ? 'add' : 'subtract',
                        conectorId: conectorDiv.id,
                        conectorType: type
                    });
                    saveAppState(); // Salva estado após alteração do checkbox
                });
            }
        });

        // Slots
        addOTDragDropToSlots(); // Esta função já reanexa os listeners para slots
        // Postos
        document.querySelectorAll('.posto-content').forEach(postoContent => {
            // Remove os listeners existentes para evitar duplicação
            postoContent.removeEventListener('dragover', postoContent._dragOverListener);
            postoContent.removeEventListener('dragenter', postoContent._dragEnterListener);
            postoContent.removeEventListener('dragleave', postoContent._dragleaveListener);
            postoContent.removeEventListener('drop', postoContent._dropListener);
            addPostoDragDropListeners(postoContent); // Reanexa os listeners para a área do posto
        });
        // Paletas
        setupOtDragDropListeners();
        generateConnectorPalette(); // Isso também reanexa listeners para conectores da paleta
    }

    // --- Funções Auxiliares de Lógica de Negócio ---

    /**
     * Verifica se todas as slots de um conector estão preenchidas com OTs.
     * @param {HTMLElement} conectorElement - O elemento DOM do conector.
     * @returns {boolean} - True se todas as slots estiverem preenchidas, false caso contrário.
     */
    function areAllSlotsFilled(conectorElement) {
        const conectorType = conectorElement.dataset.connectorType;
        const definition = connectorDefinitions[conectorType];

        if (!definition || !definition.slotPositions || definition.slotPositions.length === 0) {
            return false;
        }

        const slots = conectorElement.querySelectorAll('.slot');
        if (slots.length !== definition.slotPositions.length) {
            console.warn(`Mismatch in slot count for connector ${conectorType}. DOM: ${slots.length}, Definition: ${definition.slotPositions.length}`);
            return false;
        }

        for (const slot of slots) {
            if (!slot.querySelector('.ot')) {
                return false; // Encontrou um slot vazio
            }
        }
        return true; // Todos os slots têm uma OT
    }

    /**
     * Propaga uma OT para slots correspondentes em postos subsequentes.
     * @param {string} sourcePostoId - ID do posto onde a OT foi originalmente dropada.
     * @param {string} sourceConectorId - ID do conector onde a OT foi dropada.
     * @param {string} sourceSlotId - ID do slot onde a OT foi dropada.
     * @param {string} otId - ID da OT (e.g., 'ot0190').
     */
    function propagateOt(sourcePostoId, sourceConectorId, sourceSlotId, otId) {
        const sourcePostoNumber = parseInt(sourcePostoId.replace('posto-p', ''));
        const totalPostos = parseInt(numPostosSelect.value);

        // Extrair o tipo de conector e o sufixo do slot do ID
        const sourceConectorElement = document.getElementById(sourceConectorId);
        if (!sourceConectorElement) return;
        const sourceConectorType = sourceConectorElement.dataset.connectorType;
        const sourceSlotSuffix = sourceSlotId.split('-').pop();

        // Pegar a OT original da paleta para clonar
        const originalOtElement = otElementsMap.get(otId);
        if (!originalOtElement) {
            console.error(`OT com ID ${otId} não encontrada no mapa de elementos.`);
            return;
        }

        for (let i = sourcePostoNumber + 1; i <= totalPostos; i++) {
            const targetPostoId = `posto-p${String(i).padStart(2, '0')}`;
            const targetPostoElement = document.getElementById(targetPostoId);
            if (!targetPostoElement) continue;

            const targetConectorElement = targetPostoElement.querySelector(`.conector-${sourceConectorType}`);

            if (targetConectorElement) {
                const targetSlot = targetConectorElement.querySelector(`[id$="-${sourceSlotSuffix}"]`);

                if (targetSlot && !targetSlot.querySelector('.ot')) { // Se o slot existe e está vazio
                    const otCopy = originalOtElement.cloneNode(true);
                    otCopy.classList.remove('dragging');
                    otCopy.style.position = '';
                    otCopy.style.top = '';
                    otCopy.style.left = '';
                    otCopy.dataset.isPropagated = 'true'; // Marca como propagada
                    otCopy.draggable = false; // OTs propagadas não são arrastáveis

                    otCopy.classList.add('propagated-ot');
                    otCopy.dataset.originalPosto = `P${sourcePostoNumber}`;

                    targetSlot.appendChild(otCopy);
                    targetSlot.classList.add('has-ot');

                    const originLabel = document.createElement('span');
                    originLabel.classList.add('origin-label');
                    originLabel.textContent = `P${sourcePostoNumber}`;
                    targetSlot.appendChild(originLabel);

                    // Atualiza a estrutura de dados de conteúdo dos slots
                    const targetConectorId = targetConectorElement.id;
                    const targetSlotId = targetSlot.id;
                    if (!slotContents[targetPostoId]) slotContents[targetPostoId] = {};
                    if (!slotContents[targetPostoId][targetConectorId]) slotContents[targetPostoId][targetConectorId] = {};
                    slotContents[targetPostoId][targetConectorId][targetSlotId] = { otId: otId, isPropagated: true };

                    // Não registrar OTs propagadas no log de ações para evitar duplicação de tempo.
                }
            }
        }
    }

    /**
     * Remove uma OT e suas cópias propagadas de slots em postos subsequentes.
     * @param {string} sourcePostoId - ID do posto onde a OT foi removida (originalmente).
     * @param {string} sourceConectorId - ID do conector onde a OT foi removida.
     * @param {string} sourceSlotId - ID do slot de onde a OT foi removida.
     * @param {string} otId - ID da OT (e.g., 'ot0190').
     */
    function depropagateOt(sourcePostoId, sourceConectorId, sourceSlotId, otId) {
        const sourcePostoNumber = parseInt(sourcePostoId.replace('posto-p', ''));
        const totalPostos = parseInt(numPostosSelect.value);

        const sourceConectorElement = document.getElementById(sourceConectorId);
        if (!sourceConectorElement) return;
        const sourceConectorType = sourceConectorElement.dataset.connectorType;
        const sourceSlotSuffix = sourceSlotId.split('-').pop();

        for (let i = sourcePostoNumber + 1; i <= totalPostos; i++) {
            const targetPostoId = `posto-p${String(i).padStart(2, '0')}`;
            const targetPostoElement = document.getElementById(targetPostoId);
            if (!targetPostoElement) continue;

            const targetConectorElement = targetPostoElement.querySelector(`.conector-${sourceConectorType}`);

            if (targetConectorElement) {
                const targetSlot = targetConectorElement.querySelector(`[id$="-${sourceSlotSuffix}"]`);

                if (targetSlot) {
                    const otInSlot = targetSlot.querySelector('.ot');
                    const originLabelInSlot = targetSlot.querySelector('.origin-label');

                    if (otInSlot && otInSlot.id === otId && otInSlot.dataset.isPropagated === 'true') {
                        targetSlot.removeChild(otInSlot);
                        if (originLabelInSlot) {
                            targetSlot.removeChild(originLabelInSlot);
                        }
                        targetSlot.classList.remove('has-ot');

                        const targetConectorId = targetConectorElement.id;
                        const targetSlotId = targetSlot.id;
                        if (slotContents[targetPostoId] && slotContents[targetPostoId][targetConectorId]) {
                            delete slotContents[targetPostoId][targetConectorId][targetSlotId];
                        }
                        // Não registrar OTs depropagadas no log.
                    }
                }
            }
        }
    }

    /**
     * Armazena os IDs das OTs não propagadas (originais) de todos os postos
     * para serem acessadas pela nova aba Paco-Paco.
     */
    function updateOriginalOtsByPosto() {
        originalOtsByPosto = {}; // Reseta o objeto a cada atualização
        const allPostoElements = document.querySelectorAll('.posto-container');
        allPostoElements.forEach(postoElement => {
            const postoId = postoElement.id;
            originalOtsByPosto[postoId] = [];
            const postoData = slotContents[postoId]; // OTs nos conectores

            if (postoData) {
                for (const conectorId in postoData) {
                    for (const slotId in postoData[conectorId]) {
                        const otData = postoData[conectorId][slotId];
                        if (!otData.isPropagated) { // Apenas OTs originais (não propagadas)
                            originalOtsByPosto[postoId].push(otData.otId);
                        }
                    }
                }
            }
        });
        // Armazenar no sessionStorage para a nova aba
        sessionStorage.setItem('allOriginalOtsByPosto', JSON.stringify(originalOtsByPosto));
        console.log("OTs originais por posto atualizadas para a nova aba:", originalOtsByPosto);
    }


    // --- Funções de UI/Interação ---

    function handleAutoScroll(e) {
        const clientY = e.clientY;
        const windowHeight = window.innerHeight;

        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }

        if (clientY < SCROLL_ZONE_HEIGHT) {
            window.scrollBy(0, -SCROLL_SPEED);
            scrollInterval = setInterval(() => {
                window.scrollBy(0, -SCROLL_SPEED);
            }, 20);
        } else if (clientY > windowHeight - SCROLL_ZONE_HEIGHT) {
            window.scrollBy(0, SCROLL_SPEED);
            scrollInterval = setInterval(() => {
                window.scrollBy(0, SCROLL_SPEED);
            }, 20);
        }
    }

    function stopAutoScroll() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }

    function updateProgressBar(postoId) {
        const postoContainer = document.getElementById(postoId);
        if (!postoContainer) return;

        const fillElement = postoContainer.querySelector('.progress-bar-fill');
        const labelElement = postoContainer.querySelector('.progress-time-label');
        const taktTime = parseFloat(taktTimeInput.value) || 45;
        const currentTime = postoTimes[postoId] || 0;

        const percentage = Math.min((currentTime / taktTime) * 100, 100);

        fillElement.style.width = `${percentage}%`;
        labelElement.textContent = `${currentTime.toFixed(2)}s / ${taktTime}s`;

        fillElement.classList.remove('warning', 'danger');
        if (percentage > 90) {
            fillElement.classList.add('danger');
        } else if (percentage > 70) {
            fillElement.classList.add('warning');
        }
    }

    /**
     * Cria um elemento DOM de conector completo.
     * Implementa a lógica de remoção (débito de tempo) para conectores.
     */
    function createFullConnectorElement(type, instanceId) {
        const definition = connectorDefinitions[type];
        if (!definition) return null;

        const conectorDiv = document.createElement('div');
        conectorDiv.classList.add('conector', `conector-${type}`);
        conectorDiv.id = `conector-${instanceId}`;
        conectorDiv.dataset.connectorType = type; // Essencial para rastrear o tipo
        conectorDiv.style.width = `${definition.width}px`;
        conectorDiv.style.height = `${definition.height}px`;

        const img = document.createElement('img');
        img.src = definition.imageSrc;
        img.alt = `Conector ${type}`;
        img.classList.add('conector-bg-image');
        conectorDiv.appendChild(img);

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-connector-btn');
        removeButton.textContent = 'X';
        conectorDiv.appendChild(removeButton);

        // --- Adição do Checkbox para Trava/Checagem (apenas para conectores com slots) ---
        let checkboxInput = null; // Declarar fora do if para ser acessível no listener do removeButton

        if (definition.slotPositions && definition.slotPositions.length > 0) {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('conector-checkbox-container');

            checkboxInput = document.createElement('input'); // Atribuir à variável declarada fora
            checkboxInput.type = 'checkbox';
            checkboxInput.id = `checkbox-trava-${instanceId}`;
            checkboxInput.classList.add('conector-trava-checkbox');
            checkboxInput.dataset.conectorId = conectorDiv.id;

            const checkboxLabel = document.createElement('label');
            checkboxLabel.htmlFor = `checkbox-trava-${instanceId}`;
            checkboxLabel.textContent = 'Travar/Checar Conector';

            checkboxContainer.appendChild(checkboxInput);
            checkboxContainer.appendChild(checkboxLabel); // Adiciona a label ao container
            conectorDiv.appendChild(checkboxContainer); // Adiciona o container completo ao conectorDiv

            // Lógica de Tempo para o Checkbox (Critérios 15 e 17)
            checkboxInput.addEventListener('change', (e) => {
                const currentPostoId = conectorDiv.closest('.posto-container').id;
                const isChecked = e.target.checked;
                let timeChange = 0;
                let actionDescription = "";

                if (isChecked) {
                    timeChange += TIME_LOCK_CONNECTOR;
                    timeChange += TIME_CHECK_CONNECTOR_LOCK;
                    actionDescription = `Checkbox "Travar/Checar Conector" de ${type} marcado (Travar: ${TIME_LOCK_CONNECTOR.toFixed(2)}s, Checar: ${TIME_CHECK_CONNECTOR_LOCK.toFixed(2)}s).`;
                } else {
                    timeChange -= TIME_LOCK_CONNECTOR;
                    timeChange -= TIME_CHECK_CONNECTOR_LOCK;
                    actionDescription = `Checkbox "Travar/Checar Conector" de ${type} desmarcado (Remover Travar: ${TIME_LOCK_CONNECTOR.toFixed(2)}s, Remover Checar: ${TIME_CHECK_CONNECTOR_LOCK.toFixed(2)}s).`;
                }

                postoTimes[currentPostoId] += timeChange;
                updateProgressBar(currentPostoId);

                if (!postoActionLog[currentPostoId]) postoActionLog[currentPostoId] = [];
                postoActionLog[currentPostoId].push({
                    action: actionDescription,
                    time: timeChange,
                    type: isChecked ? 'add' : 'subtract',
                    conectorId: conectorDiv.id,
                    conectorType: type
                });
                saveAppState(); // Salva estado após alteração do checkbox
            });
        }
        // --- Fim da Adição do Checkbox ---


        removeButton.addEventListener('click', () => {
            const postoId = conectorDiv.closest('.posto-container').id;
            let timeToSubtract = 0;
            let actionsLogged = []; // Para agrupar as ações de remoção

            // Obter o tempo original de adição para esta instância de conector
            const originalAddTimeForThisInstance = connectorInstanceAddTimes[conectorDiv.id] || 0;

            if (originalAddTimeForThisInstance === 0) {
                console.warn(`Tempo de adição original não encontrado para o conector ${conectorDiv.id}. Usando DUPLICATE_CONNECTOR_ADD_TIME como fallback.`);
                timeToSubtract += DUPLICATE_CONNECTOR_ADD_TIME;
                actionsLogged.push({
                    action: `Conector ${type} removido (Débito padrão por falta de registro original): -${DUPLICATE_CONNECTOR_ADD_TIME.toFixed(2)}s.`,
                    time: -DUPLICATE_CONNECTOR_ADD_TIME,
                    type: 'subtract',
                    conectorId: conectorDiv.id,
                    conectorType: type
                });
            } else {
                timeToSubtract += originalAddTimeForThisInstance; // Debita o tempo EXATO que foi adicionado
                actionsLogged.push({
                    action: `Conector ${type} removido (Débito do tempo de adição original): -${originalAddTimeForThisInstance.toFixed(2)}s.`,
                    time: -originalAddTimeForThisInstance,
                    type: 'subtract',
                    conectorId: conectorDiv.id,
                    conectorType: type
                });
            }

            // 3. Se o checkbox de trava/checagem estava marcado, descontar esses tempos
            const checkboxInput = conectorDiv.querySelector('.conector-trava-checkbox');
            if (checkboxInput && checkboxInput.checked) {
                const checkboxTime = TIME_LOCK_CONNECTOR + TIME_CHECK_CONNECTOR_LOCK;
                timeToSubtract += checkboxTime;
                actionsLogged.push({
                    action: `Checkbox "Travar/Checar Conector" de ${type} desmarcado automaticamente (devido à remoção do conector): -${checkboxTime.toFixed(2)}s.`,
                    time: -checkboxTime,
                    type: 'subtract',
                    conectorId: conectorDiv.id,
                    conectorType: type
                });
            }

            // 4. Remover OTs e seus tempos, e despropagar
            const definition = connectorDefinitions[type];
            if (definition && definition.slotPositions) { // Só se o conector tiver slots
                const slotsInConnector = conectorDiv.querySelectorAll('.slot');
                slotsInConnector.forEach(slot => {
                    const otInSlot = slot.querySelector('.ot');
                    if (otInSlot) {
                        const otIsPropagated = otInSlot.dataset.isPropagated === 'true';
                        const otOriginalId = slotContents[postoId]?.[conectorDiv.id]?.[slot.id]?.otId || otInSlot.id;

                        if (!otIsPropagated) { // Se a OT não for propagada (era original)
                            timeToSubtract += TIME_PER_OT; // Desconta o tempo da OT original
                            actionsLogged.push({
                                action: `OT ${otOriginalId} removida do slot ${slot.id.split('-').pop()} do conector ${type} (devido à remoção do conector). (Remoção de Circuitos): -${TIME_PER_OT.toFixed(2)}s.`,
                                time: -TIME_PER_OT,
                                type: 'subtract',
                                otId: otOriginalId,
                                conectorId: conectorDiv.id,
                                conectorType: type,
                                slotId: slot.id
                            });
                            depropagateOt(postoId, conectorDiv.id, slot.id, otOriginalId);

                            const otToReturn = otElementsMap.get(otOriginalId);
                            if (otToReturn) {
                                otToReturn.style.display = 'block';
                                otToReturn.draggable = true;
                                availableOts.add(otToReturn.id);

                                otToReturn.classList.remove('propagated-ot');
                                delete otToReturn.dataset.isPropagated;
                                delete otToReturn.dataset.originalPosto;
                                const paletteOtLabel = otToReturn.querySelector('.origin-label');
                                if(paletteOtLabel) {
                                    otToReturn.removeChild(paletteOtLabel);
                                }
                            }
                        }
                        slot.removeChild(otInSlot);
                        const originLabelInSlot = slot.querySelector('.origin-label');
                        if (originLabelInSlot) {
                            slot.removeChild(originLabelInSlot);
                        }
                        slot.classList.remove('has-ot');

                        if (slotContents[postoId] && slotContents[postoId][conectorDiv.id]) {
                            delete slotContents[postoId][conectorDiv.id][slot.id];
                        }
                    }
                });
            }
            if (slotContents[postoId]) {
                delete slotContents[postoId][conectorDiv.id];
                if (Object.keys(slotContents[postoId]).length === 0) {
                    delete slotContents[postoId];
                }
            }

            postoTimes[postoId] -= timeToSubtract;
            updateProgressBar(postoId);

            // Decrementa a contagem global do tipo de conector
            connectorTypeCounts[type] = (connectorTypeCounts[type] || 0) - 1;
            if (connectorTypeCounts[type] < 0) connectorTypeCounts[type] = 0;

            conectorDiv.parentNode.removeChild(conectorDiv);

            // Remover esta instância do mapa de tempos de adição
            delete connectorInstanceAddTimes[conectorDiv.id];

            if (!postoActionLog[postoId]) postoActionLog[postoId] = [];
            postoActionLog[postoId].push(...actionsLogged);

            syncOtPaletteVisibility();
            updateOriginalOtsByPosto(); // Atualiza as OTs originais para a nova aba
            saveAppState(); // Salva estado após remoção de conector
        });

        // Apenas cria slots se a definição tiver slotPositions
        if (definition.slotPositions) {
            definition.slotPositions.forEach((slotPos, slotIndex) => {
                const slotDiv = document.createElement('div');
                slotDiv.classList.add('slot');
                slotDiv.id = `${conectorDiv.id}-${slotPos.idSuffix || `slot${slotIndex + 1}`}`;
                slotDiv.style.top = `${slotPos.top}px`;
                slotDiv.style.left = `${slotPos.left}px`;
                slotDiv.style.width = `${definition.slotSize}px`;
                slotDiv.style.height = `${definition.slotSize}px`;
                conectorDiv.appendChild(slotDiv);
            });
        }

        return conectorDiv;
    }

    /**
     * Gera os contêineres dos postos de produção no DOM.
     * Reinicia a contagem de tipos de conectores e o conteúdo dos slots.
     */
    function generatePostos(num) {
        postosArea.innerHTML = '';
        postoTimes = {};
        connectorTypeCounts = {};
        slotContents = {};
        postoActionLog = {}; // Limpa o log de ações ao gerar novos postos
        connectorInstanceAddTimes = {}; // Limpa o mapa de tempos de adição de instância ao gerar novos postos
        originalOtsByPosto = {}; // Reseta o rastreamento de OTs originais por posto

        // Garante que a paleta de OTs seja re-configurada (todas visíveis e arrastáveis)
        syncOtPaletteVisibility();


        for (let i = 1; i <= num; i++) {
            const postoId = `posto-p${String(i).padStart(2, '0')}`;
            const postoContainer = document.createElement('div');
            postoContainer.classList.add('posto-container');
            postoContainer.id = postoId;

            const postoHeader = document.createElement('div');
            postoHeader.classList.add('posto-header');

            const postoTitle = document.createElement('h3');
            postoTitle.textContent = `Posto ${String(i).padStart(2, '0')}`;

            const progressBarContainer = document.createElement('div');
            progressBarContainer.classList.add('progress-bar-container');
            const progressBarFill = document.createElement('div');
            progressBarFill.classList.add('progress-bar-fill');
            const progressTimeLabel = document.createElement('span');
            progressTimeLabel.classList.add('progress-time-label');

            progressBarContainer.appendChild(progressBarFill);
            progressBarContainer.appendChild(progressTimeLabel);

            postoHeader.appendChild(postoTitle);
            postoHeader.appendChild(progressBarContainer);

            // Não adicionamos o botão "Ir para Paco-Paco deste Posto" aqui, apenas o global

            const postoContent = document.createElement('div');
            postoContent.classList.add('posto-content');

            postoContainer.appendChild(postoHeader);
            postoContainer.appendChild(postoContent);
            postosArea.appendChild(postoContainer);

            let baseTime = 0;
            if (!postoActionLog[postoId]) postoActionLog[postoId] = []; // Inicializa o log para o posto

            // Critério 1: Pegar barra de SAO e colocar na mesa (2,82s) - Adicionar ao primeiro posto
            if (i === 1) {
                baseTime += TIME_TAKE_SAO_BAR_TO_TABLE;
                postoActionLog[postoId].push({
                    action: 'Pegar barra de SAO e colocar na mesa',
                    time: TIME_TAKE_SAO_BAR_TO_TABLE,
                    type: 'add',
                    category: 'Base Time'
                });
            }
            // Critério 2: Realizar a leitura do código de barras do kanban (1,74s) - Adicionar a todos os postos
            baseTime += TIME_BARCODE_SCAN;
            postoActionLog[postoId].push({
                action: 'Realizar a leitura do código de barras do kanban',
                time: TIME_BARCODE_SCAN,
                type: 'add',
                category: 'Base Time'
            });
            // Critério 3: Colocar etiqueta kanban no S A O (5,16s) - Adicionar ao Posto 1
            if (i === 1) {
                baseTime += TIME_PLACE_KANBAN_LABEL;
                postoActionLog[postoId].push({
                    action: 'Colocar etiqueta kanban no S A O',
                    time: TIME_PLACE_KANBAN_LABEL,
                    type: 'add',
                    category: 'Base Time'
                });
            }
            // Critério 18: Passar o pente entre os postos (1,74s) - Do primeiro ao penúltimo
            const totalPostos = parseInt(numPostosSelect.value);
            if (i < totalPostos) {
                baseTime += TIME_PASS_SAO;
                postoActionLog[postoId].push({
                    action: 'Passar o pente entre os postos',
                    time: TIME_PASS_SAO,
                    type: 'add',
                    category: 'Base Time'
                });
            }
            // Critério 19: Remover pente da sub e colocar na área de montagem (8,04s) - Ao último posto
            if (i === num) {
                baseTime += TIME_REMOVE_SAO_FROM_SUB;
                postoActionLog[postoId].push({
                    action: 'Remover pente da sub e colocar na área de montagem',
                    time: TIME_REMOVE_SAO_FROM_SUB,
                    type: 'add',
                    category: 'Base Time'
                });
            }

            postoTimes[postoId] = baseTime;
            updateProgressBar(postoId);
            addPostoDragDropListeners(postoContent);

            originalOtsByPosto[postoId] = []; // Inicializa a lista de OTs originais para este posto
        }
        if (reportArea) reportArea.innerHTML = ''; // Limpa a área de relatório ao gerar novos postos
        updateOriginalOtsByPosto(); // Garante que o sessionStorage seja populado mesmo com postos vazios
        saveAppState(); // Salva estado após gerar novos postos
    }

    /**
     * Gera os itens arrastáveis na paleta de conectores.
     */
    function generateConnectorPalette() {
        connectorPalette.innerHTML = '<h2>Conectores</h2>';
        for (const type in connectorDefinitions) {
            const definition = connectorDefinitions[type];
            const draggableConnector = document.createElement('div');
            draggableConnector.classList.add('connector-draggable-item');
            draggableConnector.id = `palette-${type}`;
            draggableConnector.draggable = true;
            draggableConnector.dataset.connectorType = type;

            const img = document.createElement('img');
            img.src = definition.imageSrc;
            img.alt = `Conector ${type}`;
            draggableConnector.appendChild(img);
            const nameSpan = document.createElement('span');
            nameSpan.textContent = type;
            draggableConnector.appendChild(nameSpan);
            connectorPalette.appendChild(draggableConnector);

            draggableConnector.addEventListener('dragstart', (e) => {
                draggedConnectorType = type;
                e.dataTransfer.setData('text/plain', type);
                draggableConnector.classList.add('dragging');
            });
            draggableConnector.addEventListener('dragend', () => {
                draggableConnector.classList.remove('dragging');
                draggedConnectorType = null;
                stopAutoScroll();
            });
            draggableConnector.addEventListener('dragover', handleAutoScroll);
        }
    }

    // --- Lógica de Drag and Drop para OTs ---
    function setupOtDragDropListeners() {
        const ots = document.querySelectorAll('.ot-palette .ot');
        ots.forEach(ot => {
            // Remove listeners existentes para evitar duplicação se a função for chamada novamente
            if (ot._dragStartListener) ot.removeEventListener('dragstart', ot._dragStartListener);
            if (ot._dragEndListener) ot.removeEventListener('dragend', ot._dragEndListener);
            if (ot._dragOverListener) ot.removeEventListener('dragover', ot._dragOverListener);

            ot.draggable = true;

            ot._dragStartListener = (e) => {
                draggedOt = e.target;
                if (!availableOts.has(draggedOt.id)) {
                    e.preventDefault(); // Impede arrastar se a OT não estiver disponível
                    return;
                }
                e.dataTransfer.setData('text/plain', draggedOt.id);
                draggedOt.classList.add('dragging');
            };
            ot.addEventListener('dragstart', ot._dragStartListener);

            ot._dragEndListener = () => {
                draggedOt.classList.remove('dragging');
                draggedOt = null;
                stopAutoScroll();
            };
            ot.addEventListener('dragend', ot._dragEndListener);

            ot._dragOverListener = handleAutoScroll;
            ot.addEventListener('dragover', ot._dragOverListener);
        });
    }

    function syncOtPaletteVisibility() {
        availableOts.clear();

        const originalPaletteH2 = otPalette.querySelector('h2');
        otPalette.innerHTML = ''; // Limpa a paleta para reconstruir
        if (originalPaletteH2) {
            otPalette.appendChild(originalPaletteH2);
        }

        otGroupElementsMap.forEach(originalGroup => {
            const clonedGroup = originalGroup.cloneNode(true);
            otPalette.appendChild(clonedGroup);

            const otsInClonedGroup = clonedGroup.querySelectorAll('.ot');
            otsInClonedGroup.forEach(ot => {
                let isInUse = false;
                // Verifica se a OT está em algum conector em qualquer posto como 'original'
                for (const postoId in slotContents) {
                    for (const conectorId in slotContents[postoId]) {
                        for (const slotId in slotContents[postoId][conectorId]) {
                            const otData = slotContents[postoId][conectorId][slotId];
                            if (otData.otId === ot.id && otData.isPropagated === false) {
                                isInUse = true;
                                break;
                            }
                        }
                        if (isInUse) break;
                    }
                    if (isInUse) break;
                }

                if (isInUse) {
                    ot.style.display = 'none';
                    ot.draggable = false;
                } else {
                    ot.style.display = 'block';
                    ot.draggable = true;
                    availableOts.add(ot.id);

                    // Remove qualquer marcação de propagação que possa ter vindo do clone
                    ot.classList.remove('propagated-ot');
                    delete ot.dataset.isPropagated;
                    delete ot.dataset.originalPosto;
                    const paletteOtLabel = ot.querySelector('.origin-label');
                    if(paletteOtLabel) {
                        ot.removeChild(paletteOtLabel);
                    }
                }
            });
        });

        setupOtDragDropListeners();
    }


    /**
     * Adiciona listeners de D&D para todos os slots.
     */
    function addOTDragDropToSlots() {
        const slots = document.querySelectorAll('.posto-container .conector .slot');
        slots.forEach(slot => {
            // Remove listeners existentes para evitar duplicação
            if (slot._dragOverListener) slot.removeEventListener('dragover', slot._dragOverListener);
            if (slot._dragEnterListener) slot.removeEventListener('dragenter', slot._dragEnterListener);
            if (slot._dragLeaveListener) slot.removeEventListener('dragleave', slot._dragleaveListener);
            if (slot._dropListener) slot.removeEventListener('drop', slot._dropListener);
            if (slot._clickListener) slot.removeEventListener('click', slot._clickListener);


            slot._dragOverListener = (e) => {
                e.preventDefault();
                // Permite drop se for uma OT da paleta E o slot estiver vazio E a OT estiver disponível
                if (draggedOt && !slot.querySelector('.ot') && draggedOt.closest('.ot-palette') && availableOts.has(draggedOt.id)) {
                    slot.classList.add('drag-over');
                    handleAutoScroll(e);
                } else {
                    slot.classList.remove('drag-over');
                }
            };
            slot.addEventListener('dragover', slot._dragOverListener);

            slot._dragEnterListener = (e) => {
                e.preventDefault();
                if (draggedOt && !slot.querySelector('.ot') && draggedOt.closest('.ot-palette') && availableOts.has(draggedOt.id)) slot.classList.add('drag-over');
            };
            slot.addEventListener('dragenter', slot._dragEnterListener);

            slot._dragLeaveListener = () => {
                slot.classList.remove('drag-over');
                stopAutoScroll();
            };
            slot.addEventListener('dragleave', slot._dragLeaveListener);

            slot._dropListener = (e) => {
                e.preventDefault();
                slot.classList.remove('drag-over');
                stopAutoScroll();

                if (draggedOt && !slot.querySelector('.ot') && draggedOt.closest('.ot-palette') && availableOts.has(draggedOt.id)) {
                    const otId = e.dataTransfer.getData('text/plain');
                    const droppedOtOriginalFromPalette = otElementsMap.get(otId);

                    if (!droppedOtOriginalFromPalette) {
                        console.error(`Elemento original da OT ${otId} não encontrada.`);
                        return;
                    }

                    const postoId = slot.closest('.posto-container').id;
                    const conectorElement = slot.closest('.conector');
                    const conectorId = conectorElement.id;
                    const conectorType = conectorElement.dataset.connectorType;
                    const slotId = slot.id;

                    const otCopy = droppedOtOriginalFromPalette.cloneNode(true);
                    otCopy.classList.remove('dragging');
                    otCopy.style.position = '';
                    otCopy.style.top = '';
                    otCopy.style.left = '';
                    otCopy.dataset.isPropagated = 'false'; // Marca como OT original neste posto
                    otCopy.draggable = false; // OTs em slots não são arrastáveis

                    // Remove classes/datasets de propagação se existirem
                    otCopy.classList.remove('propagated-ot');
                    delete otCopy.dataset.isPropagated;
                    delete otCopy.dataset.originalPosto;
                    const existingOriginLabel = otCopy.querySelector('.origin-label');
                    if (existingOriginLabel) {
                        otCopy.removeChild(existingOriginLabel);
                    }

                    slot.appendChild(otCopy);
                    slot.classList.add('has-ot');

                    if (!slotContents[postoId]) slotContents[postoId] = {};
                    if (!slotContents[postoId][conectorId]) slotContents[postoId][conectorId] = {};
                    slotContents[postoId][conectorId][slotId] = { otId: otId, isPropagated: false };

                    postoTimes[postoId] += TIME_PER_OT;
                    updateProgressBar(postoId);

                    if (!postoActionLog[postoId]) postoActionLog[postoId] = [];
                    postoActionLog[postoId].push({
                        action: `OT ${otId} dropada no slot ${slotId.split('-').pop()} do conector ${conectorType}. (Inserção de Circuitos)`,
                        time: TIME_PER_OT,
                        type: 'add',
                        otId: otId,
                        conectorId: conectorId,
                        conectorType: conectorType,
                        slotId: slotId
                    });

                    // Esconde a OT da paleta principal
                    if (droppedOtOriginalFromPalette.parentNode) {
                        droppedOtOriginalFromPalette.style.display = 'none';
                        droppedOtOriginalFromPalette.draggable = false;
                        availableOts.delete(droppedOtOriginalFromPalette.id);
                    }
                    syncOtPaletteVisibility(); // Re-sincroniza a visibilidade da paleta

                    propagateOt(postoId, conectorId, slotId, droppedOtOriginalFromPalette.id);
                    updateOriginalOtsByPosto(); // NOVO: Atualiza o rastreamento de OTs originais para a nova aba
                    saveAppState(); // Salva estado após drop de OT
                }
            };
            slot.addEventListener('drop', slot._dropListener);

            slot._clickListener = (e) => {
                const clickedOt = e.target.closest('.ot');
                if (clickedOt && clickedOt.closest('.slot')) {
                    const parentSlot = clickedOt.closest('.slot');
                    const postoId = parentSlot.closest('.posto-container').id;
                    const conectorElement = parentSlot.closest('.conector');
                    const conectorId = conectorElement.id;
                    const conectorType = conectorElement.dataset.connectorType;
                    const slotId = parentSlot.id;

                    const otData = slotContents[postoId]?.[conectorId]?.[slotId];
                    if (!otData || !otData.otId) {
                        console.error('Dados da OT não encontrados para remoção.');
                        return;
                    }
                    const otOriginalId = otData.otId;
                    const isPropagated = otData.isPropagated;

                    if (!isPropagated) { // Apenas remove tempo e despropaga se for uma OT original
                        postoTimes[postoId] -= TIME_PER_OT;
                        updateProgressBar(postoId);

                        if (!postoActionLog[postoId]) postoActionLog[postoId] = [];
                        postoActionLog[postoId].push({
                            action: `OT ${otOriginalId} removida do slot ${slotId.split('-').pop()} do conector ${conectorType}. (Remoção de Circuitos)`,
                            time: -TIME_PER_OT,
                            type: 'subtract',
                            otId: otOriginalId,
                            conectorId: conectorId,
                            conectorType: conectorType,
                            slotId: slotId
                        });

                        depropagateOt(postoId, conectorId, slotId, otOriginalId);

                        const otToReturn = otElementsMap.get(otOriginalId);
                        if (otToReturn) {
                            otToReturn.style.display = 'block';
                            otToReturn.draggable = true;
                            availableOts.add(otToReturn.id);

                            otToReturn.classList.remove('propagated-ot');
                            delete otToReturn.dataset.isPropagated;
                            delete otToReturn.dataset.originalPosto;
                            const paletteOtLabel = otToReturn.querySelector('.origin-label');
                            if(paletteOtLabel) {
                                otToReturn.removeChild(paletteOtLabel);
                            }
                        }
                    } else {
                        // Se for uma OT propagada, apenas remove do DOM e de slotContents, sem alterar o tempo
                        // nem gerar log de tempo, pois o tempo já é contabilizado na OT original.
                    }
                    parentSlot.removeChild(clickedOt);
                    const originLabelInSlot = parentSlot.querySelector('.origin-label');
                    if (originLabelInSlot) {
                        parentSlot.removeChild(originLabelInSlot);
                    }
                    parentSlot.classList.remove('has-ot');

                    if (slotContents[postoId] && slotContents[postoId][conectorId]) {
                        delete slotContents[postoId][conectorId][slot.id];
                    }

                    syncOtPaletteVisibility();
                    updateOriginalOtsByPosto(); // NOVO: Atualiza o rastreamento de OTs originais para a nova aba
                    saveAppState(); // Salva estado após remoção de OT
                }
            };
            slot.addEventListener('click', slot._clickListener);

            slot.dataset.listenersAdded = 'true';
        });
    }

    // --- Lógica de Drag and Drop para Conectores ---
    function addPostoDragDropListeners(postoContent) {
        // Remove os listeners existentes para evitar duplicação ao reanexar
        if (postoContent._dragOverListener) postoContent.removeEventListener('dragover', postoContent._dragOverListener);
        if (postoContent._dragEnterListener) postoContent.removeEventListener('dragenter', postoContent._dragEnterListener);
        if (postoContent._dragleaveListener) postoContent.removeEventListener('dragleave', postoContent._dragleaveListener);
        if (postoContent._dropListener) postoContent.removeEventListener('drop', postoContent._dropListener);

        postoContent._dragOverListener = (e) => {
            e.preventDefault();
            if (draggedConnectorType) {
                postoContent.classList.add('drag-over-posto');
                handleAutoScroll(e);
            }
        };
        postoContent.addEventListener('dragover', postoContent._dragOverListener);

        postoContent._dragEnterListener = (e) => {
            e.preventDefault();
            if (draggedConnectorType) postoContent.classList.add('drag-over-posto');
        };
        postoContent.addEventListener('dragenter', postoContent._dragEnterListener);

        postoContent._dragleaveListener = () => {
            postoContent.classList.remove('drag-over-posto');
            stopAutoScroll();
        };
        postoContent.addEventListener('dragleave', postoContent._dragleaveListener);

        postoContent._dropListener = (e) => {
            e.preventDefault();
            postoContent.classList.remove('drag-over-posto');
            stopAutoScroll();
            if (draggedConnectorType) {
                const type = e.dataTransfer.getData('text/plain');
                const postoContainer = postoContent.closest('.posto-container');
                const postoId = postoContainer.id;
                const instanceId = `${postoId}-${type}-${Date.now()}`;
                const newConnectorElement = createFullConnectorElement(type, instanceId);

                if (newConnectorElement) {
                    postoContent.appendChild(newConnectorElement);

                    let timeToAdd = 0;
                    let actionDescription = "";

                    const initialTypeCount = connectorTypeCounts[type] || 0;
                    const existsInOtherPost = (initialTypeCount > 0);

                    if (!existsInOtherPost) {
                        timeToAdd += UNIQUE_CONNECTOR_ADD_TIME;
                        actionDescription = `Conector ${type} adicionado (Conector retirado da caixa e direcionado no house).`;
                    } else {
                        timeToAdd += DUPLICATE_CONNECTOR_ADD_TIME;
                        actionDescription = `Conector ${type} adicionado (Conector já presente no sistema, direcionado no house).`;
                    }

                    if (type === 'GROMMET1' || type === 'GROMMET2') {
                        timeToAdd += TIME_GROMMET_PASS_CIRCUIT;
                        actionDescription += ` Passar circuito pelo grommet (associado ao Grommet ${type}).`;
                    }

                    postoTimes[postoId] += timeToAdd;
                    updateProgressBar(postoId);

                    connectorTypeCounts[type] = (connectorTypeCounts[type] || 0) + 1;

                    // Armazenar o tempo de adição para esta instância de conector
                    connectorInstanceAddTimes[newConnectorElement.id] = timeToAdd;

                    if (!postoActionLog[postoId]) postoActionLog[postoId] = [];
                    postoActionLog[postoId].push({
                        action: actionDescription,
                        time: timeToAdd,
                        type: 'add',
                        conectorId: newConnectorElement.id,
                        conectorType: type
                    });

                    const currentPostoNumber = parseInt(postoId.replace('posto-p', ''));
                    const newConnectorType = newConnectorElement.dataset.connectorType;
                    const newConnectorId = newConnectorElement.id;
                    const newConnectorDefinition = connectorDefinitions[newConnectorType];

                    if (newConnectorDefinition && newConnectorDefinition.slotPositions) {
                        newConnectorDefinition.slotPositions.forEach((slotPos) => {
                            const newSlotId = `${newConnectorId}-${slotPos.idSuffix || `slot${slotPos.idSuffix}`}`;
                            const targetSlotElement = newConnectorElement.querySelector(`#${newSlotId}`);

                            if (targetSlotElement && !targetSlotElement.querySelector('.ot')) {
                                for (let i = 1; i < currentPostoNumber; i++) {
                                    const prevPostoId = `posto-p${String(i).padStart(2, '0')}`;
                                    if (slotContents[prevPostoId]) {
                                        for (const prevConectorId in slotContents[prevPostoId]) {
                                            const prevConectorElement = document.getElementById(prevConectorId);
                                            if (prevConectorElement && prevConectorElement.dataset.connectorType === newConnectorType) {
                                                const prevSlotId = `${prevConectorId}-${slotPos.idSuffix || `slot${slotPos.idSuffix}`}`;
                                                const otData = slotContents[prevPostoId][prevConectorId][prevSlotId];

                                                if (otData && !otData.isPropagated) {
                                                    const originalOtElement = otElementsMap.get(otData.otId);
                                                    if (originalOtElement) {
                                                        const otCopy = originalOtElement.cloneNode(true);
                                                        otCopy.classList.remove('dragging');
                                                        otCopy.style.position = '';
                                                        otCopy.style.top = '';
                                                        otCopy.style.left = '';
                                                        otCopy.dataset.isPropagated = 'true';
                                                        otCopy.draggable = false;

                                                        otCopy.classList.add('propagated-ot');
                                                        const originalDropPostoNumber = parseInt(prevPostoId.replace('posto-p', ''));
                                                        otCopy.dataset.originalPosto = `P${originalDropPostoNumber}`;

                                                        targetSlotElement.appendChild(otCopy);
                                                        targetSlotElement.classList.add('has-ot');

                                                        const originLabel = document.createElement('span');
                                                        originLabel.classList.add('origin-label');
                                                        originLabel.textContent = `P${originalDropPostoNumber}`;
                                                        targetSlotElement.appendChild(originLabel);


                                                        if (!slotContents[postoId]) slotContents[postoId] = {};
                                                        if (!slotContents[postoId][newConnectorId]) slotContents[postoId][newConnectorId] = {};
                                                        slotContents[postoId][newConnectorId][newSlotId] = { otId: otData.otId, isPropagated: true };
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                    addOTDragDropToSlots();
                    updateOriginalOtsByPosto(); // NOVO: Atualiza o rastreamento de OTs originais para a nova aba
                    saveAppState(); // Salva estado após drop de conector
                }
            }
        };
        postoContent.addEventListener('drop', postoContent._dropListener);
    }

    // --- Função para Gerar o Relatório Detalhado ---
    function generateDetailedReport() {
        let reportOutput = "<h2>Relatório Detalhado de Tempos por Posto</h2>";

        const allPostoIds = Object.keys(postoTimes).sort((a, b) => {
            const numA = parseInt(a.replace('posto-p', ''));
            const numB = parseInt(b.replace('posto-p', ''));
            return numA - numB;
        });

        if (allPostoIds.length === 0) {
            reportOutput += "<p>Nenhum posto gerado ou atividade registrada ainda.</p>";
        } else {
            for (const postoId of allPostoIds) {
                const postoElement = document.getElementById(postoId);
                const postoTitleText = postoElement ? postoElement.querySelector('h3').textContent : postoId;

                reportOutput += `<div class="report-posto-section">`;
                reportOutput += `<h3>${postoTitleText}</h3>`;
                reportOutput += `<p><strong>Tempo Total Acumulado: ${postoTimes[postoId].toFixed(2)}s</strong></p>`;
                reportOutput += `<h4>Detalhes das Ações Atuais:</h4>`; // Título ajustado
                reportOutput += `<ul>`;

                // Filtra as ações para mostrar apenas as "add"
                const currentPostoLog = (postoActionLog[postoId] || []).filter(logEntry => logEntry.type === 'add');

                if (currentPostoLog.length === 0 && postoTimes[postoId] === 0) { // Verifica se só há tempo base ou nenhum item
                    reportOutput += `<li>Nenhuma ação de tempo específica registrada além dos tempos base.</li>`;
                } else {
                    currentPostoLog.forEach(logEntry => {
                        const sign = logEntry.time >= 0 ? '+' : '';
                        reportOutput += `<li>${logEntry.action} ${sign}${logEntry.time.toFixed(2)}s</li>`;
                    });
                }

                reportOutput += `</ul>`;
                reportOutput += `</div>`;
            }
        }

        if (reportArea) {
            reportArea.innerHTML = reportOutput;
        }
    }

    // --- Função para Limpar o Relatório e Resetar Simulação ---
    function clearReportArea() {
        if (reportArea) {
            reportArea.innerHTML = '';
        }
        // Limpa o estado salvo no localStorage
        clearSavedState();
        // Regenera os postos para resetar completamente o estado da simulação
        generatePostos(parseInt(numPostosSelect.value));
        console.log("Simulação, relatório e estado salvo limpos.");
    }

    // --- Modal para Seleção de Posto para Paco-Paco (Nova Aba) ---
    function showPostoSelectionModal() {
        const numPostos = parseInt(numPostosSelect.value);
        // Se a simulação ainda não gerou postos, não há o que selecionar
        if (numPostos === 0 || Object.keys(originalOtsByPosto).length === 0) {
            alert('Por favor, gere os postos primeiro e adicione algumas OTs para usar a funcionalidade Paco-Paco detalhada.');
            return;
        }

        let selectOptions = '';
        const sortedPostoIds = Object.keys(originalOtsByPosto).sort((a, b) => {
            const numA = parseInt(a.replace('posto-p', ''));
            const numB = parseInt(b.replace('posto-p', ''));
            return numA - numB;
        });

        if (sortedPostoIds.length === 0) {
            alert('Nenhum posto disponível para o Paco-Paco detalhado. Adicione OTs aos postos primeiro.');
            return;
        }

        sortedPostoIds.forEach(postoId => {
            selectOptions += `<option value="${postoId}">Posto ${parseInt(postoId.replace('posto-p', ''))}</option>`;
        });

        // Cria o modal HTML
        const modalHtml = `
            <div id="paco-posto-modal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>Selecionar Posto para Paco-Paco Detalhado</h2>
                    <p>Escolha o posto cujas OTs você deseja organizar na nova aba:</p>
                    <select id="paco-posto-select">${selectOptions}</select>
                    <button id="confirm-paco-posto-btn">Abrir Paco-Paco</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('paco-posto-modal');
        const closeButton = modal.querySelector('.close-button');
        const postoSelect = modal.querySelector('#paco-posto-select');
        const confirmBtn = modal.querySelector('#confirm-paco-posto-btn');

        modal.style.display = 'flex'; // Exibe o modal

        // Event listeners para o modal
        closeButton.onclick = () => { modal.style.display = 'none'; modal.remove(); };
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                modal.remove();
            }
        };

        confirmBtn.onclick = () => {
            const selectedPostoId = postoSelect.value;
            if (selectedPostoId) {
                // Guarda o ID do posto selecionado para que a nova aba saiba qual posto renderizar
                sessionStorage.setItem('selectedPacoPostoIdForTab', selectedPostoId);
                // `allOriginalOtsByPosto` já está sendo salvo no `sessionStorage`
                // em `updateOriginalOtsByPosto` toda vez que algo muda nos slots.
                window.open('paco-paco.html', '_blank'); // Abre em nova aba
                modal.style.display = 'none';
                modal.remove();
            } else {
                alert('Por favor, selecione um posto.');
            }
        };
    }

    // --- Listeners Globais ---
    gerarPostosBtn.addEventListener('click', () => {
        generatePostos(parseInt(numPostosSelect.value));
    });

    taktTimeInput.addEventListener('change', () => {
        Object.keys(postoTimes).forEach(updateProgressBar);
        saveAppState(); // Salva estado após alteração do takt time
    });

    gerarRelatorioBtn.addEventListener('click', generateDetailedReport);
    limparRelatorioBtn.addEventListener('click', clearReportArea);

    goToPacoPacoBtn.addEventListener('click', showPostoSelectionModal);


    // --- Inicialização ---
    const initialOts = document.querySelectorAll('.ot-palette .ot');
    initialOts.forEach(ot => {
        initialOtOrder.push(ot.id);
        otElementsMap.set(ot.id, ot);
    });

    const initialOtGroups = document.querySelectorAll('.ot-palette .ot-group');
    initialOtGroups.forEach((group, index) => {
        const groupId = `ot-group-${index}`;
        group.id = groupId;
        otGroupElementsMap.set(groupId, group);
    });

    // Tenta carregar o estado salvo ao iniciar
    if (!loadAppState()) {
        // Se não houver estado salvo ou houver falha, gera o estado inicial
        generatePostos(parseInt(numPostosSelect.value));
        generateConnectorPalette();
    } else {
        // Se carregou o estado, garante que as paletas e postos estão configurados
        generateConnectorPalette(); // Assegura que os conectores arrastáveis da paleta tenham listeners
        // `generatePostos` é chamado dentro de `loadAppState` se houver HTML salvo
        // e `reattachListeners` é quem faz a magia de reativar tudo.
        // `syncOtPaletteVisibility` já é chamado por `loadAppState`
        // `updateOriginalOtsByPosto` já é chamado por `loadAppState`
    }
});
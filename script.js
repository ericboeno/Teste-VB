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

    // --- Variáveis de Controle ---
    let draggedOt = null;
    let draggedConnectorType = null;
    let postoTimes = {}; // Objeto para armazenar o tempo acumulado de cada posto
    let connectorTypeCounts = {}; // Armazena { 'TIPO_CONECTOR': count }
    let scrollInterval = null;

    // NOVO: Mapa para armazenar a posição original de cada OT na paleta
    // A chave é o ID da OT (string), o valor é um objeto { parent: HTMLElement, nextSibling: HTMLElement | null }
    const originalOtPositions = new Map();


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
            return false; // Conectores sem slots definidos nunca podem ter "todas as slots preenchidas"
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

    // --- Funções de UI/Interação ---

    function handleAutoScroll(e) {
        const clientY = e.clientY;
        const windowHeight = window.innerHeight;

        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }

        if (clientY < SCROLL_ZONE_HEIGHT) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, -SCROLL_SPEED);
            }, 20);
        } else if (clientY > windowHeight - SCROLL_ZONE_HEIGHT) {
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

                if (isChecked) {
                    timeChange += TIME_LOCK_CONNECTOR;
                    timeChange += TIME_CHECK_CONNECTOR_LOCK;
                } else {
                    timeChange -= TIME_LOCK_CONNECTOR;
                    timeChange -= TIME_CHECK_CONNECTOR_LOCK;
                }

                postoTimes[currentPostoId] += timeChange;
                updateProgressBar(currentPostoId);
            });
        }
        // --- Fim da Adição do Checkbox ---


        removeButton.addEventListener('click', () => {
            const postoId = conectorDiv.closest('.posto-container').id;
            let timeToSubtract = 0;

            // --- Regra de Remoção do Conector (ajustada para o novo checkbox) ---

            // 1. Débito do tempo base de adição (2,88s ou 1s)
            const initialTypeCount = connectorTypeCounts[type] || 0;
            const willBeLastInstance = (initialTypeCount === 1); 

            if (willBeLastInstance) {
                timeToSubtract += UNIQUE_CONNECTOR_ADD_TIME; 
            } else {
                timeToSubtract += DUPLICATE_CONNECTOR_ADD_TIME; 
            }
            
            // 2. Se for um Grommet, descontar o tempo "Passar circuito pelo grommet"
            if (type === 'GROMMET1' || type === 'GROMMET2') {
                timeToSubtract += TIME_GROMMET_PASS_CIRCUIT;
            }

            // 3. Se o checkbox de trava/checagem estava marcado, descontar esses tempos
            // Verifica se o checkbox existe e se estava marcado
            if (checkboxInput && checkboxInput.checked) {
                timeToSubtract += TIME_LOCK_CONNECTOR;
                timeToSubtract += TIME_CHECK_CONNECTOR_LOCK;
            }
            
            // 4. Remover OTs e seus tempos
            if (definition.slotPositions) { // Só se o conector tiver slots
                const slotsInConnector = conectorDiv.querySelectorAll('.slot');
                slotsInConnector.forEach(slot => {
                    if (slot.querySelector('.ot')) {
                        timeToSubtract += TIME_PER_OT; // Desconta o tempo de cada OT
                        const otInSlot = slot.querySelector('.ot');
                        slot.removeChild(otInSlot);
                        // AQUI: Chamar a função para retornar a OT ao seu lugar original na paleta
                        returnOtToPaletteOriginalPosition(otInSlot);
                        slot.classList.remove('has-ot');
                    }
                });
            }
            
            postoTimes[postoId] -= timeToSubtract;
            updateProgressBar(postoId);

            // Decrementa a contagem global do tipo de conector
            connectorTypeCounts[type] = (connectorTypeCounts[type] || 0) - 1;
            if (connectorTypeCounts[type] < 0) connectorTypeCounts[type] = 0; // Evita contagens negativas

            conectorDiv.parentNode.removeChild(conectorDiv);
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
     * Reinicia a contagem de tipos de conectores.
     */
    function generatePostos(num) {
        postosArea.innerHTML = '';
        postoTimes = {};
        connectorTypeCounts = {}; // Zera a contagem de tipos ao gerar novos postos

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

            const postoContent = document.createElement('div');
            postoContent.classList.add('posto-content');

            postoContainer.appendChild(postoHeader);
            postoContainer.appendChild(postoContent);
            postosArea.appendChild(postoContainer);

            // Tempo base do posto (fora dos conectores)
            let baseTime = 0;
            // Critério 1: Pegar barra de SAO e colocar na mesa (2,82s) - Adicionar ao primeiro posto
            if (i === 1) {
                baseTime += TIME_TAKE_SAO_BAR_TO_TABLE;
            }
            // Critério 2: Realizar a leitura do código de barras do kanban (1,74s) - Adicionar a todos os postos
            baseTime += TIME_BARCODE_SCAN;
            // Critério 3: Colocar etiqueta kanban no S A O (5,16s) - Adicionar ao Posto 1
            if (i === 1) {
                baseTime += TIME_PLACE_KANBAN_LABEL;
            }
            // Critério 18: Passar o pente entre os postos (1,74s) - Do primeiro ao penúltimo
            // Interpretação: para postos que não são o último (i.e., têm um próximo).
            if (i < num) {
                baseTime += TIME_PASS_SAO;
            }
            // Critério 19: Remover pente da sub e colocar na área de montagem (8,04s) - Ao último posto
            if (i === num) {
                baseTime += TIME_REMOVE_SAO_FROM_SUB;
            }

            postoTimes[postoId] = baseTime;
            updateProgressBar(postoId);
            addPostoDragDropListeners(postoContent);
        }
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

    /**
     * Retorna uma OT para a paleta, para a sua localização original (pai e irmão seguinte).
     * @param {HTMLElement} otElement - O elemento OT a ser retornado.
     */
    function returnOtToPaletteOriginalPosition(otElement) {
        const otId = otElement.id;
        const originalPos = originalOtPositions.get(otId); // Usa o ID como chave

        if (originalPos && originalPos.parent) {
            // Se o pai original ainda existe no DOM
            if (document.body.contains(originalPos.parent)) {
                if (originalPos.nextSibling && originalPos.parent.contains(originalPos.nextSibling)) {
                    // Se o próximo irmão ainda existe no pai original
                    originalPos.parent.insertBefore(otElement, originalPos.nextSibling);
                } else {
                    // Caso o próximo irmão não exista (foi removido ou era o último)
                    // Adiciona a OT ao final do pai original
                    originalPos.parent.appendChild(otElement);
                }
            } else {
                // Se o pai original não existe mais (ex: um ot-group foi removido por algum motivo)
                // Fallback para a lógica de adição no final da otPalette,
                // ou você pode implementar uma lógica mais robusta para recriar o ot-group aqui.
                otPalette.appendChild(otElement);
                console.warn(`OT ${otId} retornou, mas seu pai original não foi encontrado. Adicionando ao final da paleta.`);
            }
        } else {
            // Se não há informação de posição original (OT nunca foi arrastada ou erro)
            otPalette.appendChild(otElement);
            console.warn(`OT ${otId} retornou, mas não há informação de posição original. Adicionando ao final da paleta.`);
        }
        
        otElement.classList.remove('dragging');
    }

    // --- Lógica de Drag and Drop para OTs ---
    function setupOtDragDrop() {
        const ots = document.querySelectorAll('.ot-palette .ot');
        ots.forEach(ot => {
            // Remove listener de clique para prevenir duplicatas (abordagem defensiva)
            if (ot._myClickListener) {
                ot.removeEventListener('click', ot._myClickListener);
            }

            // Define a função do listener para ser reutilizável
            const otClickListener = (e) => {
                const parentSlot = e.target.closest('.slot');
                if (parentSlot) {
                    const postoId = parentSlot.closest('.posto-container').id; 

                    // Débito de APENAS os 5 segundos da OT.
                    postoTimes[postoId] -= TIME_PER_OT; 
                    updateProgressBar(postoId);
                    
                    parentSlot.removeChild(e.target);
                    // AQUI: Chamar a função para retornar a OT ao seu lugar original na paleta
                    returnOtToPaletteOriginalPosition(e.target); // Passa o elemento OT diretamente
                    parentSlot.classList.remove('has-ot');
                }
            };

            ot.addEventListener('dragstart', (e) => {
                draggedOt = e.target;
                e.dataTransfer.setData('text/plain', draggedOt.id);
                draggedOt.classList.add('dragging');

                // NOVO: Armazenar a posição original ao iniciar o arrasto
                const parentGroup = draggedOt.parentElement;
                const nextSibling = draggedOt.nextElementSibling; // Pode ser null se for o último no grupo
                originalOtPositions.set(draggedOt.id, { parent: parentGroup, nextSibling: nextSibling });
            });
            ot.addEventListener('dragend', () => {
                draggedOt.classList.remove('dragging');
                draggedOt = null;
                stopAutoScroll();
            });
            ot.addEventListener('dragover', handleAutoScroll);

            // Adiciona o listener de clique e armazena uma referência para remoção futura
            ot.addEventListener('click', otClickListener);
            ot._myClickListener = otClickListener;
        });
    }

    /**
     * Adiciona listeners de D&D para todos os slots.
     */
    function addOTDragDropToSlots() {
        const slots = document.querySelectorAll('.posto-container .conector .slot');
        slots.forEach(slot => {
            if (!slot.dataset.listenersAdded) {
                slot.ondragover = (e) => {
                    e.preventDefault();
                    if (draggedOt && slot.children.length === 0) {
                        slot.classList.add('drag-over');
                        handleAutoScroll(e);
                    }
                };
                slot.ondragenter = (e) => {
                    e.preventDefault();
                    if (draggedOt && slot.children.length === 0) slot.classList.add('drag-over');
                };
                slot.ondragleave = () => {
                    slot.classList.remove('drag-over');
                    stopAutoScroll();
                };
                slot.ondrop = (e) => {
                    e.preventDefault();
                    slot.classList.remove('drag-over');
                    stopAutoScroll();
                    if (draggedOt && slot.children.length === 0) {
                        const otId = e.dataTransfer.getData('text/plain');
                        const droppedOt = document.getElementById(otId);
                        const postoId = slot.closest('.posto-container').id;

                        postoTimes[postoId] += TIME_PER_OT; // Adiciona o tempo de "Inserções de Circuitos"

                        // Adiciona a OT ao slot
                        slot.appendChild(droppedOt);
                        slot.classList.add('has-ot');

                        // Lógica de adicionar tempos de trava/checagem removida daqui.
                        // Agora isso é controlado pelo checkbox.
                        updateProgressBar(postoId);
                    }
                };
                slot.dataset.listenersAdded = 'true';
            }
        });
    }

    // --- Lógica de Drag and Drop para Conectores ---
    function addPostoDragDropListeners(postoContent) {
        postoContent.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (draggedConnectorType) {
                postoContent.classList.add('drag-over-posto');
                handleAutoScroll(e);
            }
        });
        postoContent.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if (draggedConnectorType) postoContent.classList.add('drag-over-posto');
        });
        postoContent.addEventListener('dragleave', () => {
            postoContent.classList.remove('drag-over-posto');
            stopAutoScroll();
        });
        postoContent.addEventListener('drop', (e) => {
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

                    // --- Regra 1: Adicionar conector ---
                    // Verifica a contagem do TIPO de conector ANTES de incrementar
                    const initialTypeCount = connectorTypeCounts[type] || 0;
                    const existsInOtherPost = (initialTypeCount > 0); // Já existe em algum lugar no sistema?

                    if (!existsInOtherPost) { // Se é a primeira vez que este TIPO de conector é adicionado
                        timeToAdd += UNIQUE_CONNECTOR_ADD_TIME; // 2,88s
                    } else { // Se já existe em outro posto (ou seja, já tem pelo menos 1 no sistema)
                        timeToAdd += DUPLICATE_CONNECTOR_ADD_TIME; // 1s
                    }
                    
                    // Critério 11: Passar circuito pelo grommet - Adicionar toda vez que eu adicionar um Grommet ao meu posto
                    if (type === 'GROMMET1' || type === 'GROMMET2') {
                        timeToAdd += TIME_GROMMET_PASS_CIRCUIT;
                    }

                    // NOTA: Os tempos de "Travar conector" e "Checar a trava do conector" (Critérios 15 e 17)
                    // SÃO adicionados/removidos APENAS pelo checkbox agora.

                    postoTimes[postoId] += timeToAdd;
                    updateProgressBar(postoId);

                    // Incrementa a contagem global do tipo de conector
                    connectorTypeCounts[type] = (connectorTypeCounts[type] || 0) + 1;

                    addOTDragDropToSlots(); // Garante que novos slots tenham listeners
                }
            }
        });
    }

    // --- Listeners Globais ---
    gerarPostosBtn.addEventListener('click', () => {
        generatePostos(parseInt(numPostosSelect.value));
        // Resetar posições originais se os postos são gerados novamente,
        // ou se a paleta de OTs é reconstruída de alguma forma.
        // Se a paleta de OTs é estática, isso não é estritamente necessário aqui.
        // setupOtDragDrop() já inicializa e atribui os listeners.
    });

    taktTimeInput.addEventListener('change', () => {
        Object.keys(postoTimes).forEach(updateProgressBar);
    });

    // --- Inicialização ---
    // NOVO: Preencher o mapa originalOtPositions na inicialização
    // Isso garante que todas as OTs na paleta tenham sua posição inicial registrada
    // ANTES de qualquer arrasto ou remoção.
    function initializeOriginalOtPositions() {
        const otsInPalette = document.querySelectorAll('.ot-palette .ot');
        otsInPalette.forEach(ot => {
            const parentGroup = ot.parentElement;
            const nextSibling = ot.nextElementSibling;
            originalOtPositions.set(ot.id, { parent: parentGroup, nextSibling: nextSibling });
        });
    }

    // Chame a função de inicialização logo que o DOM estiver pronto
    initializeOriginalOtPositions();

    generatePostos(parseInt(numPostosSelect.value));
    generateConnectorPalette();
    setupOtDragDrop(); // Chamado na inicialização e após a geração dos postos, se necessário.
});
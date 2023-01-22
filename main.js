

// let tabar = document.querySelector('.displayTabs');
// tabar.addEventListener('click', function () { tabarRender() })

var startTab = 0;
let tab0 = document.getElementById('0');
if (startTab == 0) {
    tab0.classList.add('activeTab');
}

function tabarRender() {
    console.log('Tab bar render!')

    var arrNameTabs = document.querySelectorAll('.nameTab');
    // console.log(arrTabs)
    arrNameTabs.forEach((element, id) => {
        // element.addEventListener('click', function () { switchTab(element, id) });

        if (id == 0) {
            element.addEventListener('click', function () { switchTabH(element, id) });
        } else {
            element.addEventListener('click', function () { switchTab(element, id) });
        }
    });

    function switchTabH(e, id) {
        var activedTab = document.querySelector('.activeTab').classList.toggle('activeTab');
        e.parentNode.classList.add('activeTab');
        const closeTabs = document.querySelectorAll('.closeTab');

        var parentN = e.parentNode;
        var parentC = parentN.children[1];

        var tabWindowCollect = document.querySelectorAll('.tabWindow');
        tabWindowCollect.forEach(element => {
            element.classList.add('dN')
            if (e.id == element.id) {
                console.log("element")
                const tabHome = document.querySelector('.tabHome');
                tabHome.classList.add('dN');
                element.classList.remove('dN');
            }
        });
    };

    function switchTab(e, id) {
        var activedTab = document.querySelector('.activeTab').classList.toggle('activeTab');
        e.parentNode.classList.add('activeTab');
        const closeTabs = document.querySelectorAll('.closeTab');

        var parentN = e.parentNode;
        var parentC = parentN.children[1];

        var tabWindowCollect = document.querySelectorAll('.tabWindow');
        tabWindowCollect.forEach(element => {
            element.classList.add('dN')
            if (parentC.id == element.id) {
                console.log("element")
                const tabHome = document.querySelector('.tabHome');
                tabHome.classList.add('dN');
                element.classList.remove('dN');
            }
        });
    };

    let buttonCloseTab = document.querySelectorAll('.closeTab');
    buttonCloseTab.forEach((element, id) => { element.addEventListener('click', function () { closeTab(element, id) }) });

    function closeTab(e, id) {
        var tabH = document.getElementById('0');
        tabH.classList.add('activeTab');

        var tabWindowCollect = document.querySelectorAll('.tabWindow');
        tabWindowCollect.forEach(element => {
            element.classList.add('dN');
            if (e.id == element.id) {
                element.remove()
            }
        });
        let tabWindowH = document.querySelector('.tabHome');
        tabWindowH.classList.remove('dN');

        e.parentNode.remove();

    };
}


function createId() {
    var base = new Date();
    var id = base.getSeconds() + "id" + base.getMilliseconds();
    console.log(id)

    return id
};

let curriculo = document.querySelector('.Curriculo');
curriculo.addEventListener('click', function () { createTab('Curriculo', "createId()", 'Curriculo') })

let contrato = document.querySelector('.Contrato');
contrato.addEventListener('click', function () { createTab('Contrato', "createId()", 'Contrato') })

let orcamento = document.querySelector('.Orcamento');
orcamento.addEventListener('click', function () { createTab('Orcamento', "createId()", 'Orcamento') })

let certificado = document.querySelector('.Certificado');
certificado.addEventListener('click', function () { createTab('Certificado', "createId()", 'Certificado') })



function createTab(name, window, type) {
    var id = createId();

    let tabs = document.querySelector('.displayTabs');
    let windowTabs = document.querySelector('.displayContent');

    let createTab = document.createElement('div');
    createTab.setAttribute('class', 'tabs');

    let createNameTab = document.createElement('div');
    createNameTab.setAttribute('class', 'nameTab');
    createNameTab.innerText = name;

    let createCloseTab = document.createElement('div');
    createCloseTab.setAttribute('class', 'closeTab');
    createCloseTab.setAttribute('id', id);
    let x = '&times;';
    createCloseTab.innerText = 'x';

    let createWindowTab = document.createElement('div');
    createWindowTab.setAttribute('class', 'tabWindow dF dN');
    createWindowTab.setAttribute('id', id);
    createWindowTab.innerText = id;

    tabs.append(createTab);
    createTab.append(createNameTab);
    createTab.append(createCloseTab);

    windowTabs.append(createWindowTab);

    tabarRender()
}

let alertBoxData = [
    {
        "name": "CDN",
        "title": "CDN - Certidão de Debitos Negativo",
        "main": "PJ ou PF",
        "footerButtons": ["Pessoa Física", "Pessoa Jurídica"],
        "buttonLinks": ["https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir", "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir"]
    }, {
        "name": "Detran",
        "title": "Extrato de Veículo",
        "main": "Extrato de Veiculo, Consulta Detran MA.",
        "footerButtons": ["Detran MA", "Sefaz MA"],
        "buttonLinks": ["http://www.detran.ma.gov.br/", "https://sistemas1.sefaz.ma.gov.br/ipva/jsp/consultaDebitosIpva/consultaDebitosIpva.jsf"]
    }
];


let link1 = document.querySelector('.link1').addEventListener('click', function () { createAlertBox(alertBoxData[0]) })
let link2 = document.querySelector('.link2').addEventListener('click', function () { createAlertBox(alertBoxData[1]) })



// let alertBoxButtonMinimize = document.getElementById('headerButtonMin');
// let alertBoxMin = document.querySelector('.alertBoxMin');
// alertBoxButtonMinimize.addEventListener('click', function () { alertBoxButtonMin() });
// alertBoxMin.addEventListener('click', function () { alertBoxButtonMin() })

// alertBoxButtonMin()

function alertBoxButtonMin() {
    let alertBox = document.querySelector('.alertBox').classList;
    let alertBoxMin = document.querySelector('.alertBoxMin').classList;
    if (alertBox == 'alertBox') {
        alertBox.toggle('dN');
        // alertBoxMin.remove('dN');
        // alertBoxMin.add('dF');
    } else {
        alertBox.toggle('dN');
        // alertBoxMin.remove('dF');
        // alertBoxMin.add('dN');
    }
}


function createAlertBox(data) {
    const content = document.querySelector('.content');
    let alertBox = document.createElement('div');
    alertBox.classList.add('alertBox');

    content.append(alertBox)

    let alertBoxHeader = document.createElement('div');
    alertBoxHeader.classList.add('alertBoxHeader');

    alertBox.append(alertBoxHeader)

    let headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.innerText = data.title;

    let headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');

    let headerButtonMin = document.createElement('div');
    headerButtonMin.innerText = '_'
    let headerButtonX = document.createElement('div');
    headerButtonX.innerText = 'X'
    headerButtonMin.classList.add('headerButton');
    headerButtonX.classList.add('headerButton');
    headerButtonMin.setAttribute('id', 'headerButtonMin');
    headerButtonX.setAttribute('id', 'headerButtonX');

    headerButtons.append(headerButtonMin, headerButtonX)

    alertBoxHeader.append(headerTitle, headerButtons);


    let alertBoxMain = document.createElement('div');
    alertBoxMain.classList.add('alertBoxMain');
    alertBoxMain.innerText = data.main

    alertBox.append(alertBoxMain)

    let alertBoxFooter = document.createElement('div');
    alertBoxFooter.classList.add('alertBoxFooter');

    alertBox.append(alertBoxFooter);

    // let footerButtons = document.createElement('div');
    // footerButtons.classList.add('footerButtons');

    let footerButtonsCreated = document.createElement('div');
    footerButtonsCreated.classList.add('footerButtonsCreated');


    alertBoxFooter.append(footerButtonsCreated);

    let footerButtonOK = document.createElement('div');
    footerButtonOK.classList.add('footerButton');
    footerButtonOK.setAttribute('id', 'footerButtonOK');
    footerButtonOK.innerText = "OK";

    let buttons = data.footerButtons;
    let links = data.buttonLinks;
    let i = 0;
    buttons.forEach((element, index) => {

        var buttonId = "footerButton" + element;


        let buttonCreate = document.createElement('div');
        buttonCreate.classList.add('footerButton', 'buttonCreated');
        buttonCreate.setAttribute('id', buttonId);

        let btnLink = document.createElement('a');
        btnLink.setAttribute('href', links[index]);
        btnLink.setAttribute('target', '_blank');
        btnLink.innerText = element;

        footerButtonsCreated.append(buttonCreate);
        buttonCreate.append(btnLink);
    });


    // alertBoxFooter.append(footerButtons);

    alertBoxFooter.append(footerButtonOK);


    headerButtonX.addEventListener('click', function () {
        alertBox.remove()
    });
    footerButtonOK.addEventListener('click', function () {
        alertBox.remove()
    });


};





{/* <div class="alertBox dN">
    <div class="alertBoxHeader">
        <div class="headerTitle">Certidão Negativa de Débitos</div>
        <div class="headerButtons">
            <div id="headerButtonMin" class="headerButton">_</div>
            <div id="headerButtonX" class="headerButton">X</div>
        </div>
    </div>
    <div class="alertBoxMain">
        <a href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir" target="_blank"><div class="LiButton">Pessoa Fisica</div></a>
        <a href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir" target="_blank"><div class="LiButton">Pessoa Juridica</div></a>
    </div>
    <div class="alertBoxFooter">
        div.footerButtonsCreated
        <div class="footerButtons">
            <div id="footerButtonOK" class="footerButton">Ok</div>
        </div>
    </div>
</div> */}
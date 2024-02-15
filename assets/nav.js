const infoButton = document.getElementById('info-button');
const traitButton = document.getElementById('trait-button');
const assetButton = document.getElementById('asset-button');
const ioButton = document.getElementById('io-button');

function goInfo() {
    infoButton.classList.add('active')
    traitButton.classList.remove('active');
    assetButton.classList.remove('active');
    ioButton.classList.remove('active');

    document.getElementById('charinfo').classList.remove('d-none');
    document.getElementById('traits').classList.add('d-none');
    document.getElementById('assets').classList.add('d-none');
    document.getElementById('io').classList.add('d-none');
}

function goTrait() {
    infoButton.classList.remove('active');
    traitButton.classList.add('active');
    assetButton.classList.remove('active');
    ioButton.classList.remove('active');

    document.getElementById('charinfo').classList.add('d-none');
    document.getElementById('traits').classList.remove('d-none');
    document.getElementById('assets').classList.add('d-none');
    document.getElementById('io').classList.add('d-none');
}

function goAsset() {
    infoButton.classList.remove('active');
    traitButton.classList.remove('active');
    assetButton.classList.add('active');
    ioButton.classList.remove('active');

    document.getElementById('charinfo').classList.add('d-none');
    document.getElementById('traits').classList.add('d-none');
    document.getElementById('assets').classList.remove('d-none');
    document.getElementById('io').classList.add('d-none');
}

function goIO() {
    infoButton.classList.remove('active');
    traitButton.classList.remove('active');
    assetButton.classList.remove('active');
    ioButton.classList.add('active');

    document.getElementById('charinfo').classList.add('d-none');
    document.getElementById('traits').classList.add('d-none');
    document.getElementById('assets').classList.add('d-none');
    document.getElementById('io').classList.remove('d-none');
}

function createSFX(number) {
    const p = document.createElement('p');
    p.innerHTML = '<strong contenteditable="true">Nome</strong> - <span contenteditable="true">Efeito</span>';

    let parent = null;
    if (number === 0) {
        parent = "speciesDistinction";
    } else {
        parent = "customDistinction" + number;
    }

    parent = document.getElementById(parent);

    let buttons = [...parent.children];
    buttons = buttons[buttons.length - 1];

    buttons.before(p);
}

function deleteSFX(number) {
    let parent = null;
    if (number === 0) {
        parent = "speciesDistinction";
    } else {
        parent = "customDistinction" + number;
    }

    const ps = [...document.getElementById(parent).children].filter(e => e.tagName === "P");

    if (ps.length > 1) {
        ps[ps.length - 1].remove();
    }
}
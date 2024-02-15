const infoButton = document.getElementById('info-button');
const traitButton = document.getElementById('trait-button');
const assetButton = document.getElementById('asset-button');

function goInfo() {
    infoButton.classList.add('active')
    traitButton.classList.remove('active');
    assetButton.classList.remove('active');

    document.getElementById('charinfo').classList.remove('d-none');
    document.getElementById('traits').classList.add('d-none');
    document.getElementById('assets').classList.add('d-none');
}

function goTrait() {
    infoButton.classList.remove('active');
    traitButton.classList.add('active');
    assetButton.classList.remove('active');

    document.getElementById('charinfo').classList.add('d-none');
    document.getElementById('traits').classList.remove('d-none');
    document.getElementById('assets').classList.add('d-none');
}

function goAsset() {
    infoButton.classList.remove('active');
    traitButton.classList.remove('active');
    assetButton.classList.add('active');

    document.getElementById('charinfo').classList.add('d-none');
    document.getElementById('traits').classList.add('d-none');
    document.getElementById('assets').classList.remove('d-none');
}
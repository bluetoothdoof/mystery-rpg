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

function createSFX(number, val) {
    const p = document.createElement('p');
    p.innerHTML = val ? val : '<strong contenteditable="true">Nome</strong> - <span contenteditable="true">Efeito</span>';

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

function deleteSFX(number, forceDelete) {
    let parent = null;
    if (number === 0) {
        parent = "speciesDistinction";
    } else {
        parent = "customDistinction" + number;
    }

    const ps = [...document.getElementById(parent).children].filter(e => e.tagName === "P");

    if (ps.length > 1 || (ps.length > 0 && forceDelete)) {
        ps[ps.length - 1].remove();
    }
}

function createAsset(isChronic, val) {
    const p = document.createElement('p');
    p.innerHTML = val ? val : '<strong contenteditable="true">Nome</strong> (<span contenteditable="true">d6</span>)';

    let id = "asset-box";
    if (isChronic) {
        id += "-chronic";
    }

    let parent = document.getElementById(id);

    let buttons = [...parent.children];
    buttons = buttons[buttons.length - 1];

    buttons.before(p);
}

function deleteAsset(isChronic) {
    let id = "asset-box";
    if (isChronic) {
        id += "-chronic";
    }

    const ps = [...document.getElementById(id).children].filter(e => e.tagName === "P");

    if (ps.length > 0) {
        ps[ps.length - 1].remove();
    }
}

function createComplication(isChronic, val) {
    const p = document.createElement('p');
    p.innerHTML = val ? val : '<strong contenteditable="true">Nome</strong> (<span contenteditable="true">d6</span>)';

    let id = "complication-box";
    if (isChronic) {
        id += "-chronic";
    }

    let parent = document.getElementById(id);

    let buttons = [...parent.children];
    buttons = buttons[buttons.length - 1];

    buttons.before(p);
}

function deleteComplication(isChronic) {
    let id = "complication-box";
    if (isChronic) {
        id += "-chronic";
    }

    const ps = [...document.getElementById(id).children].filter(e => e.tagName === "P");

    if (ps.length > 0) {
        ps[ps.length - 1].remove();
    }
}

function buildContext() {
    const ctx = {};

    ctx.name = document.getElementById('char-name').value;
    ctx.species = document.getElementById('speciesInput').value;
    ctx.age = document.getElementById('char-age').value;
    ctx.backstory = document.getElementById('char-backstory').value;

    ctx.potential = document.getElementById('potencial').value;
    ctx.life = [
        document.getElementById('curr-life').value,
        document.getElementById('max-life').value
    ];
    ctx.plotpoint = document.getElementById('plotpoint').value;

    ctx.constat = document.getElementById('con-stat').value;
    ctx.powstat = document.getElementById('pow-stat').value;
    ctx.prostat = document.getElementById('pro-stat').value;
    ctx.socstat = document.getElementById('soc-stat').value;
    ctx.dexstat = document.getElementById('dex-stat').value;

    ctx.skills = []
    for (let i = 1; i < 16; ++i) {
        ctx.skills.push(
            document.getElementById('skill' + i + '-inp').value
        );
    }

    ctx.speciesSFX = [...document.getElementById('speciesDistinction').children].filter(e => e.tagName === "P").map(e => e.innerHTML);

    ctx.customSFXs = []
    for (let i = 1; i < 4; ++i) {
        let sfxs = [...document.getElementById('customDistinction' + i).children].filter(e => e.tagName === "P").map(e => e.innerHTML);
        ctx.customSFXs.push(sfxs);
    }

    ctx.assets = [...document.getElementById('asset-box').children].filter(e => e.tagName === "P").map(e => e.innerHTML);
    ctx.chronicAssets = [...document.getElementById('asset-box-chronic').children].filter(e => e.tagName === "P").map(e => e.innerHTML);

    ctx.complications = [...document.getElementById('complication-box').children].filter(e => e.tagName === "P").map(e => e.innerHTML);
    ctx.chronicComplications = [...document.getElementById('complication-box-chronic').children].filter(e => e.tagName === "P").map(e => e.innerHTML);

    document.getElementById('io-box').value = JSON.stringify(ctx, null, 2);
}

function readContext() {
    const ctx = JSON.parse(document.getElementById('io-box').value);

    document.getElementById('char-name').value = ctx.name;
    document.getElementById('speciesInput').value = ctx.species;
    document.getElementById('char-age').value = ctx.age;
    document.getElementById('char-backstory').value = ctx.backstory;

    document.getElementById('potencial').value = ctx.potential;
    document.getElementById('curr-life').value = ctx.life[0];
    document.getElementById('max-life').value = ctx.life[1];
    document.getElementById('plotpoint').value = ctx.plotpoint;

    document.getElementById('con-stat').value = ctx.constat;
    document.getElementById('pow-stat').value = ctx.powstat;
    document.getElementById('pro-stat').value = ctx.prostat;
    document.getElementById('soc-stat').value = ctx.socstat;
    document.getElementById('dex-stat').value = ctx.dexstat;

    for (let i = 1; i < 16; ++i) {
        document.getElementById('skill' + i + '-inp').value = ctx.skills[i - 1];
    }

    let sfxs = [...document.getElementById('speciesDistinction').children];
    for (let i = 0; i < sfxs.length; ++i) {
        deleteSFX(0, true);
    }

    for (let i = 0; i < ctx.speciesSFX.length; ++i) {
        createSFX(0, ctx.speciesSFX[i]);
    }

    for (let j = 1; j < 4; ++j) {
        let sfxs = [...document.getElementById('customDistinction' + j).children];
        for (let i = 0; i < sfxs.length; ++i) {
            deleteSFX(j, true);
        }

        for (let i = 0; i < ctx.customSFXs[j - 1].length; ++i) {
            createSFX(j, ctx.customSFXs[j - 1][i]);
        }
    }

    sfxs = [...document.getElementById('asset-box').children];
    for (let i = 0; i < sfxs.length; ++i) {
        deleteAsset(false);
    }

    for (let i = 0; i < ctx.assets.length; ++i) {
        createAsset(false, ctx.assets[i]);
    }

    sfxs = [...document.getElementById('asset-box-chronic').children];
    for (let i = 0; i < sfxs.length; ++i) {
        deleteAsset(true);
    }

    for (let i = 0; i < ctx.chronicAssets.length; ++i) {
        createAsset(true, ctx.chronicAssets[i]);
    }

    sfxs = [...document.getElementById('complication-box').children];
    for (let i = 0; i < sfxs.length; ++i) {
        deleteComplication(false);
    }

    for (let i = 0; i < ctx.assets.length; ++i) {
        createComplication(false, ctx.complications[i]);
    }

    sfxs = [...document.getElementById('complication-box-chronic').children];
    for (let i = 0; i < sfxs.length; ++i) {
        deleteComplication(true);
    }

    for (let i = 0; i < ctx.chronicAssets.length; ++i) {
        createComplication(true, ctx.chronicComplications[i]);
    }
}
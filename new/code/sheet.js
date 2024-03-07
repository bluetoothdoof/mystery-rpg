var isSkillTracking = false;
var isStatTracking = false;

function selectSheetTab(name) {
    const tabs = ['info', 'trait', 'asset', 'io'];

    for (const tab of tabs) {
        if (tab === name) {
            document.getElementById(tab).classList.remove('d-none');
            document.getElementById(`${tab}-button`).classList.add('active');
        } else {
            document.getElementById(tab).classList.add('d-none');
            document.getElementById(`${tab}-button`).classList.remove('active');
        }
    }
}

function calculateStatPoints() {
    const stats = [...document.getElementById('stat-block').children].map(e => [...e.children][1]);

    let points = 10;
    for (const stat of stats) {
        const value = +stat.value;
        points -= Math.floor((value - 4) / 2);
    }

    let msg = "";
    if (isStatTracking) {
        msg = ` (${points}/10)`;
        if (points < 0) {
            msg = '<span style="color: rgb(197, 8, 83)">' + msg + '</span>';
        }
    }

    document.getElementById('stat-header').innerHTML = `Atributos${msg}`;
}

[...document.getElementById('stat-block').children].forEach(elem => {
    const input = [...elem.children][1];
    input.oninput = calculateStatPoints;
});

function statTrackerToggle() {
    isStatTracking = !isStatTracking;
    calculateStatPoints();
}

function calculateSkillPoints() {
    let points = 10;
    for (let i = 1; i < 16; ++i) {
        const value = +document.getElementById(`skill${i}-inp`).value;
        points -= Math.floor((value - 4) / 2);
    }

    let msg = "";
    if (isSkillTracking) {
        msg = ` (${points}/10)`;
        if (points < 0) {
            msg = '<span style="color: rgb(197, 8, 83)">' + msg + '</span>';
        }
    }

    document.getElementById('skill-header').innerHTML = `Perícias${msg}`;
}

for (let i = 1; i < 16; ++i) {
    document.getElementById(`skill${i}-inp`).oninput = calculateSkillPoints;
}

function skillTrackerToggle() {
    isSkillTracking = !isSkillTracking;
    calculateSkillPoints();
}

function createSFX(val) {
    const p = document.createElement('p');
    p.innerHTML = val ? val : '<strong contenteditable="true">Nome</strong> - <span contenteditable="true">Efeito</span>';

    const parent = document.getElementById("abilities");

    let buttons = [...parent.children];
    buttons = buttons[buttons.length - 1];

    buttons.before(p);
}

function deleteSFX(forceDelete) {
    const parent = document.getElementById("abilities")

    const ps = [...parent.children].filter(e => e.tagName === "P");

    if (ps.length > 1 || (ps.length > 0 && forceDelete)) {
        ps[ps.length - 1].remove();
    }
}

function createAsset(val) {
    const p = document.createElement('p');
    p.innerHTML = val ? val : '<strong contenteditable="true">Nome</strong> (<span contenteditable="true">d6</span>)';

    let id = "asset-box";

    let parent = document.getElementById(id);

    let buttons = [...parent.children];
    buttons = buttons[buttons.length - 1];

    buttons.before(p);
}

function deleteAsset() {
    let id = "asset-box";

    const ps = [...document.getElementById(id).children].filter(e => e.tagName === "P");

    if (ps.length > 0) {
        ps[ps.length - 1].remove();
    }
}

// Activating tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(elem => new bootstrap.Tooltip(elem));

// Read & Write functions
function exportStats() {
    const ctx = {};

    // Personal block
    ctx.name = document.getElementById('char-name').value;
    ctx.species = document.getElementById('speciesInput').value;
    ctx.age = document.getElementById('char-age').value;
    ctx.backstory = document.getElementById('char-backstory').value;

    // Traits
    ctx.potential = document.getElementById('potential').value;
    ctx.life = [document.getElementById('curr-life').value, document.getElementById('max-life').value];

    ctx.stats = [...document.getElementById('stat-block').children].map(e => [...e.children][1].value);
    ctx.skills = [...Array(15).keys()].map(i => document.getElementById('skill' + (i + 1) + '-inp').value);

    ctx.abilities = [...document.getElementById('abilities').children].filter(e => e.tagName === "P").map(e => e.innerHTML);

    // Assets
    ctx.assets = [...document.getElementById('asset-box').children].filter(e => e.tagName === "P").map(e => e.innerHTML);

    document.getElementById('io-box').value = JSON.stringify(ctx, null, 2);
}

function importStats() {
    const ctx = JSON.parse(document.getElementById('io-box').value);

    document.getElementById('char-name').value = ctx.name;
    document.getElementById('speciesInput').value = ctx.species;
    document.getElementById('char-age').value = ctx.age
    document.getElementById('char-backstory').value = ctx.backstory;

    // Traits
    document.getElementById('potential').value = ctx.potential;

    document.getElementById('curr-life').value = ctx.life[0];
    document.getElementById('max-life').value = ctx.life[1];

    [...document.getElementById('stat-block').children].forEach((e, i) => {
        const input = [...e.children][1]
        input.value = ctx.stats[i];
    });

    [...Array(15).keys()].forEach(i => {
        document.getElementById('skill' + (i + 1) + '-inp').value = ctx.skills[i];
    });

    let abilities = [...document.getElementById('abilities').children];
    for (let i = 0; i < abilities.length; ++i) {
        deleteSFX(true);
    }

    for (let i = 0; i < ctx.abilities.length; ++i) {
        createSFX(ctx.abilities[i]);
    }

    let assets = [...document.getElementById('asset-box').children];
    for (let i = 0; i < assets.length; ++i) {
        deleteAsset();
    }

    for (let i = 0; i < ctx.assets.length; ++i) {
        createAsset(ctx.assets[i]);
    }
}
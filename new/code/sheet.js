window.onload = () => {
    const speciesDatalist = document.getElementById('species');

    for (const mon of dex) {
        const { name } = mon;

        const opt = document.createElement('option');
        opt.value = name;

        speciesDatalist.appendChild(opt);
    }
}

function updateType(types) {
    const typeBox = document.getElementById('monTypes');
    for (const child of [...typeBox.children]) {
        child.remove();
    }

    for (const type of types) {
        const div = document.createElement('div');

        const color = ({
            normal: "#A8A878", fighting: "#C03028", flying: "#A890F0", poison: "#A040A0",
            ground: "#E0C068", rock: "#B8A038", bug: "#A8B820", ghost: "#705898",
            steel: "#B8B8D0", fire: "#F08030", water: "#6890F0", grass: "#78C850",
            electric: "#F8D030", psychic: "#F85888", ice: "#98D8D8", dragon: "#7038F8",
            dark: "#705848", fairy: "#EE99AC"
        })[type.toLowerCase()];

        const style = "width: 100%; color: #FFF;" +
            'text-align: center; font-family: "Space Mono", monospace;' +
            `background-color: ${color};` +
            "border: 1px solid #222;";

        div.style = style;
        div.innerHTML = type.toUpperCase();

        typeBox.appendChild(div);
    }
}

function getTreatedName(rawName) {
    let name = rawName.replace(/(\.|:)/g, '-').replace(/(\s+|')/g, '').toLowerCase();

    const suffixes = ['alolan', 'galarian', 'hisuian', 'paldean'];
    for (const suffix of suffixes) {
        if (name.startsWith(suffix)) {
            return name.slice(suffix.length) + '-' + suffix;
        }
    }

    const exact = {
        tauroscombat: 'tauros-paldean', taurosblaze: 'tauros-blaze',
        taurosaqua: 'tauros-aqua', mimejr: 'mime-jr',
        oricoriopa: 'oriocorio-pau', toxtricitya: 'toxtricity-amped',
        toxtricityl: 'toxtricity-low-key', calyrexi: 'calyrex-ice-rider',
        calyrexs: 'calyrex-shadow-rider', urshifus: 'urshifu-single-strike',
        urshifur: 'urshifu-rapid-strike', nidoranf: 'nidoran-f', nidoranm: 'nidoran-m',
        sandysh: 'sandy-shocks'
    };
    for (const [key, value] of Object.entries(exact)) {
        if (name.startsWith(key)) {
            return value;
        }
    }

    const prefixes = [
        'oricorio', 'lycanroc', 'tapu', 'indeedee', 'basculegion',
        'meowstic', 'oinkologne', 'tatsugiri', 'great', 'scream',
        'brute', 'flutter', 'slither', 'iron', 'gimmighoul', 'roaring',
        'walking', 'gouging', 'raging'];
    for (const prefix of prefixes) {
        if (name.startsWith(prefix)) {
            return prefix + '-' + name.slice(prefix.length);
        }
    }

    return name;
}

function updateImageTypeInfo(name) {
    const data = dex.filter(p => p.name.toLowerCase() === name.toLowerCase());
    if (data.length == 0) {
        return;
    }

    updateType(data[0].types);

    const treatedName = getTreatedName(name);
    const imgSrc = `https://img.pokemondb.net/artwork/large/${treatedName}.jpg`;
    document.getElementById('speciesImage').src = imgSrc;
}

document.getElementById('speciesInput').addEventListener('input', event => {
    const name = event.target.value;
    updateImageTypeInfo(name);
})

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

function createAbility(val) {
    let name = "Nome";
    let effect = "Efeito";
    if (val && val.length == 2) {
        [name, effect] = val;
    }

    const parent = document.getElementById("abilities");

    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'flex-column', 'pb-1');
    outerDiv.innerHTML = `<div class="d-flex flex-row justify-content-between"><strong contenteditable>${name}</strong>` +
        '<img src="assets/trash.svg" alt="ícone de deletar" height="20" width="20" onclick="deleteAbility(event)"/></div>' +
        `<p contenteditable>${effect}</p>`;

    parent.appendChild(outerDiv);
}

function deleteAbility(event) {
    event.target.parentElement.parentElement.remove();
}

function createCondition(val) {
    let name = "Nome";
    let dice = "d6";
    if (val && val.length == 2) {
        [name, dice] = val;
    }

    let parent = document.getElementById("asset-box");

    const outerDiv = document.createElement('div');
    outerDiv.classList.add('d-flex', 'flex-row', 'justify-content-between', 'pb-1');
    outerDiv.innerHTML = `<span><strong contenteditable="true">${name}</strong> (<span contenteditable="true">${dice}</span>)</span>` +
        '<img src="assets/trash.svg" alt="ícone de deletar" height="20" width="20" onclick="deleteCondition(event)"/></div>';

    parent.appendChild(outerDiv);
}

function deleteCondition(event) {
    event.target.parentElement.remove()
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

    ctx.abilities = [...document.getElementById('abilities').children]
        // First is default
        .slice(1)
        .map(elem => {
            const [innerDiv, p] = [...elem.children];
            const name = [...innerDiv.children][0];

            return [name.innerHTML, p.innerHTML]
        });

    // Assets
    ctx.assets = [...document.getElementById('asset-box').children]
        // First is header
        .slice(1)
        .map(elem => {
            const [name, dice] = [...[...elem.children][0].children];

            return [name.innerHTML, dice.innerHTML]
        });

    document.getElementById('io-box').value = JSON.stringify(ctx, null, 2);
}

function importStats() {
    const ctx = JSON.parse(document.getElementById('io-box').value);

    document.getElementById('char-name').value = ctx.name;
    document.getElementById('speciesInput').value = ctx.species;
    document.getElementById('char-age').value = ctx.age
    document.getElementById('char-backstory').value = ctx.backstory;

    updateImageTypeInfo(ctx.species);

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
    for (let i = 1; i < abilities.length - 1; ++i) {
        abilities[i].remove();
    }

    for (let i = 0; i < ctx.abilities.length; ++i) {
        createAbility(ctx.abilities[i]);
    }

    let assets = [...document.getElementById('asset-box').children];
    for (let i = 1; i < assets.length; ++i) {
        assets[i].remove();
    }

    for (let i = 0; i < ctx.assets.length; ++i) {
        createCondition(ctx.assets[i]);
    }
}

// Update image
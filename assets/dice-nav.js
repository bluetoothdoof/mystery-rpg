function goDice() {
    document.getElementById('dice-button').classList.add('active');
    document.getElementById('dmg-button').classList.remove('active');

    document.getElementById('dice').classList.remove('d-none');
    document.getElementById('dmg').classList.add('d-none');
}

function goDamage() {
    document.getElementById('dice-button').classList.remove('active');
    document.getElementById('dmg-button').classList.add('active');

    document.getElementById('dice').classList.add('d-none');
    document.getElementById('dmg').classList.remove('d-none');
}

function procDice() {
    const text = document.getElementById('dice-input').value;
    const dice = parseDice(text);
    const rolls = rollDice(dice);
    const msg = buildMessage(rolls);

    document.getElementById('dice-results').innerHTML = msg;
}

function parseDice(text) {
    const val = text.replaceAll(/\s/g, "");

    const tokens = [];
    let current = ['+', ""];
    let index = 0;
    while (index < val.length) {
        if (val[index] !== '+' && val[index] !== '-') {
            current[1] += val[index];
        } else {
            tokens.push(current);
            current = [val[index], ""];
        }

        ++index;
    }
    tokens.push(current);

    const dices = { sums: [], diffs: [] };
    const pattern = /(\d+)?d(\d+)/;
    for (const [op, dice] of tokens) {
        const matches = pattern.exec(dice).slice(1);
        if (matches[0] === undefined) {
            matches[0] = "1";
        }

        if (op === "+") {
            dices.sums.push(matches.map(e => +e));
        } else {
            dices.diffs.push(matches.map(e => +e));
        }
    }

    return dices;
}

function rollDice(dice) {
    const rolls = { sums: [], diffs: [] };
    for (const [number, sides] of dice.sums) {
        for (let i = 0; i < number; ++i) {
            const roll = (Math.random() * sides + 1) | 0;
            rolls.sums.push([sides, roll]);
        }
    }
    rolls.sums.sort((a, b) => a[0] - b[0]);

    for (const [number, sides] of dice.diffs) {
        for (let i = 0; i < number; ++i) {
            const roll = (Math.random() * sides + 1) | 0;
            rolls.diffs.push([sides, roll]);
        }
    }
    rolls.diffs.sort((a, b) => a[0] - b[0]);

    return rolls;
}

function buildMessage(rolls) {
    let total = rolls.sums.reduce((acc, val) => acc + val[1], 0);
    total = rolls.diffs.reduce((acc, val) => acc - val[1], total);

    let msg = `O total das rolagens foi ${total}<br><br>`;

    msg += "Dos dados positivos:<br>";
    for (const side of [4, 6, 8, 10, 12]) {
        const vals = rolls.sums.filter(e => e[0] === side).map(e => {
            const val = e[1];
            if (val === 1) {
                return ' <strong>1</strong>';
            } else {
                return ` ${val}`;
            }
        });

        if (vals.length > 0) {
            vals[0] = vals[0].slice(1);
            msg += `&nbsp;&nbsp;d${side} - [${vals}]<br>`;
        }
    }

    msg += "<br>Dos dados negativos:<br>";
    for (const side of [4, 6, 8, 10, 12]) {
        const vals = rolls.diffs.filter(e => e[0] === side).map(e => {
            const val = e[1];
            if (val === 1) {
                return ' <strong>1</strong>';
            } else {
                return ` ${val}`;
            }
        });

        if (vals.length > 0) {
            vals[0] = vals[0].slice(1);
            msg += `&nbsp;&nbsp;d${side} - [${vals}]<br>`;
        }
    }

    return msg;
}

function getEffectiveness(atkType, defType1, defType2) {
    const sfx = {
        normal: { rock: 0.5, steel: 0.5, ghost: 0 },
        fighting: { normal: 2, rock: 2, steel: 2, ice: 2, dark: 2, flying: 0.5, poison: 0.5, bug: 0.5, psychic: 0.5, fairy: 0.5, ghost: 0 },
        flying: { fighting: 2, bug: 2, grass: 2, rock: 2, electric: 0.5, steel: 0.5 },
        poison: { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
        ground: { poison: 2, rock: 2, steel: 2, fire: 2, electric: 2, bug: 0.5, grass: 0.5, flying: 0 },
        rock: { flying: 2, bug: 2, fire: 2, ice: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
        bug: { grass: 2, psychic: 2, dark: 2, fighting: 0.5, flying: 0.5, poison: 0.5, ghost: 0.5, steel: 0.5, fire: 0.5, fairy: 0.5 },
        ghost: { ghost: 2, psychic: 2, dark: 0.5, normal: 0 },
        steel: { rock: 2, ice: 2, fairy: 2, steel: 0.5, fire: 0.5, water: 0.5, electric: 2 },
        fire: { bug: 2, steel: 2, grass: 2, ice: 2, rock: 0.5, fire: 0.5, water: 0.5, dragon: 0.5 },
        water: { ground: 2, rock: 2, fire: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
        grass: { ground: 2, rock: 2, water: 2, flying: 0.5, poison: 0.5, bug: 0.5, steel: 0.5, fire: 0.5, grass: 0.5, dragon: 0.5 },
        electric: { flying: 2, water: 2, grass: 0.5, electric: 0.5, dragon: 0.5, ground: 0 },
        psychic: { fighting: 2, poison: 2, steel: 0.5, psychic: 0.5, dark: 0 },
        ice: { flying: 2, ground: 2, grass: 2, dragon: 2, steel: 0.5, fire: 0.5, water: 0.5, ice: 0.5 },
        dragon: { dragon: 2, steel: 0.5, fairy: 0 },
        dark: { ghost: 2, psychic: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 },
        fairy: { fighting: 2, dragon: 2, dark: 2, poison: 0.5, steel: 0.5, fire: 0.5 }
    };

    let val = 1;
    if (sfx[atkType] !== undefined && sfx[atkType][defType1] !== undefined) {
        val *= sfx[atkType][defType1];
    }

    if (sfx[atkType] !== undefined && sfx[atkType][defType2] !== undefined) {
        val *= sfx[atkType][defType2];
    }

    return val;
}

function procDmg() {
    const atkType = document.getElementById('atk-type').value;
    const defType1 = document.getElementById('def-type1').value;
    const defType2 = document.getElementById('def-type2').value;

    const sfx = getEffectiveness(atkType, defType1, defType2);
    const dice = +document.getElementById('atk-stage').value;

    let rollNum = 1;
    if (sfx === 0.25 || sfx === 4) {
        rollNum = 3;
    } else if (sfx === 0.5 || sfx === 2) {
        rollNum = 2;
    } else if (sfx === 0) {
        rollNum = 0;
    }

    let op = sfx < 1 ? 'min' : 'max';
    let rolls = [];
    for (let i = 0; i < rollNum; ++i) {
        const roll = (Math.random() * dice + 1) | 0;
        rolls.push(roll);
    }

    let final = op === 'min' ? rolls.reduce((acc, val) => Math.min(acc, val)) : rolls.reduce((acc, val) => Math.max(acc, val));

    rolls = rolls.map(e => ` ${e}`);
    rolls[0] = rolls[0].slice(1);

    msg = `O valor de dano foi ${final}<br><br>`;
    msg += `Os dados rolados foram [${rolls}]`;
    console.log(msg);

    document.getElementById('dmg-results').innerHTML = msg;
}
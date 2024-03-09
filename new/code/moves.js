const moves = [
    { name: "Aqua Tail", type: "Water", dice: ["Atk", "Lutar"], base: 9 },
    { name: "Boomburst", type: "Normal", dice: ["Int", "Estrelar"], base: 14, notes: ["sound"] },
    { name: "Branch Poke", type: "Grass", dice: ["Atk", "Lutar"], base: 4 },
    { name: "Brutal Swing", type: "Dark", dice: ["Atk", "Lutar"], base: 6 },
    { name: "Cut", type: "Normal", dice: ["Atk", "Lutar"], base: 5 },
    { name: "Dazzling Gleam", type: "Fairy", dice: ["Int", "Atirar"], base: 8 },
    { name: "Dragon Claw", type: "Dragon", dice: ["Atk", "Lutar"], base: 8 },
    { name: "Dragon Hammer", type: "Dragon", dice: ["Atk", "Lutar"], base: 9 },
    { name: "Dragon Pulse", type: "Dragon", dice: ["Int", "Atirar"], base: 8 },
    { name: "Drill Peck", type: "Flying", dice: ["Atk", "Lutar"], base: 8 },
    { name: "Egg Bomb", type: "Normal", dice: ["Dex", "Atirar"], base: 10 },
    { name: "Fairy Wind", type: "Fairy", dice: ["Int", "Criar"], base: 4, notes: ["light"] },
    { name: "Flame Burst", type: "Fire", dice: ["Int", "Criar"], base: 7 },
    { name: "High Horsepower", type: "Ground", dice: ["Atk", "Lutar"], base: 9 },
    { name: "Horn Attack", type: "Normal", dice: ["Atk", "Lutar"], base: 6 },
    { name: "Hydro Pump", type: "Water", dice: ["Int", "Atirar"], base: 11 },
    { name: "Hyper Voice", type: "Normal", dice: ["Int", "Estrelar"], base: 9, notes: ["sound"] },
    { name: "Land's Wrath", type: "Ground", dice: ["Atk", "Focar"], base: 9, notes: ["environment"] },
    { name: "Leafage", type: "Grass", dice: ["Atk", "Lutar"], base: 4 },
    { name: "Mega Kick", type: "Normal", dice: ["Atk", "Lutar"], base: 12 },
    { name: "Mega Punch", type: "Normal", dice: ["Atk", "Lutar"], base: 8 },
    { name: "Megahorn", type: "Bug", dice: ["Atk", "Lutar"], base: 12 },
    { name: "Origin Pulse", type: "Water", dice: ["Int", "Atirar"], base: 11 },
    { name: "Overdrive", type: "Electric", dice: ["Int", "Estrelar"], base: 8, notes: ["sound"] },
    { name: "Peck", type: "Flying", dice: ["Atk", "Lutar"], base: 4 },
    { name: "Petal Blizzard", type: "Grass", dice: ["Int", "Criar"], base: 9, notes: ["environment"] },
    { name: "Pound", type: "Normal", dice: ["Atk", "Lutar"], base: 4 },
    { name: "Power Gem", type: "Rock", dice: ["Int", "Atirar"], base: 8 },
    { name: "Power Whip", type: "Grass", dice: ["Dex", "Atirar"], base: 12 },
    { name: "Precipice Blades", type: "Ground", dice: ["Atk", "Focar"], base: 12 },
    { name: "Rock Throw", type: "Rock", dice: ["Dex", "Atirar"], base: 5 },
    { name: "Scratch", type: "Normal", dice: ["Atk", "Lutar"], base: 4 },
    { name: "Seed Bomb", type: "Grass", dice: ["Dex", "Atirar"], base: 8 },
    { name: "Slam", type: "Normal", dice: ["Atk", "Forçar"], base: 8 },
    { name: "Strength", type: "Normal", dice: ["Atk", "Forçar"], base: 8 },
    { name: "Tackle", type: "Normal", dice: ["Atk", "Forçar"], base: 5 },
    { name: "Vine Whip", type: "Grass", dice: ["Dex", "Atirar"], base: 4 },
    { name: "Vise Grip", type: "Normal", dice: ["Atk", "Forçar"], base: 5 },
    { name: "Water Gun", type: "Water", dice: ["Int", "Atirar"], base: 4 },
    { name: "Wing Attack", type: "Flying", dice: ["Atk", "Lutar"], base: 6 },
    { name: "X-Scissor", type: "Bug", dice: ["Atk", "Lutar"], base: 8 },
    {
        name: "Dynamic Punch", type: "Fighting", dice: ["Atk", "Lutar"], base: 10,
        effect: "Caso acerte, o defensor faz um teste de Sabedoria." +
            "Se o defensor passar ele toma metade do dano, caso contrário," +
            " ele toma o dano inteiro e ganha Confusão (dado de efeito)."
    },
    {
        name: "Sonic Boom", type: "Normal", dice: ["Int", "Estrelar"], base: 0, notes: ["sound"],
        effect: "Esse ataque sempre dá 2 de dano, podendo dar mais caso modificadores criem um dado positivo."
    },
    {
        name: "Dragon Rage", type: "Dragon", dice: ["Atk", "Forçar"], base: 0,
        effect: "Esse ataque sempre dá 4 de dano, podendo dar mais caso modificadores criem um dado positivo."
    },
    {
        name: "Sucker Punch", type: "Dark", dice: ["Dex", "Trapacear"], base: 7,
        effect: "O atacante fica esperando até sua próxima ação." +
            "Se o alvo não atacar o atacante ou um aliado até então, o ataque falha." +
            "Se o atacante tomar dano antes do alvo atacar alguém, precisa fazer um teste de Constituição (DC 9) para continuar com o ataque."
    },
    { name: "Frost Breath", type: "Ice", dice: ["Int", "Criar"], base: 6, notes: ["sure-crit"] },
    { name: "Storm Throw", type: "Fighting", dice: ["Atk", "Forçar"], base: 6, notes: ["sure-crit"] },
    { name: "Wicked Blow", type: "Dark", dice: ["Atk", "Trapacear"], base: 8, notes: ["sure-crit"] },
    { name: "Vital Throw", type: "Fighting", dice: ["Atk", "Forçar"], base: 7, notes: ["sure-hit", "low-priority"] },
    { name: "Breaking Swipe", type: "Dragon", dice: ["Atk", "Lutar"], base: 6, notes: ["low-atk"] },
    {
        name: "Focus Punch", type: "Fighting", dice: ["Atk", "Focar"], base: 15,
        effect: "O atacante fica esperando até sua próxima ação." +
            "Se não tiver tomado dano, ou tiver tomado dano e passado em um teste de Sabedoria (DC 9), ele dá dano " +
            "sem que o alvo role pra defender."
    },
    {
        name: "Echoed Voice", type: "Normal", dice: ["Int", "Estrelar"], base: 4, notes: ["sound"],
        effect: "Cada vez que o usuário ou um de seus aliados usa o ataque consecutivamente, o dado de base sobe em 2 lados."
    },

    { name: "Sky Drop", type: "Flying", dice: ["Atk", "Forçar"], base: 6, notes: ['airborne', 'airborne-enemy'] },
    { name: "Feint", type: "Normal", dice: ["Dex", "Trapacear"], base: 3, notes: ['break-protect'] },
    {
        name: "Burning Jealousy", type: "Fire", dice: ["Int", "Focar"], base: 7,
        effect: "Caso o alvo tenha ganhado uma condição positiva naquele turno, " +
            "ele faz um teste de Constituição (DC 9) e em falha, ganha a condição Queimadura (dado de efeito)"
    },
    {
        name: "Sky Uppercut", type: "Fighting", dice: ["Atk", "Lutar"], base: 8, notes: ['hit-fly'],
        effect: "Ao rolar esse ataque, aumente o dado de brinde se o alvo estiver aéreo."
    },
    {
        name: "Last Resort", type: "Normal", dice: ["Atk", "Forçar"], base: 14,
        effect: "Esse ataque só pode ser usado se o usuário tiver menos de 20% de vida."
    },
    { name: "Judgment", type: "Normal", dice: ["Int", "Influenciar"], base: 10, notes: ['always-stab'] },
    { name: "Revelation Dance", type: "Normal", dice: ["Dex", "Estrelar"], base: 9, notes: ['always-stab'] },
    {
        name: "Solar Beam", type: "Grass", dice: ["Int", "Criar"], base: 12, notes: ['charge'],
        effect: "Se a condição de terreno Sol Forte estiver em efeito, o ataque funciona imediatamente."
    },
    { name: "Razor Wind", type: "Normal", dice: ["Int", "Criar"], base: 8, notes: ['charge'] },
    {
        name: "Pay Day", type: "Normal", dice: ["Int", "Criar"], base: 4,
        effect: "Aumenta o loot encontrado depois da batalha."
    },
    { name: "Psyshock", type: "Psychic", dice: ["Int", "Focar"], base: 8, notes: ['psyshock'] },
    { name: "Psystrike", type: "Psychic", dice: ["Int", "Focar"], base: 10, notes: ['psyshock'] },
    { name: "Secret Sword", type: "Fighting", dice: ["Int", "Focar"], base: 8, notes: ['psyshock'] },
    { name: "Crush Grip", type: "Normal", dice: ["Atk", "Forçar"], base: 12, notes: ['target-eruption'] },
    { name: "Wring Out", type: "Normal", dice: ["Int", "Forçar"], base: 12, notes: ['target-eruption'] },
    {
        name: "Frustration", type: "Normal", dice: ["Atk", "Forçar"], base: NaN,
        effect: "O dano base do ataque é 10 - Pontos de Potencial do usuário, com valor mínimo de 1"
    },
    {
        name: "Return", type: "Normal", dice: ["Atk", "Forçar"], base: NaN,
        effect: "O dano base do ataque é a quantidade de Pontos de Potencial do usuário, com valor máximo de 10"
    },
    { name: "Eruption", type: "Fire", dice: ["Int", "Criar"], base: 15, notes: ['eruption'] },
    { name: "Water Spout", type: "Water", dice: ["Int", "Criar"], base: 15, notes: ['eruption'] },
    { name: "Flail", type: "Normal", dice: ["Atk", "Forçar"], base: 2, notes: ['flail'] },
    { name: "Reversal", type: "Fighting", dice: ["Atk", "Lutar"], base: 2, notes: ["flail"] },
    {
        name: "Foul Play", type: "Dark", dice: ["Atk", "Trapacear"], base: 9,
        effect: "Invés de usar o Ataque do atacante para rolar se o ataque funciona e qual é o dano, use o Ataque do alvo."
    },
    { name: "Light of Ruin", type: "Fairy", dice: ["Int", "Criar"], base: 14, notes: ['recoil2', 'light'] },
    { name: "Submission", type: "Fighting", dice: ["Atk", "Forçar"], base: 8, notes: ['recoil4'] },
    { name: "Take Down", type: "Normal", dice: ["Atk", "Forçar"], base: 9, notes: ['recoil4'] },
    { name: "Struggle", type: "Normal", dice: ["Atk", "Forçar"], base: 5, notes: ['recoil4'] },
    {
        name: "Counter", type: "Fighting", dice: [], base: NaN,
        effect: "O usuário espera até sua próxima ação, onde retorna o dobro de todo dano causado por ataques físicos."
    },
    {
        name: "Mirror Coat", type: "Psychic", dice: [], base: NaN,
        effect: "O usuário espera até sua próxima ação, onde retorna o dobro de todo dano causado por ataques especiais."
    },
    {
        name: "Metal Burst", type: "Steel", dice: [], base: NaN,
        effect: "O usuário espera até sua próxima ação, onde retorna 150% de todo dano que recebeu."
    },
    { name: "High Jump Kick", type: "Fighting", dice: ["Atk", "Lutar"], base: 13, notes: ["crash"] },
    { name: "Jump Kick", type: "Fighting", dice: ["Atk", "Lutar"], base: 10, notes: ["crash"] },
    {
        name: "Spit Up", type: "Normal", dice: ["Dex", "Atirar"], base: NaN, notes: ["crash"],
        effect: "O dado de base é duas vezes o dado da condição Stockpile"
    },
    { name: "Grass Knot", type: "Grass", dice: ["Int", "Trapacear"], base: NaN, notes: ["weight"] },
    { name: "Low Kick", type: "Fighting", dice: ["Atk", "Trapacear"], base: NaN, notes: ["weight"] },
    {
        name: "Gyro Ball", type: "Steel", dice: ["Dex", "Mover"], base: NaN,
        effect: "Quando rolar esse ataque, inverta os dados (ou seja, valor 1 vira o máximo, valor 2 vira o máximo menos um," +
            " um d4 vira um d12, um d6 vira um d10, etc.). " +
            "O dado de base é a diferença de iniciativa entre o alvo e o atacante, com um valor máximo de 15."
    },
    {
        name: "Bide", type: "Normal", dice: [], base: NaN,
        effect: "O usuário espera por duas ações, onde retorna o dobro de todo dano causado."
    },
    { name: "Nature's Madness", type: "Fairy", dice: ["Int", "Focar"], base: NaN, notes: ['half-dmg'] },
    { name: "Night Shade", type: "Ghost", dice: ["Cha", "Trapacear"], base: NaN, notes: ['night-shade'] },
    { name: "Seismic Toss", type: "Fighting", dice: ["Atk", "Lutar"], base: NaN, notes: ['night-shade'] },
    {
        name: "Dragon Darts", type: "Dragon", dice: ["Dex", "Atirar"], base: 5,
        effect: "O usuário usa esse ataque duas vezes no mesmo turno, podendo mudar de alvo, caso queira."
    },
    { name: "Doom Desire", type: "Steel", dice: ["Wis", "Notar"], base: 14, notes: ['future'] },
    { name: "Future Sight", type: "Psychic", dice: ["Wis", "Notar"], base: 12, notes: ['future'] },
    {
        name: "Endeavor", type: "Normal", dice: ["Atk", "Sobreviver"], base: NaN,
        effect: "O dado base de dano é a diferença entre a vida do alvo e do atacante, menos um. "
    },
    { name: "Earthquake", type: "Ground", dice: ["Atk", "Forçar"], base: 10, notes: ['hit-dig'] },
    { name: "Gust", type: "Flying", dice: ["Int", "Forçar"], base: 4, notes: ['hit-fly'] },
    {
        name: "Venoshock", type: "Poison", dice: ["Int", "Criar"], base: 6,
        effect: "O dado base de dano vira 13 se o alvo tiver a condição Veneno"
    },
    { name: "Grass Pledge", type: "Grass", dice: ["Int", "Criar"], base: 8, notes: ['pledge'] },
    { name: "Fire Pledge", type: "Fire", dice: ["Int", "Criar"], base: 8, notes: ['pledge'] },
    { name: "Water Pledge", type: "Water", dice: ["Int", "Criar"], base: 8, notes: ['pledge'] },
    {
        name: "Photon Geyser", type: "Psychic", dice: ["Int", "Criar"], base: 10, notes: ['light', 'ignore-ability'],
        effect: "O alvo usa o menor atributo entre Constituição e Sabedoria para se defender."
    },
    { name: 'Magnitude', type: "Ground", dice: ['Atk', 'Forçar'], base: NaN, notes: ['hit-dig', 'psybeam'] },
    { name: 'Mind Blown', type: 'Fire', dice: ['Int', 'Focar'], base: 15, notes: ['recoil2'] },
    { name: "Behemoth Bash", type: "Steel", dice: ['Atk', 'Lutar'], base: 10, note: ['dynamax'] },
    { name: "Behemoth Blade", type: "Steel", dice: ['Atk', 'Lutar'], base: 10, note: ['dynamax'] },
    { name: "Dynamax Cannon", type: "Dragon", dice: ['Int', 'Atirar'], base: 10, note: ['dynamax'] },
    { name: "Psychic Fangs", type: "Psychic", dice: ['Atk', "Lutar"], base: 8, note: ['brick-break'] },
    { name: "Phantom Force", type: "Ghost", dice: ['Atk', "Lutar"], base: 9, note: ['break-protect', 'charge-inv'] },
    { name: "Shadow Force", type: "Ghost", dice: ['Atk', "Lutar"], base: 12, note: ['break-protect', 'charge-inv'] },
    {
        name: "Flying Press", type: "Fighting", dice: ['Dex', "Lutar"], base: 4,
        effect: "O ataque rola dano Lutador, e caso o alvo não seja imune, em seguida rola dano Lutador. " +
            "O atacante escolhe qual dado tem os modificadores."
    },
    { name: "Surf", type: "Water", dice: ["Dex", "Criar"], base: 9, notes: ['hit-dive'] },
    { name: "Fury Cutter", type: "Bug", dice: ["Atk", "Forçar"], base: 4, notes: ['rollout'] },
    {
        name: "Beat Up", type: "Dark", dice: ["Atk", "Forçar"], base: 3,
        effect: "Adicione os modificadores de ataque de todos os seus aliados ao dado base também."
    },
    { name: "Bug Bite", type: "Bug", dice: ["Atk", "Lutar"], base: 6, notes: ['bug-bite'] },
    { name: "Pluck", type: "Flying", dice: ["Atk", "Lutar"], base: 6, notes: ['bug-bite'] },
    {
        name: "Poltergeist", type: "Ghost", dice: ["Int", "Forçar"], base: 6,
        effect: "Dá o dobro de dano se o alvo tiver um item."
    },
    {
        name: "Plasma Fists", type: "Electric", dice: ["Atk", "Lutar"], base: 10,
        effect: "Até o começo do próximo turno, ataques Normais dão dano Elétrico."
    },
    { name: "Circle Throw", type: "Fighting", dice: ["Atk", "Lutar"], base: 6, notes: ['force-switch'] },
    { name: "Dragon Tail", type: "Dragon", dice: ["Atk", "Forçar"], base: 6, notes: ['force-switch'] },
    {
        name: "Tri-Attack", type: "Normal", dice: ["Dex", "Atirar"], base: 3,
        effect: "O ataque rola dano de Fogo, dano de Gelo e dano Elétrico. " +
            "O atacante escolhe qual dado tem os modificadores."
    },
    { name: "Fire Fang", type: "Fire", dice: ["Atk", "Lutar"], base: 6, notes: ['burn10', 'flinch10'] },
    { name: "Pyro Ball", type: "Fire", dice: ["Dex", "Atirar"], base: 12, notes: ['burn10'] },
    { name: "Flame Wheel", type: "Fire", dice: ["Atk", "Lutar"], base: 6, notes: ['burn10'] },
    { name: "Flare Blitz", type: "Fire", dice: ["Atk", "Lutar"], base: 12, notes: ['burn10', 'recoil3'] },
    { name: "Blaze Kick", type: "Fire", dice: ["Atk", "Lutar"], base: 8, notes: ['burn10'] },
    { name: "Ember", type: "Fire", dice: ["Int", "Criar"], base: 4, notes: ['burn10'] },
    { name: "Fire Blast", type: "Fire", dice: ["Int", "Criar"], base: 11, notes: ['burn10'] },
    { name: "Fire Punch", type: "Fire", dice: ["Atk", "Lutar"], base: 7, notes: ['burn10'] },
    { name: "Flamethrower", type: "Fire", dice: ["Int", "Criar"], base: 9, notes: ['burn10'] },
    { name: "Heat Wave", type: "Fire", dice: ["Int", "Criar"], base: 9, notes: ['burn10'] },
    { name: "Bone Club", type: "Ground", dice: ["Atk", "Lutar"], base: 6, notes: ['flinch10'] },
    { name: "Extrasensory", type: "Psychic", dice: ["Int", "Focar"], base: 8, notes: ['flinch10'] },
    { name: "Hyper Fang", type: "Normal", dice: ["Atk", "Lutar"], base: 8, notes: ['flinch10'] },
    { name: "Confusion", type: "Psychic", dice: ["Int", "Focar"], base: 5, notes: ['con10'] },
    { name: "Psybeam", type: "Psychic", dice: ["Int", "Focar"], base: 6, notes: ['con10'] },
    { name: "Signal Beam", type: "Bug", dice: ["Int", "Focar"], base: 7, notes: ['con10'] },
    { name: "Ice Fang", type: "Ice", dice: ["Atk", "Lutar"], base: 6, notes: ['frz10', 'flinch10'] },
    { name: "Freeze-Dry", type: "Ice", dice: ["Int", "Criar"], base: 7, notes: ['frz10'], effect: "Esse ataque é super efetivo em Pokémon do tipo água." },
    { name: "Blizzard", type: "Ice", dice: ["Int", "Criar"], base: 11, notes: ['frz10'] },
    { name: "Ice Beam", type: "Ice", dice: ["Int", "Criar"], base: 9, notes: ['frz10'] },
    { name: "Ice Punch", type: "Ice", dice: ["Atk", "Lutar"], base: 7, notes: ['frz10'] },
    { name: "Powder Snow", type: "Ice", dice: ["Int", "Criar"], base: 4, notes: ['frz10'] },
    { name: "Aurora Beam", type: "Ice", dice: ["Int", "Criar"], base: 6, notes: ['atk10'] },
    { name: "Acid", type: "Poison", dice: ["Int", "Criar"], base: 4, notes: ['def10'] },
    { name: "Bug Buzz", type: "Bug", dice: ["Int", "Estrelar"], base: 9, notes: ['spdef10', 'sound'] },
    { name: "Earth Power", type: "Ground", dice: ["Int", "Focar"], base: 9, notes: ['spdef10'] },
    { name: "Energy Ball", type: "Grass", dice: ["Int", "Criar"], base: 9, notes: ['spdef10'] },
    { name: "Flash Cannon", type: "Steel", dice: ["Int", "Criar"], base: 8, notes: ['spdef10', 'light'] },
    { name: "Focus Blast", type: "Fighting", dice: ["Int", "Criar"], base: 12, notes: ['spdef10'] },
    { name: "Psychic", type: "Psychic", dice: ["Int", "Focar"], base: 9, notes: ['spdef10'] },
    { name: "Bubble", type: "Water", dice: ["Int", "Criar"], base: 4, notes: ['speed10'] },
    { name: "Bubble Beam", type: "Water", dice: ["Int", "Criar"], base: 6, notes: ['speed10'] },
    { name: "Thunder Fang", type: "Electric", dice: ["Atk", "Lutar"], base: 6, notes: ['par10'] },
    { name: "Thunder Punch", type: "Electric", dice: ["Atk", "Lutar"], base: 7, notes: ['par10'] },
    { name: "Thunder Shock", type: "Electric", dice: ["Int", "Criar"], base: 4, notes: ['par10'] },
    { name: "Thunderbolt", type: "Electric", dice: ["Int", "Criar"], base: 9, notes: ['par10'] },
    { name: "Sludge Wave", type: "Poison", dice: ["Int", "Criar"], base: 9, notes: ['psn10'] },
    { name: "Relic Song", type: "Normal", dice: ["Int", "Estrelar"], base: 7, notes: ['slp10', 'sound'] },
    { name: "Ancient Power", type: "Rock", dice: ["Int", "Criar"], base: 6, notes: ['omniboost'] },
    { name: "Ominous Wind", type: "Ghost", dice: ["Int", "Criar"], base: 6, notes: ['omniboost'] },
    { name: "Silver Wind", type: "Bug", dice: ["Int", "Criar"], base: 6, notes: ['omniboost'] },
    { name: "Metal Claw", type: "Steel", dice: ["Atk", "Lutar"], base: 5, notes: ['atkup10'] },
    { name: "Steel Wing", type: "Steel", dice: ["Atk", "Lutar"], base: 7, notes: ['defup10'] },
    { name: "Constrict", type: "Normal", dice: ["Atk", "Forçar"], base: 1, notes: ['speed10'] },
    { name: "Blue Flare", type: "Fire", dice: ["Int", "Criar"], base: 13, notes: ['burn20'] },
    { name: "Dragon Rush", type: "Dragon", dice: ["Atk", "Lutar"], base: 10, notes: ['flinch20'] },
    { name: "Dark Pulse", type: "Dark", dice: ["Int", "Atirar"], base: 8, notes: ['flinch20'] },
    { name: "Twister", type: "Dragon", dice: ["Int", "Criar"], base: 4, notes: ['flinch20'] },
    { name: "Waterfall", type: "Water", dice: ["Atk", "Criar"], base: 8, notes: ['flinch20'] },
    { name: "Zen Headbutt", type: "Psychic", dice: ["Atk", "Lutar"], base: 8, notes: ['flinch20'] },
    { name: "Dizzy Punch", type: "Normal", dice: ["Atk", "Lutar"], base: 7, notes: ['confuse20'] },
    { name: "Rock Climb", type: "Normal", dice: ["Atk", "Mover"], base: 9, notes: ['confuse20'] },
    { name: "Strange Steam", type: "Fairy", dice: ["Int", "Criar"], base: 9, notes: ['confuse20'] },
    { name: "Water Pulse", type: "Water", dice: ["Int", "Atirar"], base: 6, notes: ['confuse20'] },
    { name: "Crunch", type: "Dark", dice: ["Atk", "Lutar"], base: 8, notes: ['def20'] },
    { name: "Liquidation", type: "Water", dice: ["Atk", "Lutar"], base: 8, notes: ['def20'] },
    { name: "Shadow Ball", type: "Ghost", dice: ["Dex", "Atirar"], base: 8, notes: ['spdef20'] },
    { name: "Shell Side Arm", type: "Poison", dice: ["Dex", "Atirar"], base: 9, notes: ['psn20'] },
    { name: "Meteor Mash", type: "Steel", dice: ["Atk", "Lutar"], base: 9, notes: ['atkup20'] },
    { name: "Shadow Bone", type: "Ghost", dice: ["Atk", "Lutar"], base: 8, notes: ['defup20'] },
    { name: "Secret Power", type: "Normal", dice: ["Atk", "Ocultar"], base: 7, notes: ['secret'] },
    { name: "Ice Burn", type: "Ice", dice: ["Int", "Criar"], base: 14, notes: ['burn30', 'charge'] },
    { name: "Scald", type: "Water", dice: ["Int", "Criar"], base: 8, notes: ['burn30'] },
    { name: "Scorching Sands", type: "Ground", dice: ["Int", "Criar"], base: 7, notes: ['burn30'] },
    { name: "Steam Eruption", type: "Water", dice: ["Int", "Criar"], base: 11, notes: ['burn30'] },
    { name: "Lava Plume", type: "Fire", dice: ["Int", "Criar"], base: 8, notes: ['burn30'] },
    { name: "Searing Shot", type: "Fire", dice: ["Int", "Atirar"], base: 10, notes: ['burn30'] },
    { name: "Air Slash", type: "Flying", dice: ["Int", "Criar"], base: 7, notes: ['flinch30'] },
    { name: "Astonish", type: "Ghost", dice: ["Int", "Estrelar"], base: 3, notes: ['flinch30', 'sound'] },
    { name: "Bite", type: "Dark", dice: ["Atk", "Lutar"], base: 6, notes: ['flinch30'] },
    { name: "Headbutt", type: "Normal", dice: ["Atk", "Lutar"], base: 7, notes: ['flinch30'] },
    { name: "Icicle Crash", type: "Ice", dice: ["Atk", "Lutar"], base: 8, notes: ['flinch30'] },
    { name: "Iron Head", type: "Steel", dice: ["Atk", "Lutar"], base: 8, notes: ['flinch30'] },
    { name: "Needle Arm", type: "Grass", dice: ["Atk", "Lutar"], base: 6, notes: ['flinch30'] },
    { name: "Rock Slide", type: "Rock", dice: ["Atk", "Lutar"], base: 7, notes: ['flinch30'] },
    { name: "Rolling Kick", type: "Fighting", dice: ["Atk", "Lutar"], base: 6, notes: ['flinch30'] },
    { name: "Hurricane", type: "Flying", dice: ["Int", "Criar"], base: 11, notes: ['confuse30'] },
    { name: "Mirror Shot", type: "Steel", dice: ["Int", "Criar"], base: 6, notes: ['acc30'] },
    { name: "Mud Bomb", type: "Ground", dice: ["Dex", "Atirar"], base: 6, notes: ['acc30'] },
    { name: "Muddy Water", type: "Water", dice: ["Int", "Criar"], base: 9, notes: ['acc30'] },
    { name: "Leaf Tornado", type: "Grass", dice: ["Int", "Criar"], base: 6, notes: ['acc30'] },
    { name: "Iron Tail", type: "Steel", dice: ["Atk", "Lutar"], base: 10, notes: ['def30'] },
    { name: "Bolt Strike", type: "Electric", dice: ["Atk", "Lutar"], base: 13, notes: ['par30'] },
    { name: "Thunder", type: "Electric", dice: ["Int", "Criar"], base: 11, notes: ['par30'] },
    { name: "Body Slam", type: "Normal", dice: ["Atk", "Forçar"], base: 8, notes: ['par30'] },
    { name: "Bounce", type: "Flying", dice: ["Atk", "Mover"], base: 8, notes: ['par30'] },
    { name: "Discharge", type: "Electric", dice: ["Int", "Criar"], base: 8, notes: ['par30'] },
    { name: "Dragon Breath", type: "Dragon", dice: ["Int", "Criar"], base: 6, notes: ['par30'] },
    { name: "Force Palm", type: "Fighting", dice: ["Atk", "Lutar"], base: 6, notes: ['par30'] },
    { name: "Lick", type: "Ghost", dice: ["Atk", "Trapacear"], base: 3, notes: ['par30'] },
    { name: "Spark", type: "Electric", dice: ["Atk", "Lutar"], base: 6, notes: ['par30'] },
    { name: "Gunk Shot", type: "Poison", dice: ["Atk", "Lutar"], base: 12, notes: ['psn30'] },
    { name: "Poison Jab", type: "Poison", dice: ["Atk", "Lutar"], base: 8, notes: ['psn30'] },
    { name: "Poison Sting", type: "Poison", dice: ["Atk", "Lutar"], base: 1, notes: ['psn30'] },
    { name: "Sludge", type: "Poison", dice: ["Int", "Criar"], base: 6, notes: ['psn30'] },
    { name: "Sludge Bomb", type: "Poison", dice: ["Int", "Atirar"], base: 9, notes: ['psn30'] },
    { name: "Heart Stamp", type: "Psychic", dice: ["Int", "Criar"], base: 6, notes: ['flinch30'] },
    { name: "Night Daze", type: "Dark", dice: ["Int", "Criar"], base: 8, notes: ['acc40'] },
    { name: "Seed Flare", type: "Grass", dice: ["Int", "Criar"], base: 12, notes: ['spdef40'] },
    { name: "Smog", type: "Poison", dice: ["Int", "Criar"], base: 3, notes: ['psn40'] },
    { name: "Poison Fang", type: "Poison", dice: ["Atk", "Lutar"], base: 5, notes: ['tox50'] },
    { name: "Sacred Fire", type: "Fire", dice: ["Atk", "Criar"], base: 5, notes: ['burn50'] },
    { name: "Octazooka", type: "Water", dice: ["Int", "Atirar"], base: 6, notes: ['acc50'] },
    { name: "Crush Claw", type: "Normal", dice: ["Atk", "Lutar"], base: 7, notes: ['def50'] },
    { name: "Rock Smash", type: "Fighting", dice: ["Atk", "Lutar"], base: 4, notes: ['def50'] },
    { name: "Razor Shell", type: "Water", dice: ["Atk", "Lutar"], base: 7, notes: ['def50'] },
    { name: "Mist Ball", type: "Psychic", dice: ["Int", "Atirar"], base: 7, notes: ['spa50'] },
    { name: "Luster Purge", type: "Psychic", dice: ["Int", "Atirar"], base: 7, notes: ['spdef50', 'light'] },
    { name: "Diamond Storm", type: "Rock", dice: ["Atk", "Lutar"], base: 10, notes: ['defup50'] },
    { name: "Fiery Dance", type: "Fire", dice: ["Dex", "Mover"], base: 8, notes: ['spaup50'] },
    { name: "Charge Beam", type: "Electric", dice: ["Int", "Focar"], base: 5, notes: ['spaup70'] },
    { name: "Chatter", type: "Electric", dice: ["Int", "Estrelar"], base: 6, notes: ['confuse100'] },
    { name: "Cross Poison", type: "Poison", dice: ["Atk", "Lutar"], base: 7, notes: ['high-crit', 'psn10'] },
    { name: "Poison Tail", type: "Poison", dice: ["Atk", "Lutar"], base: 5, notes: ['high-crit', 'psn10'] },
    { name: "Aeroblast", type: "Flying", dice: ["Int", "Criar"], base: 10, notes: ['high-crit'] },
    { name: "Air Cutter", type: "Flying", dice: ["Int", "Lutar"], base: 6, notes: ['high-crit'] },
    { name: "Attack Order", type: "Bug", dice: ["Cha", "Influenciar"], base: 9, notes: ['high-crit'] },
    { name: "Crabhammer", type: "Water", dice: ["Atk", "Lutar"], base: 10, notes: ['high-crit'] },
    { name: "Cross Chop", type: "Fighting", dice: ["Atk", "Lutar"], base: 10, notes: ['high-crit'] },
    { name: "Drill Run", type: "Ground", dice: ["Atk", "Lutar"], base: 8, notes: ['high-crit'] },
    { name: "Karate Chop", type: "Fighting", dice: ["Atk", "Lutar"], base: 5, notes: ['high-crit'] },
    { name: "Leaf Blade", type: "Grass", dice: ["Atk", "Lutar"], base: 9, notes: ['high-crit'] },
    { name: "Night Slash", type: "Dark", dice: ["Atk", "Lutar"], base: 7, notes: ['high-crit'] },
    { name: "Psycho Cut", type: "Psychic", dice: ["Atk", "Lutar"], base: 7, notes: ['high-crit'] },
    { name: "Razor Leaf", type: "Grass", dice: ["Atk", "Lutar"], base: 5, notes: ['high-crit'] },
    { name: "Shadow Claw", type: "Ghost", dice: ["Atk", "Lutar"], base: 7, notes: ['high-crit'] },
    { name: "Slash 	Normal", dice: ["Atk", "Lutar"], base: 7, notes: ['high-crit'] },
    { name: "Spacial Rend", type: "Dragon", dice: ["Int", "Lutar"], base: 10, notes: ['high-crit'] },
    { name: "Stone Edge", type: "Rock", dice: ["Atk", "Lutar"], base: 10, notes: ['high-crit'] },
    { name: "Water Shuriken", type: "Water", dice: ["Dex", "Mover"], base: NaN, notes: ['prio1', 'multihit5'] },
    { name: "Accelerock", type: "Rock", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Aqua Jet", type: "Water", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Bullet Punch", type: "Steel", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Ice Shard", type: "Ice", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Mach Punch", type: "Fighting", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Quick Attack", type: "Normal", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Shadow Sneak", type: "Ghost", dice: ["Atk", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Vacuum Wave", type: "Fighting", dice: ["Int", "Mover"], base: 4, notes: ['prio1'] },
    { name: "Extreme Speed", type: "Normal", dice: ["Atk", "Mover"], base: 8, notes: ['prio2'] },
];
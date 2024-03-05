const dex = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 3,
        "name": "Venusaur",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": "3-m",
        "name": "Mega Venusaur",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 4,
        "name": "Charmander",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 6,
        "name": "Charizard",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": "6-mx",
        "name": "Mega Charizard X",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "dragon"
        ]
    },
    {
        "id": "6-my",
        "name": "Mega Charizard Y",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": 7,
        "name": "Squirtle",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 8,
        "name": "Wartortle",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": "9-m",
        "name": "Mega Blastoise",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 10,
        "name": "Caterpie",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 11,
        "name": "Metapod",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 13,
        "name": "Weedle",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 14,
        "name": "Kakuna",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 15,
        "name": "Beedrill",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": "15-m",
        "name": "Mega Beedrill",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d4",
        "dex": "d12",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "con": "d10",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "18-m",
        "name": "Mega Pidgeot",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 19,
        "name": "Rattata",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": "19-a",
        "name": "Alolan Rattata",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "id": 20,
        "name": "Raticate",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": "20-a",
        "name": "Alolan Raticate",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "id": 21,
        "name": "Spearow",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 22,
        "name": "Fearow",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 23,
        "name": "Ekans",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": 24,
        "name": "Arbok",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison"
        ]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 26,
        "name": "Raichu",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": "26-a",
        "name": "Alolan Raichu",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric",
            "psychic"
        ]
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": "27-a",
        "name": "Alolan Sandshrew",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice",
            "steel"
        ]
    },
    {
        "id": 28,
        "name": "Sandslash",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ground"
        ]
    },
    {
        "id": "28-a",
        "name": "Alolan Sandslash",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "ice",
            "steel"
        ]
    },
    {
        "id": 29,
        "name": "Nidoran ♀",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison"
        ]
    },
    {
        "id": 30,
        "name": "Nidorina",
        "con": "d8",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "id": 32,
        "name": "Nidoran ♂",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": 33,
        "name": "Nidorino",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "poison"
        ]
    },
    {
        "id": 34,
        "name": "Nidoking",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "id": 35,
        "name": "Clefairy",
        "con": "d8",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 36,
        "name": "Clefable",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": "37-a",
        "name": "Alolan Vulpix",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ice"
        ]
    },
    {
        "id": 38,
        "name": "Ninetales",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": "38-a",
        "name": "Alolan Ninetales",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "ice",
            "fairy"
        ]
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "con": "d12",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "con": "d12",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": 41,
        "name": "Zubat",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "id": 42,
        "name": "Golbat",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "id": 43,
        "name": "Oddish",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 44,
        "name": "Gloom",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 45,
        "name": "Vileplume",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 46,
        "name": "Paras",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": 47,
        "name": "Parasect",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": 48,
        "name": "Venonat",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 49,
        "name": "Venomoth",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 50,
        "name": "Diglett",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "ground"
        ]
    },
    {
        "id": "50-a",
        "name": "Alolan Diglett",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "con": "d4",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "ground"
        ]
    },
    {
        "id": "51-a",
        "name": "Alolan Dugtrio",
        "con": "d4",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "id": 52,
        "name": "Meowth",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": "52-a",
        "name": "Alolan Meowth",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "dark"
        ]
    },
    {
        "id": "52-g",
        "name": "Galarian Meowth",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 53,
        "name": "Persian",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": "53-a",
        "name": "Alolan Persian",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dark"
        ]
    },
    {
        "id": 54,
        "name": "Psyduck",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 55,
        "name": "Golduck",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 56,
        "name": "Mankey",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 57,
        "name": "Primeape",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 58,
        "name": "Growlithe",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire"
        ]
    },
    {
        "id": "58-h",
        "name": "Hisuian Growlithe",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire",
            "rock"
        ]
    },
    {
        "id": 59,
        "name": "Arcanine",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": "59-h",
        "name": "Hisuian Arcanine",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire",
            "rock"
        ]
    },
    {
        "id": 60,
        "name": "Poliwag",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "fighting"
        ]
    },
    {
        "id": 63,
        "name": "Abra",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 64,
        "name": "Kadabra",
        "con": "d4",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 65,
        "name": "Alakazam",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "65-m",
        "name": "Mega Alakazam",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 66,
        "name": "Machop",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 67,
        "name": "Machoke",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 68,
        "name": "Machamp",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 71,
        "name": "Victreebel",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "con": "d4",
        "pow": "d4",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "id": 74,
        "name": "Geodude",
        "con": "d4",
        "pow": "d8",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": "74-a",
        "name": "Alolan Geodude",
        "con": "d4",
        "pow": "d8",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "electric"
        ]
    },
    {
        "id": 75,
        "name": "Graveler",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": "75-a",
        "name": "Alolan Graveler",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "electric"
        ]
    },
    {
        "id": 76,
        "name": "Golem",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": "76-a",
        "name": "Alolan Golem",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "rock",
            "electric"
        ]
    },
    {
        "id": 77,
        "name": "Ponyta",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": "77-g",
        "name": "Galarian Ponyta",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 78,
        "name": "Rapidash",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": "78-g",
        "name": "Galarian Rapidash",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "con": "d10",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": "79-g",
        "name": "Galarian Slowpoke",
        "con": "d10",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 80,
        "name": "Slowbro",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": "80-m",
        "name": "Mega Slowbro",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": "80-g",
        "name": "Galarian Slowbro",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "poison",
            "psychic"
        ]
    },
    {
        "id": 81,
        "name": "Magnemite",
        "con": "d4",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "id": 82,
        "name": "Magneton",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "83-g",
        "name": "Galarian Farfetch'd",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 84,
        "name": "Doduo",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 85,
        "name": "Dodrio",
        "con": "d6",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 86,
        "name": "Seel",
        "con": "d8",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "con": "d10",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "id": 88,
        "name": "Grimer",
        "con": "d10",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison"
        ]
    },
    {
        "id": "88-a",
        "name": "Alolan Grimer",
        "con": "d10",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "id": 89,
        "name": "Muk",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": "89-a",
        "name": "Alolan Muk",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "id": 90,
        "name": "Shellder",
        "con": "d4",
        "pow": "d6",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 91,
        "name": "Cloyster",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "id": 92,
        "name": "Gastly",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "id": 93,
        "name": "Haunter",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "id": 94,
        "name": "Gengar",
        "con": "d6",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "id": "94-m",
        "name": "Mega Gengar",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ghost",
            "poison"
        ]
    },
    {
        "id": 95,
        "name": "Onix",
        "con": "d4",
        "pow": "d4",
        "pro": "d12",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": 96,
        "name": "Drowzee",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 97,
        "name": "Hypno",
        "con": "d10",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 98,
        "name": "Krabby",
        "con": "d4",
        "pow": "d10",
        "pro": "d8",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 99,
        "name": "Kingler",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 100,
        "name": "Voltorb",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": "100-h",
        "name": "Hisuian Voltorb",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "electric",
            "grass"
        ]
    },
    {
        "id": 101,
        "name": "Electrode",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": "101-h",
        "name": "Hisuian Electrode",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric",
            "grass"
        ]
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "psychic"
        ]
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "grass",
            "psychic"
        ]
    },
    {
        "id": "103-a",
        "name": "Alolan Exeggutor",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 104,
        "name": "Cubone",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 105,
        "name": "Marowak",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": "105-a",
        "name": "Alolan Marowak",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 108,
        "name": "Lickitung",
        "con": "d10",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 109,
        "name": "Koffing",
        "con": "d4",
        "pow": "d6",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "poison"
        ]
    },
    {
        "id": 110,
        "name": "Weezing",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": "110-g",
        "name": "Galarian Weezing",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "poison",
            "fairy"
        ]
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "id": 112,
        "name": "Rhydon",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "id": 113,
        "name": "Chansey",
        "con": "d12",
        "pow": "d4",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 114,
        "name": "Tangela",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": "115-m",
        "name": "Mega Kangaskhan",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 116,
        "name": "Horsea",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 117,
        "name": "Seadra",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 118,
        "name": "Goldeen",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 119,
        "name": "Seaking",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 120,
        "name": "Staryu",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 121,
        "name": "Starmie",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "con": "d4",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": "122-g",
        "name": "Galarian Mr. Mime",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "id": 123,
        "name": "Scyther",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 124,
        "name": "Jynx",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 126,
        "name": "Magmar",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 127,
        "name": "Pinsir",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "bug"
        ]
    },
    {
        "id": "127-m",
        "name": "Mega Pinsir",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 128,
        "name": "Tauros",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": "128-p",
        "name": "Paldean Tauros (Combat Breed)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "fighting"
        ]
    },
    {
        "id": "128-pb",
        "name": "Paldean Tauros (Blaze Breed)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "fighting",
            "fire"
        ]
    },
    {
        "id": "128-pa",
        "name": "Paldean Tauros (Aqua Breed)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "fighting",
            "water"
        ]
    },
    {
        "id": 129,
        "name": "Magikarp",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 130,
        "name": "Gyarados",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": "130-m",
        "name": "Mega Gyarados",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 131,
        "name": "Lapras",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "id": 132,
        "name": "Ditto",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 133,
        "name": "Eevee",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 135,
        "name": "Jolteon",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 136,
        "name": "Flareon",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 137,
        "name": "Porygon",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 138,
        "name": "Omanyte",
        "con": "d4",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 139,
        "name": "Omastar",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 140,
        "name": "Kabuto",
        "con": "d4",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 141,
        "name": "Kabutops",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "id": "142-m",
        "name": "Mega Aerodactyl",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "id": 143,
        "name": "Snorlax",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 144,
        "name": "Articuno",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ice",
            "flying"
        ]
    },
    {
        "id": "144-g",
        "name": "Galarian Articuno",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": "145-g",
        "name": "Galarian Zapdos",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fighting",
            "flying"
        ]
    },
    {
        "id": 146,
        "name": "Moltres",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": "146-g",
        "name": "Galarian Moltres",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 147,
        "name": "Dratini",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 149,
        "name": "Dragonite",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "150-mx",
        "name": "Mega Mewtwo X",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "fighting"
        ]
    },
    {
        "id": "150-my",
        "name": "Mega Mewtwo Y",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 151,
        "name": "Mew",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 152,
        "name": "Chikorita",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 153,
        "name": "Bayleef",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 154,
        "name": "Meganium",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 155,
        "name": "Cyndaquil",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 156,
        "name": "Quilava",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 157,
        "name": "Typhlosion",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": "157-h",
        "name": "Hisuian Typhlosion",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "id": 158,
        "name": "Totodile",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 159,
        "name": "Croconaw",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 160,
        "name": "Feraligatr",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 161,
        "name": "Sentret",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 162,
        "name": "Furret",
        "con": "d10",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 163,
        "name": "Hoothoot",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 164,
        "name": "Noctowl",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 165,
        "name": "Ledyba",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 166,
        "name": "Ledian",
        "con": "d6",
        "pow": "d4",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 167,
        "name": "Spinarak",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 168,
        "name": "Ariados",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 169,
        "name": "Crobat",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "id": 170,
        "name": "Chinchou",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water",
            "electric"
        ]
    },
    {
        "id": 171,
        "name": "Lanturn",
        "con": "d12",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "electric"
        ]
    },
    {
        "id": 172,
        "name": "Pichu",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": 173,
        "name": "Cleffa",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 174,
        "name": "Igglybuff",
        "con": "d10",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": 175,
        "name": "Togepi",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 176,
        "name": "Togetic",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "id": 177,
        "name": "Natu",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 178,
        "name": "Xatu",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 179,
        "name": "Mareep",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 180,
        "name": "Flaaffy",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 181,
        "name": "Ampharos",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": "181-m",
        "name": "Mega Ampharos",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "electric",
            "ampharos"
        ]
    },
    {
        "id": 182,
        "name": "Bellossom",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 183,
        "name": "Marill",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "id": 184,
        "name": "Azumarill",
        "con": "d10",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "id": 185,
        "name": "Sudowoodo",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 186,
        "name": "Politoed",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 187,
        "name": "Hoppip",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 188,
        "name": "Skiploom",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 189,
        "name": "Jumpluff",
        "con": "d8",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 190,
        "name": "Aipom",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 191,
        "name": "Sunkern",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 192,
        "name": "Sunflora",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 193,
        "name": "Yanma",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 194,
        "name": "Wooper",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": "194-p",
        "name": "Paldean Wooper",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "id": 195,
        "name": "Quagsire",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 196,
        "name": "Espeon",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 197,
        "name": "Umbreon",
        "con": "d10",
        "pow": "d6",
        "pro": "d12",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "dark"
        ]
    },
    {
        "id": 198,
        "name": "Murkrow",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 199,
        "name": "Slowking",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": "199-g",
        "name": "Galarian Slowking",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "poison",
            "psychic"
        ]
    },
    {
        "id": 200,
        "name": "Misdreavus",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 201,
        "name": "Unown",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 202,
        "name": "Wobbuffet",
        "con": "d12",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 203,
        "name": "Girafarig",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "id": 204,
        "name": "Pineco",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 205,
        "name": "Forretress",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 206,
        "name": "Dunsparce",
        "con": "d10",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 207,
        "name": "Gligar",
        "con": "d8",
        "pow": "d6",
        "pro": "d10",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "id": 208,
        "name": "Steelix",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "steel",
            "ground"
        ]
    },
    {
        "id": "208-m",
        "name": "Mega Steelix",
        "con": "d8",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "steel",
            "ground"
        ]
    },
    {
        "id": 209,
        "name": "Snubbull",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 210,
        "name": "Granbull",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 211,
        "name": "Qwilfish",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "water",
            "poison"
        ]
    },
    {
        "id": "211-h",
        "name": "Hisuian Qwilfish",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "dark",
            "poison"
        ]
    },
    {
        "id": 212,
        "name": "Scizor",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": "212-m",
        "name": "Mega Scizor",
        "con": "d8",
        "pow": "d12",
        "pro": "d12",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 213,
        "name": "Shuckle",
        "con": "d4",
        "pow": "d4",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "id": 214,
        "name": "Heracross",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "id": "214-m",
        "name": "Mega Heracross",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "id": 215,
        "name": "Sneasel",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "dark",
            "ice"
        ]
    },
    {
        "id": "215-h",
        "name": "Hisuian Sneasel",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "fighting",
            "poison"
        ]
    },
    {
        "id": 216,
        "name": "Teddiursa",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 217,
        "name": "Ursaring",
        "con": "d10",
        "pow": "d12",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 218,
        "name": "Slugma",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 219,
        "name": "Magcargo",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "fire",
            "rock"
        ]
    },
    {
        "id": 220,
        "name": "Swinub",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "id": 221,
        "name": "Piloswine",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "id": 222,
        "name": "Corsola",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "id": "222-g",
        "name": "Galarian Corsola",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 223,
        "name": "Remoraid",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 224,
        "name": "Octillery",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 225,
        "name": "Delibird",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ice",
            "flying"
        ]
    },
    {
        "id": 226,
        "name": "Mantine",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 227,
        "name": "Skarmory",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "steel",
            "flying"
        ]
    },
    {
        "id": 228,
        "name": "Houndour",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "id": 229,
        "name": "Houndoom",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "id": "229-m",
        "name": "Mega Houndoom",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "id": 230,
        "name": "Kingdra",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "id": 231,
        "name": "Phanpy",
        "con": "d10",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 232,
        "name": "Donphan",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ground"
        ]
    },
    {
        "id": 233,
        "name": "Porygon2",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 234,
        "name": "Stantler",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 235,
        "name": "Smeargle",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 236,
        "name": "Tyrogue",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 237,
        "name": "Hitmontop",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 238,
        "name": "Smoochum",
        "con": "d4",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "id": 239,
        "name": "Elekid",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 240,
        "name": "Magby",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 241,
        "name": "Miltank",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 242,
        "name": "Blissey",
        "con": "d12",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 243,
        "name": "Raikou",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 244,
        "name": "Entei",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": 245,
        "name": "Suicune",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 246,
        "name": "Larvitar",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": 247,
        "name": "Pupitar",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "rock",
            "ground"
        ]
    },
    {
        "id": 248,
        "name": "Tyranitar",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "rock",
            "dark"
        ]
    },
    {
        "id": "248-m",
        "name": "Mega Tyranitar",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "rock",
            "dark"
        ]
    },
    {
        "id": 249,
        "name": "Lugia",
        "con": "d12",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 250,
        "name": "Ho-Oh",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": 251,
        "name": "Celebi",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "grass"
        ]
    },
    {
        "id": 252,
        "name": "Treecko",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "grass"
        ]
    },
    {
        "id": 253,
        "name": "Grovyle",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 254,
        "name": "Sceptile",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "grass"
        ]
    },
    {
        "id": "254-m",
        "name": "Mega Sceptile",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 255,
        "name": "Torchic",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 256,
        "name": "Combusken",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 257,
        "name": "Blaziken",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": "257-m",
        "name": "Mega Blaziken",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 258,
        "name": "Mudkip",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 259,
        "name": "Marshtomp",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 260,
        "name": "Swampert",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": "260-m",
        "name": "Mega Swampert",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 261,
        "name": "Poochyena",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "dark"
        ]
    },
    {
        "id": 262,
        "name": "Mightyena",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "dark"
        ]
    },
    {
        "id": 263,
        "name": "Zigzagoon",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": "263-g",
        "name": "Galarian Zigzagoon",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "id": 264,
        "name": "Linoone",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": "264-g",
        "name": "Galarian Linoone",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "id": 265,
        "name": "Wurmple",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 266,
        "name": "Silcoon",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 267,
        "name": "Beautifly",
        "con": "d6",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 268,
        "name": "Cascoon",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 269,
        "name": "Dustox",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 270,
        "name": "Lotad",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "id": 271,
        "name": "Lombre",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "id": 272,
        "name": "Ludicolo",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "grass"
        ]
    },
    {
        "id": 273,
        "name": "Seedot",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 274,
        "name": "Nuzleaf",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "id": 275,
        "name": "Shiftry",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "id": 276,
        "name": "Taillow",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 277,
        "name": "Swellow",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 278,
        "name": "Wingull",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 279,
        "name": "Pelipper",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 280,
        "name": "Ralts",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 281,
        "name": "Kirlia",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 282,
        "name": "Gardevoir",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": "282-m",
        "name": "Mega Gardevoir",
        "con": "d8",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 283,
        "name": "Surskit",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "id": 284,
        "name": "Masquerain",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 285,
        "name": "Shroomish",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 286,
        "name": "Breloom",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "id": 287,
        "name": "Slakoth",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 288,
        "name": "Vigoroth",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 289,
        "name": "Slaking",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 290,
        "name": "Nincada",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug",
            "ground"
        ]
    },
    {
        "id": 291,
        "name": "Ninjask",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 292,
        "name": "Shedinja",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug",
            "ghost"
        ]
    },
    {
        "id": 293,
        "name": "Whismur",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 294,
        "name": "Loudred",
        "con": "d10",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 295,
        "name": "Exploud",
        "con": "d10",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 296,
        "name": "Makuhita",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 297,
        "name": "Hariyama",
        "con": "d12",
        "pow": "d10",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 298,
        "name": "Azurill",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": 299,
        "name": "Nosepass",
        "con": "d4",
        "pow": "d4",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 300,
        "name": "Skitty",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 301,
        "name": "Delcatty",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 302,
        "name": "Sableye",
        "con": "d6",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "dark",
            "ghost"
        ]
    },
    {
        "id": "302-m",
        "name": "Mega Sableye",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "dark",
            "ghost"
        ]
    },
    {
        "id": 303,
        "name": "Mawile",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "id": "303-m",
        "name": "Mega Mawile",
        "con": "d6",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "id": 304,
        "name": "Aron",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "id": 305,
        "name": "Lairon",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "id": 306,
        "name": "Aggron",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "steel",
            "rock"
        ]
    },
    {
        "id": "306-m",
        "name": "Mega Aggron",
        "con": "d8",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "rock"
        ]
    },
    {
        "id": 307,
        "name": "Meditite",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "fighting",
            "psychic"
        ]
    },
    {
        "id": 308,
        "name": "Medicham",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fighting",
            "psychic"
        ]
    },
    {
        "id": "308-m",
        "name": "Mega Medicham",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fighting",
            "psychic"
        ]
    },
    {
        "id": 309,
        "name": "Electrike",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "electric"
        ]
    },
    {
        "id": 310,
        "name": "Manectric",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": "310-m",
        "name": "Mega Manectric",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 311,
        "name": "Plusle",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 312,
        "name": "Minun",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 313,
        "name": "Volbeat",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "bug"
        ]
    },
    {
        "id": 314,
        "name": "Illumise",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "bug"
        ]
    },
    {
        "id": 315,
        "name": "Roselia",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 316,
        "name": "Gulpin",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison"
        ]
    },
    {
        "id": 317,
        "name": "Swalot",
        "con": "d10",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "poison"
        ]
    },
    {
        "id": 318,
        "name": "Carvanha",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 319,
        "name": "Sharpedo",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": "319-m",
        "name": "Mega Sharpedo",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 320,
        "name": "Wailmer",
        "con": "d12",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 321,
        "name": "Wailord",
        "con": "d12",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 322,
        "name": "Numel",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fire",
            "ground"
        ]
    },
    {
        "id": 323,
        "name": "Camerupt",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "fire",
            "ground"
        ]
    },
    {
        "id": "323-m",
        "name": "Mega Camerupt",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "fire",
            "ground"
        ]
    },
    {
        "id": 324,
        "name": "Torkoal",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 325,
        "name": "Spoink",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 326,
        "name": "Grumpig",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 327,
        "name": "Spinda",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 328,
        "name": "Trapinch",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 329,
        "name": "Vibrava",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ground",
            "dragon"
        ]
    },
    {
        "id": 330,
        "name": "Flygon",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "ground",
            "dragon"
        ]
    },
    {
        "id": 331,
        "name": "Cacnea",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 332,
        "name": "Cacturne",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "id": 333,
        "name": "Swablu",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 334,
        "name": "Altaria",
        "con": "d8",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": "334-m",
        "name": "Mega Altaria",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "fairy"
        ]
    },
    {
        "id": 335,
        "name": "Zangoose",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 336,
        "name": "Seviper",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "poison"
        ]
    },
    {
        "id": 337,
        "name": "Lunatone",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "rock",
            "psychic"
        ]
    },
    {
        "id": 338,
        "name": "Solrock",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "rock",
            "psychic"
        ]
    },
    {
        "id": 339,
        "name": "Barboach",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 340,
        "name": "Whiscash",
        "con": "d12",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 341,
        "name": "Corphish",
        "con": "d4",
        "pow": "d8",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 342,
        "name": "Crawdaunt",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 343,
        "name": "Baltoy",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ground",
            "psychic"
        ]
    },
    {
        "id": 344,
        "name": "Claydol",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "ground",
            "psychic"
        ]
    },
    {
        "id": 345,
        "name": "Lileep",
        "con": "d8",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "grass"
        ]
    },
    {
        "id": 346,
        "name": "Cradily",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "rock",
            "grass"
        ]
    },
    {
        "id": 347,
        "name": "Anorith",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "rock",
            "bug"
        ]
    },
    {
        "id": 348,
        "name": "Armaldo",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "bug"
        ]
    },
    {
        "id": 349,
        "name": "Feebas",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 350,
        "name": "Milotic",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 351,
        "name": "Castform",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 352,
        "name": "Kecleon",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 353,
        "name": "Shuppet",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 354,
        "name": "Banette",
        "con": "d6",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "ghost"
        ]
    },
    {
        "id": "354-m",
        "name": "Mega Banette",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 355,
        "name": "Duskull",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 356,
        "name": "Dusclops",
        "con": "d4",
        "pow": "d6",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 357,
        "name": "Tropius",
        "con": "d10",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 358,
        "name": "Chimecho",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 359,
        "name": "Absol",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark"
        ]
    },
    {
        "id": "359-m",
        "name": "Mega Absol",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dark"
        ]
    },
    {
        "id": 360,
        "name": "Wynaut",
        "con": "d10",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 361,
        "name": "Snorunt",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 362,
        "name": "Glalie",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ice"
        ]
    },
    {
        "id": "362-m",
        "name": "Mega Glalie",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ice"
        ]
    },
    {
        "id": 363,
        "name": "Spheal",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "id": 364,
        "name": "Sealeo",
        "con": "d10",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "id": 365,
        "name": "Walrein",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "id": 366,
        "name": "Clamperl",
        "con": "d4",
        "pow": "d6",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 367,
        "name": "Huntail",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 368,
        "name": "Gorebyss",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 369,
        "name": "Relicanth",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "id": 370,
        "name": "Luvdisc",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 371,
        "name": "Bagon",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 372,
        "name": "Shelgon",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 373,
        "name": "Salamence",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": "373-m",
        "name": "Mega Salamence",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": 374,
        "name": "Beldum",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 375,
        "name": "Metang",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 376,
        "name": "Metagross",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": "376-m",
        "name": "Mega Metagross",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 377,
        "name": "Regirock",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "rock"
        ]
    },
    {
        "id": 378,
        "name": "Regice",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 379,
        "name": "Registeel",
        "con": "d10",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "steel"
        ]
    },
    {
        "id": 380,
        "name": "Latias",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "id": "380-m",
        "name": "Mega Latias",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "id": 381,
        "name": "Latios",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "id": "381-m",
        "name": "Mega Latios",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "psychic"
        ]
    },
    {
        "id": 382,
        "name": "Kyogre",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": "382-m",
        "name": "Kyogre (Primal)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 383,
        "name": "Groudon",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ground"
        ]
    },
    {
        "id": "383-m",
        "name": "Groudon (Primal)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ground",
            "fire"
        ]
    },
    {
        "id": 384,
        "name": "Rayquaza",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": "384-m",
        "name": "Mega Rayquaza",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dragon",
            "flying"
        ]
    },
    {
        "id": 385,
        "name": "Jirachi",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 386,
        "name": "Deoxys (Normal)",
        "con": "d6",
        "pow": "d12",
        "pro": "d4",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "386-fr",
        "name": "Deoxys (Attack)",
        "con": "d6",
        "pow": "d12",
        "pro": "d4",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "386-lg",
        "name": "Deoxys (Defense)",
        "con": "d6",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "386-em",
        "name": "Deoxys (Speed)",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 387,
        "name": "Turtwig",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 388,
        "name": "Grotle",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 389,
        "name": "Torterra",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "ground"
        ]
    },
    {
        "id": 390,
        "name": "Chimchar",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire"
        ]
    },
    {
        "id": 391,
        "name": "Monferno",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 392,
        "name": "Infernape",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 393,
        "name": "Piplup",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 394,
        "name": "Prinplup",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 395,
        "name": "Empoleon",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "water",
            "steel"
        ]
    },
    {
        "id": 396,
        "name": "Starly",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 397,
        "name": "Staravia",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 398,
        "name": "Staraptor",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 399,
        "name": "Bidoof",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 400,
        "name": "Bibarel",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "normal",
            "water"
        ]
    },
    {
        "id": 401,
        "name": "Kricketot",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 402,
        "name": "Kricketune",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "bug"
        ]
    },
    {
        "id": 403,
        "name": "Shinx",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 404,
        "name": "Luxio",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": 405,
        "name": "Luxray",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "electric"
        ]
    },
    {
        "id": 406,
        "name": "Budew",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 407,
        "name": "Roserade",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 408,
        "name": "Cranidos",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "rock"
        ]
    },
    {
        "id": 409,
        "name": "Rampardos",
        "con": "d10",
        "pow": "d12",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "rock"
        ]
    },
    {
        "id": 410,
        "name": "Shieldon",
        "con": "d4",
        "pow": "d4",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "id": 411,
        "name": "Bastiodon",
        "con": "d6",
        "pow": "d4",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "id": 412,
        "name": "Burmy",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 413,
        "name": "Wormadam (Plant)",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": "413-1",
        "name": "Wormadam (Sandy)",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "ground"
        ]
    },
    {
        "id": "413-2",
        "name": "Wormadam (Trash)",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 414,
        "name": "Mothim",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 415,
        "name": "Combee",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 416,
        "name": "Vespiquen",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 417,
        "name": "Pachirisu",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 418,
        "name": "Buizel",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 419,
        "name": "Floatzel",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 420,
        "name": "Cherubi",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 421,
        "name": "Cherrim",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 422,
        "name": "Shellos",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 423,
        "name": "Gastrodon",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 424,
        "name": "Ambipom",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 425,
        "name": "Drifloon",
        "con": "d10",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ghost",
            "flying"
        ]
    },
    {
        "id": 426,
        "name": "Drifblim",
        "con": "d12",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ghost",
            "flying"
        ]
    },
    {
        "id": 427,
        "name": "Buneary",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 428,
        "name": "Lopunny",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": "428-m",
        "name": "Mega Lopunny",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal",
            "fighting"
        ]
    },
    {
        "id": 429,
        "name": "Mismagius",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 430,
        "name": "Honchkrow",
        "con": "d10",
        "pow": "d12",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 431,
        "name": "Glameow",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 432,
        "name": "Purugly",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 433,
        "name": "Chingling",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 434,
        "name": "Stunky",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "id": 435,
        "name": "Skuntank",
        "con": "d10",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "id": 436,
        "name": "Bronzor",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 437,
        "name": "Bronzong",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 438,
        "name": "Bonsly",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 439,
        "name": "Mime Jr.",
        "con": "d4",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 440,
        "name": "Happiny",
        "con": "d10",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 441,
        "name": "Chatot",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 442,
        "name": "Spiritomb",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "ghost",
            "dark"
        ]
    },
    {
        "id": 443,
        "name": "Gible",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": 444,
        "name": "Gabite",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": 445,
        "name": "Garchomp",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": "445-m",
        "name": "Mega Garchomp",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": 446,
        "name": "Munchlax",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 447,
        "name": "Riolu",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 448,
        "name": "Lucario",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fighting",
            "steel"
        ]
    },
    {
        "id": "448-m",
        "name": "Mega Lucario",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fighting",
            "steel"
        ]
    },
    {
        "id": 449,
        "name": "Hippopotas",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 450,
        "name": "Hippowdon",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 451,
        "name": "Skorupi",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "poison",
            "bug"
        ]
    },
    {
        "id": 452,
        "name": "Drapion",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison",
            "dark"
        ]
    },
    {
        "id": 453,
        "name": "Croagunk",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "poison",
            "fighting"
        ]
    },
    {
        "id": 454,
        "name": "Toxicroak",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison",
            "fighting"
        ]
    },
    {
        "id": 455,
        "name": "Carnivine",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 456,
        "name": "Finneon",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 457,
        "name": "Lumineon",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 458,
        "name": "Mantyke",
        "con": "d4",
        "pow": "d4",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 459,
        "name": "Snover",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "ice"
        ]
    },
    {
        "id": 460,
        "name": "Abomasnow",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "ice"
        ]
    },
    {
        "id": "460-m",
        "name": "Mega Abomasnow",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "grass",
            "ice"
        ]
    },
    {
        "id": 461,
        "name": "Weavile",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dark",
            "ice"
        ]
    },
    {
        "id": 462,
        "name": "Magnezone",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "id": 463,
        "name": "Lickilicky",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 464,
        "name": "Rhyperior",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ground",
            "rock"
        ]
    },
    {
        "id": 465,
        "name": "Tangrowth",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 466,
        "name": "Electivire",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 467,
        "name": "Magmortar",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 468,
        "name": "Togekiss",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "id": 469,
        "name": "Yanmega",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 470,
        "name": "Leafeon",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 471,
        "name": "Glaceon",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "ice"
        ]
    },
    {
        "id": 472,
        "name": "Gliscor",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "id": 473,
        "name": "Mamoswine",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ice",
            "ground"
        ]
    },
    {
        "id": 474,
        "name": "Porygon-Z",
        "con": "d10",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 475,
        "name": "Gallade",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic",
            "fighting"
        ]
    },
    {
        "id": "475-m",
        "name": "Mega Gallade",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic",
            "fighting"
        ]
    },
    {
        "id": 476,
        "name": "Probopass",
        "con": "d6",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "id": 477,
        "name": "Dusknoir",
        "con": "d4",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 478,
        "name": "Froslass",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "ice",
            "ghost"
        ]
    },
    {
        "id": 479,
        "name": "Rotom",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "electric",
            "ghost"
        ]
    },
    {
        "id": "479-h",
        "name": "Rotom (Heat)",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "fire"
        ]
    },
    {
        "id": "479-w",
        "name": "Rotom (Wash)",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "water"
        ]
    },
    {
        "id": "479-f",
        "name": "Rotom (Frost)",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "ice"
        ]
    },
    {
        "id": "479-s",
        "name": "Rotom (Fan)",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": "479-c",
        "name": "Rotom (Mow)",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "grass"
        ]
    },
    {
        "id": 480,
        "name": "Uxie",
        "con": "d8",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 481,
        "name": "Mesprit",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 482,
        "name": "Azelf",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 483,
        "name": "Dialga",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": "483-o",
        "name": "Dialga (Origin)",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": 484,
        "name": "Palkia",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "id": "484-o",
        "name": "Palkia (Origin)",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "id": 485,
        "name": "Heatran",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "fire",
            "steel"
        ]
    },
    {
        "id": 486,
        "name": "Regigigas",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 487,
        "name": "Giratina",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ghost",
            "dragon"
        ]
    },
    {
        "id": "487-o",
        "name": "Giratina (Origin)",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ghost",
            "dragon"
        ]
    },
    {
        "id": 488,
        "name": "Cresselia",
        "con": "d12",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 489,
        "name": "Phione",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 490,
        "name": "Manaphy",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 491,
        "name": "Darkrai",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dark"
        ]
    },
    {
        "id": 492,
        "name": "Shaymin",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "grass"
        ]
    },
    {
        "id": "492-pl",
        "name": "Shaymin (Sky)",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 493,
        "name": "Arceus",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 494,
        "name": "Victini",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "fire"
        ]
    },
    {
        "id": 495,
        "name": "Snivy",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 496,
        "name": "Servine",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 497,
        "name": "Serperior",
        "con": "d8",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "grass"
        ]
    },
    {
        "id": 498,
        "name": "Tepig",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 499,
        "name": "Pignite",
        "con": "d10",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 500,
        "name": "Emboar",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fire",
            "fighting"
        ]
    },
    {
        "id": 501,
        "name": "Oshawott",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 502,
        "name": "Dewott",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 503,
        "name": "Samurott",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": "503-h",
        "name": "Hisuian Samurott",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 504,
        "name": "Patrat",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 505,
        "name": "Watchog",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 506,
        "name": "Lillipup",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 507,
        "name": "Herdier",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 508,
        "name": "Stoutland",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 509,
        "name": "Purrloin",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "dark"
        ]
    },
    {
        "id": 510,
        "name": "Liepard",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dark"
        ]
    },
    {
        "id": 511,
        "name": "Pansage",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 512,
        "name": "Simisage",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "grass"
        ]
    },
    {
        "id": 513,
        "name": "Pansear",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire"
        ]
    },
    {
        "id": 514,
        "name": "Simisear",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": 515,
        "name": "Panpour",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 516,
        "name": "Simipour",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 517,
        "name": "Munna",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 518,
        "name": "Musharna",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 519,
        "name": "Pidove",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 520,
        "name": "Tranquill",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 521,
        "name": "Unfezant",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 522,
        "name": "Blitzle",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "electric"
        ]
    },
    {
        "id": 523,
        "name": "Zebstrika",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 524,
        "name": "Roggenrola",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 525,
        "name": "Boldore",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 526,
        "name": "Gigalith",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 527,
        "name": "Woobat",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 528,
        "name": "Swoobat",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 529,
        "name": "Drilbur",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "ground"
        ]
    },
    {
        "id": 530,
        "name": "Excadrill",
        "con": "d12",
        "pow": "d12",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "id": 531,
        "name": "Audino",
        "con": "d10",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": "531-m",
        "name": "Mega Audino",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "id": 532,
        "name": "Timburr",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 533,
        "name": "Gurdurr",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 534,
        "name": "Conkeldurr",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 535,
        "name": "Tympole",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 536,
        "name": "Palpitoad",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 537,
        "name": "Seismitoad",
        "con": "d12",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "ground"
        ]
    },
    {
        "id": 538,
        "name": "Throh",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 539,
        "name": "Sawk",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 540,
        "name": "Sewaddle",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": 541,
        "name": "Swadloon",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": 542,
        "name": "Leavanny",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "id": 543,
        "name": "Venipede",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 544,
        "name": "Whirlipede",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 545,
        "name": "Scolipede",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "id": 546,
        "name": "Cottonee",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "id": 547,
        "name": "Whimsicott",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "id": 548,
        "name": "Petilil",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 549,
        "name": "Lilligant",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": "549-h",
        "name": "Hisuian Lilligant",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "id": 550,
        "name": "Basculin",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 551,
        "name": "Sandile",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "id": 552,
        "name": "Krokorok",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "id": 553,
        "name": "Krookodile",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ground",
            "dark"
        ]
    },
    {
        "id": 554,
        "name": "Darumaka",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "fire"
        ]
    },
    {
        "id": "554-g",
        "name": "Galarian Darumaka",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 555,
        "name": "Darmanitan",
        "con": "d12",
        "pow": "d12",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": "555-g",
        "name": "Galarian Darmanitan",
        "con": "d12",
        "pow": "d12",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "ice"
        ]
    },
    {
        "id": 556,
        "name": "Maractus",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 557,
        "name": "Dwebble",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "id": 558,
        "name": "Crustle",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "id": 559,
        "name": "Scraggy",
        "con": "d6",
        "pow": "d6",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "dark",
            "fighting"
        ]
    },
    {
        "id": 560,
        "name": "Scrafty",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "dark",
            "fighting"
        ]
    },
    {
        "id": 561,
        "name": "Sigilyph",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 562,
        "name": "Yamask",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": "562-g",
        "name": "Galarian Yamask",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "id": 563,
        "name": "Cofagrigus",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 564,
        "name": "Tirtouga",
        "con": "d6",
        "pow": "d6",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "id": 565,
        "name": "Carracosta",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "id": 566,
        "name": "Archen",
        "con": "d6",
        "pow": "d10",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "id": 567,
        "name": "Archeops",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "id": 568,
        "name": "Trubbish",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "poison"
        ]
    },
    {
        "id": 569,
        "name": "Garbodor",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "poison"
        ]
    },
    {
        "id": 570,
        "name": "Zorua",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "dark"
        ]
    },
    {
        "id": "570-h",
        "name": "Hisuian Zorua",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "normal",
            "ghost"
        ]
    },
    {
        "id": 571,
        "name": "Zoroark",
        "con": "d6",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dark"
        ]
    },
    {
        "id": "571-h",
        "name": "Hisuian Zoroark",
        "con": "d6",
        "pow": "d12",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "normal",
            "ghost"
        ]
    },
    {
        "id": 572,
        "name": "Minccino",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 573,
        "name": "Cinccino",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 574,
        "name": "Gothita",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 575,
        "name": "Gothorita",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 576,
        "name": "Gothitelle",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 577,
        "name": "Solosis",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 578,
        "name": "Duosion",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 579,
        "name": "Reuniclus",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 580,
        "name": "Ducklett",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 581,
        "name": "Swanna",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water",
            "flying"
        ]
    },
    {
        "id": 582,
        "name": "Vanillite",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": 583,
        "name": "Vanillish",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 584,
        "name": "Vanilluxe",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "ice"
        ]
    },
    {
        "id": 585,
        "name": "Deerling",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "grass"
        ]
    },
    {
        "id": 586,
        "name": "Sawsbuck",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal",
            "grass"
        ]
    },
    {
        "id": 587,
        "name": "Emolga",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": 588,
        "name": "Karrablast",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "bug"
        ]
    },
    {
        "id": 589,
        "name": "Escavalier",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 590,
        "name": "Foongus",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 591,
        "name": "Amoonguss",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "id": 592,
        "name": "Frillish",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "id": 593,
        "name": "Jellicent",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "id": 594,
        "name": "Alomomola",
        "con": "d12",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 595,
        "name": "Joltik",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "id": 596,
        "name": "Galvantula",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "id": 597,
        "name": "Ferroseed",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "id": 598,
        "name": "Ferrothorn",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "id": 599,
        "name": "Klink",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 600,
        "name": "Klang",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "steel"
        ]
    },
    {
        "id": 601,
        "name": "Klinklang",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "steel"
        ]
    },
    {
        "id": 602,
        "name": "Tynamo",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": 603,
        "name": "Eelektrik",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 604,
        "name": "Eelektross",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": 605,
        "name": "Elgyem",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 606,
        "name": "Beheeyem",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 607,
        "name": "Litwick",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "id": 608,
        "name": "Lampent",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "id": 609,
        "name": "Chandelure",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "ghost",
            "fire"
        ]
    },
    {
        "id": 610,
        "name": "Axew",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 611,
        "name": "Fraxure",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 612,
        "name": "Haxorus",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 613,
        "name": "Cubchoo",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": 614,
        "name": "Beartic",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 615,
        "name": "Cryogonal",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ice"
        ]
    },
    {
        "id": 616,
        "name": "Shelmet",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 617,
        "name": "Accelgor",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "bug"
        ]
    },
    {
        "id": 618,
        "name": "Stunfisk",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ground",
            "electric"
        ]
    },
    {
        "id": "618-g",
        "name": "Galarian Stunfisk",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "id": 619,
        "name": "Mienfoo",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 620,
        "name": "Mienshao",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 621,
        "name": "Druddigon",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 622,
        "name": "Golett",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "id": 623,
        "name": "Golurk",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "id": 624,
        "name": "Pawniard",
        "con": "d4",
        "pow": "d8",
        "pro": "d6",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dark",
            "steel"
        ]
    },
    {
        "id": 625,
        "name": "Bisharp",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark",
            "steel"
        ]
    },
    {
        "id": 626,
        "name": "Bouffalant",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 627,
        "name": "Rufflet",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 628,
        "name": "Braviary",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": "628-h",
        "name": "Hisuian Braviary",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": 629,
        "name": "Vullaby",
        "con": "d8",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 630,
        "name": "Mandibuzz",
        "con": "d12",
        "pow": "d6",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 631,
        "name": "Heatmor",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 632,
        "name": "Durant",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d4",
        "dex": "d12",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 633,
        "name": "Deino",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "id": 634,
        "name": "Zweilous",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "id": 635,
        "name": "Hydreigon",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "id": 636,
        "name": "Larvesta",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "bug",
            "fire"
        ]
    },
    {
        "id": 637,
        "name": "Volcarona",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "bug",
            "fire"
        ]
    },
    {
        "id": 638,
        "name": "Cobalion",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "steel",
            "fighting"
        ]
    },
    {
        "id": 639,
        "name": "Terrakion",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "rock",
            "fighting"
        ]
    },
    {
        "id": 640,
        "name": "Virizion",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "id": 641,
        "name": "Tornadus (Incarnate)",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "flying"
        ]
    },
    {
        "id": "641-s",
        "name": "Tornadus (Therian)",
        "con": "d12",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "flying"
        ]
    },
    {
        "id": 642,
        "name": "Thundurus (Incarnate)",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": "642-s",
        "name": "Thundurus (Therian)",
        "con": "d12",
        "pow": "d6",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": 643,
        "name": "Reshiram",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "fire"
        ]
    },
    {
        "id": 644,
        "name": "Zekrom",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "electric"
        ]
    },
    {
        "id": 645,
        "name": "Landorus (Incarnate)",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "id": "645-s",
        "name": "Landorus (Therian)",
        "con": "d12",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ground",
            "flying"
        ]
    },
    {
        "id": 646,
        "name": "Kyurem",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": "646-w2",
        "name": "Kyurem (Black)",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": "646-b2",
        "name": "Kyurem (White)",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": 647,
        "name": "Keldeo",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "fighting"
        ]
    },
    {
        "id": 648,
        "name": "Meloetta",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "id": 649,
        "name": "Genesect",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "bug",
            "steel"
        ]
    },
    {
        "id": 650,
        "name": "Chespin",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 651,
        "name": "Quilladin",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 652,
        "name": "Chesnaught",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "id": 653,
        "name": "Fennekin",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fire"
        ]
    },
    {
        "id": 654,
        "name": "Braixen",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 655,
        "name": "Delphox",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "psychic"
        ]
    },
    {
        "id": 656,
        "name": "Froakie",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 657,
        "name": "Frogadier",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 658,
        "name": "Greninja",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": "658-a",
        "name": "Greninja (Ash)",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "dark"
        ]
    },
    {
        "id": 659,
        "name": "Bunnelby",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 660,
        "name": "Diggersby",
        "con": "d10",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "normal",
            "ground"
        ]
    },
    {
        "id": 661,
        "name": "Fletchling",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 662,
        "name": "Fletchinder",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": 663,
        "name": "Talonflame",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": 664,
        "name": "Scatterbug",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 665,
        "name": "Spewpa",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d12",
        "types": [
            "bug"
        ]
    },
    {
        "id": 666,
        "name": "Vivillon",
        "con": "d10",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "id": 667,
        "name": "Litleo",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fire",
            "normal"
        ]
    },
    {
        "id": 668,
        "name": "Pyroar",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fire",
            "normal"
        ]
    },
    {
        "id": 669,
        "name": "Flabébé",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 670,
        "name": "Floette",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 671,
        "name": "Florges",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 672,
        "name": "Skiddo",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 673,
        "name": "Gogoat",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "grass"
        ]
    },
    {
        "id": 674,
        "name": "Pancham",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 675,
        "name": "Pangoro",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "fighting",
            "dark"
        ]
    },
    {
        "id": 676,
        "name": "Furfrou",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 677,
        "name": "Espurr",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 678,
        "name": "Meowstic",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 679,
        "name": "Honedge",
        "con": "d4",
        "pow": "d8",
        "pro": "d10",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "id": 680,
        "name": "Doublade",
        "con": "d6",
        "pow": "d10",
        "pro": "d12",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "id": 681,
        "name": "Aegislash",
        "con": "d6",
        "pow": "d4",
        "pro": "d12",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "id": 682,
        "name": "Spritzee",
        "con": "d8",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 683,
        "name": "Aromatisse",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 684,
        "name": "Swirlix",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 685,
        "name": "Slurpuff",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 686,
        "name": "Inkay",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "dark",
            "psychic"
        ]
    },
    {
        "id": 687,
        "name": "Malamar",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark",
            "psychic"
        ]
    },
    {
        "id": 688,
        "name": "Binacle",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 689,
        "name": "Barbaracle",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "rock",
            "water"
        ]
    },
    {
        "id": 690,
        "name": "Skrelp",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "id": 691,
        "name": "Dragalge",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "id": 692,
        "name": "Clauncher",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 693,
        "name": "Clawitzer",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 694,
        "name": "Helioptile",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "electric",
            "normal"
        ]
    },
    {
        "id": 695,
        "name": "Heliolisk",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric",
            "normal"
        ]
    },
    {
        "id": 696,
        "name": "Tyrunt",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock",
            "dragon"
        ]
    },
    {
        "id": 697,
        "name": "Tyrantrum",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "rock",
            "dragon"
        ]
    },
    {
        "id": 698,
        "name": "Amaura",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "ice"
        ]
    },
    {
        "id": 699,
        "name": "Aurorus",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "rock",
            "ice"
        ]
    },
    {
        "id": 700,
        "name": "Sylveon",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 701,
        "name": "Hawlucha",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "fighting",
            "flying"
        ]
    },
    {
        "id": 702,
        "name": "Dedenne",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric",
            "fairy"
        ]
    },
    {
        "id": 703,
        "name": "Carbink",
        "con": "d6",
        "pow": "d4",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "rock",
            "fairy"
        ]
    },
    {
        "id": 704,
        "name": "Goomy",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 705,
        "name": "Sliggoo",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "dragon"
        ]
    },
    {
        "id": "705-h",
        "name": "Hisuian Sliggoo",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": 706,
        "name": "Goodra",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon"
        ]
    },
    {
        "id": "706-h",
        "name": "Hisuian Goodra",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": 707,
        "name": "Klefki",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "id": 708,
        "name": "Phantump",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "id": 709,
        "name": "Trevenant",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "id": 710,
        "name": "Pumpkaboo",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "id": 711,
        "name": "Gourgeist",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "id": 712,
        "name": "Bergmite",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": 713,
        "name": "Avalugg",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": "713-h",
        "name": "Hisuian Avalugg",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice",
            "rock"
        ]
    },
    {
        "id": 714,
        "name": "Noibat",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "flying",
            "dragon"
        ]
    },
    {
        "id": 715,
        "name": "Noivern",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "flying",
            "dragon"
        ]
    },
    {
        "id": 716,
        "name": "Xerneas",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 717,
        "name": "Yveltal",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 718,
        "name": "Zygarde (50%)",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": "718-10",
        "name": "Zygarde (10%)",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": "718-p",
        "name": "Zygarde (Complete)",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dragon",
            "ground"
        ]
    },
    {
        "id": 719,
        "name": "Diancie",
        "con": "d6",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "rock",
            "fairy"
        ]
    },
    {
        "id": "719-m",
        "name": "Mega Diancie",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "rock",
            "fairy"
        ]
    },
    {
        "id": 720,
        "name": "Hoopa (Confined)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "id": "720-u",
        "name": "Hoopa (Unbound)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "dark"
        ]
    },
    {
        "id": 721,
        "name": "Volcanion",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "fire",
            "water"
        ]
    },
    {
        "id": 722,
        "name": "Rowlet",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 723,
        "name": "Dartrix",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "grass",
            "flying"
        ]
    },
    {
        "id": 724,
        "name": "Decidueye",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "id": "724-h",
        "name": "Hisuian Decidueye",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "fighting"
        ]
    },
    {
        "id": 725,
        "name": "Litten",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 726,
        "name": "Torracat",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 727,
        "name": "Incineroar",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "fire",
            "dark"
        ]
    },
    {
        "id": 728,
        "name": "Popplio",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 729,
        "name": "Brionne",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 730,
        "name": "Primarina",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "id": 731,
        "name": "Pikipek",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 732,
        "name": "Trumbeak",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 733,
        "name": "Toucannon",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 734,
        "name": "Yungoos",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 735,
        "name": "Gumshoos",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 736,
        "name": "Grubbin",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 737,
        "name": "Charjabug",
        "con": "d6",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "id": 738,
        "name": "Vikavolt",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "bug",
            "electric"
        ]
    },
    {
        "id": 739,
        "name": "Crabrawler",
        "con": "d4",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 740,
        "name": "Crabominable",
        "con": "d10",
        "pow": "d12",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fighting",
            "ice"
        ]
    },
    {
        "id": 741,
        "name": "Oricorio (Baile)",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "id": "741-pp",
        "name": "Oricorio (Pom Pom)",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": "741-pu",
        "name": "Oricorio (Pa'u)",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic",
            "flying"
        ]
    },
    {
        "id": "741-s",
        "name": "Oricorio (Sensu)",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "ghost",
            "flying"
        ]
    },
    {
        "id": 742,
        "name": "Cutiefly",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "bug",
            "fairy"
        ]
    },
    {
        "id": 743,
        "name": "Ribombee",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "bug",
            "fairy"
        ]
    },
    {
        "id": 744,
        "name": "Rockruff",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "rock"
        ]
    },
    {
        "id": 745,
        "name": "Lycanroc (Midday)",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "rock"
        ]
    },
    {
        "id": "745-m",
        "name": "Lycanroc (Midnight)",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "rock"
        ]
    },
    {
        "id": "745-d",
        "name": "Lycanroc (Dusk)",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "rock"
        ]
    },
    {
        "id": 746,
        "name": "Wishiwashi",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 747,
        "name": "Mareanie",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "id": 748,
        "name": "Toxapex",
        "con": "d6",
        "pow": "d4",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "poison",
            "water"
        ]
    },
    {
        "id": 749,
        "name": "Mudbray",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 750,
        "name": "Mudsdale",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 751,
        "name": "Dewpider",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "water",
            "bug"
        ]
    },
    {
        "id": 752,
        "name": "Araquanid",
        "con": "d8",
        "pow": "d6",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water",
            "bug"
        ]
    },
    {
        "id": 753,
        "name": "Fomantis",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 754,
        "name": "Lurantis",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 755,
        "name": "Morelull",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "id": 756,
        "name": "Shiinotic",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "id": 757,
        "name": "Salandit",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "poison",
            "fire"
        ]
    },
    {
        "id": 758,
        "name": "Salazzle",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "poison",
            "fire"
        ]
    },
    {
        "id": 759,
        "name": "Stufful",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "normal",
            "fighting"
        ]
    },
    {
        "id": 760,
        "name": "Bewear",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "normal",
            "fighting"
        ]
    },
    {
        "id": 761,
        "name": "Bounsweet",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 762,
        "name": "Steenee",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 763,
        "name": "Tsareena",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "grass"
        ]
    },
    {
        "id": 764,
        "name": "Comfey",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 765,
        "name": "Oranguru",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "id": 766,
        "name": "Passimian",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 767,
        "name": "Wimpod",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "id": 768,
        "name": "Golisopod",
        "con": "d8",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "water"
        ]
    },
    {
        "id": 769,
        "name": "Sandygast",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "ghost",
            "ground"
        ]
    },
    {
        "id": 770,
        "name": "Palossand",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ghost",
            "ground"
        ]
    },
    {
        "id": 771,
        "name": "Pyukumuku",
        "con": "d6",
        "pow": "d4",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 772,
        "name": "Type:Null",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 773,
        "name": "Silvally",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 774,
        "name": "Minior",
        "con": "d6",
        "pow": "d4",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "rock",
            "flying"
        ]
    },
    {
        "id": 775,
        "name": "Komala",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 776,
        "name": "Turtonator",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "fire",
            "dragon"
        ]
    },
    {
        "id": 777,
        "name": "Togedemaru",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "electric",
            "steel"
        ]
    },
    {
        "id": 778,
        "name": "Mimikyu",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "ghost",
            "fairy"
        ]
    },
    {
        "id": 779,
        "name": "Bruxish",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": 780,
        "name": "Drampa",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "normal",
            "dragon"
        ]
    },
    {
        "id": 781,
        "name": "Dhelmise",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ghost",
            "grass"
        ]
    },
    {
        "id": 782,
        "name": "Jangmo-o",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 783,
        "name": "Hakamo-o",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dragon",
            "fighting"
        ]
    },
    {
        "id": 784,
        "name": "Kommo-o",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "fighting"
        ]
    },
    {
        "id": 785,
        "name": "TapuKoko",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric",
            "fairy"
        ]
    },
    {
        "id": 786,
        "name": "TapuLele",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 787,
        "name": "TapuBulu",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "grass",
            "fairy"
        ]
    },
    {
        "id": 788,
        "name": "TapuFini",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "water",
            "fairy"
        ]
    },
    {
        "id": 789,
        "name": "Cosmog",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 790,
        "name": "Cosmoem",
        "con": "d4",
        "pow": "d4",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 791,
        "name": "Solgaleo",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "steel"
        ]
    },
    {
        "id": 792,
        "name": "Lunala",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "id": 793,
        "name": "Nihilego",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "rock",
            "poison"
        ]
    },
    {
        "id": 794,
        "name": "Buzzwole",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "id": 795,
        "name": "Pheromosa",
        "con": "d8",
        "pow": "d12",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "id": 796,
        "name": "Xurkitree",
        "con": "d10",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "electric"
        ]
    },
    {
        "id": 797,
        "name": "Celesteela",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "steel",
            "flying"
        ]
    },
    {
        "id": 798,
        "name": "Kartana",
        "con": "d6",
        "pow": "d12",
        "pro": "d12",
        "soc": "d4",
        "dex": "d12",
        "types": [
            "grass",
            "steel"
        ]
    },
    {
        "id": 799,
        "name": "Guzzlord",
        "con": "d12",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "dark",
            "dragon"
        ]
    },
    {
        "id": 800,
        "name": "Necrozma",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": "800-s",
        "name": "Necrozma (Dusk Mane)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "psychic",
            "steel"
        ]
    },
    {
        "id": "800-l",
        "name": "Necrozma (Dawn Wings)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "id": "800-u",
        "name": "Necrozma (Ultra Necrozma)",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 801,
        "name": "Magearna",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "steel",
            "fairy"
        ]
    },
    {
        "id": 802,
        "name": "Marshadow",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fighting",
            "ghost"
        ]
    },
    {
        "id": 803,
        "name": "Poipole",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "poison"
        ]
    },
    {
        "id": 804,
        "name": "Naganadel",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "id": 805,
        "name": "Stakataka",
        "con": "d6",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock",
            "steel"
        ]
    },
    {
        "id": 806,
        "name": "Blacephalon",
        "con": "d6",
        "pow": "d12",
        "pro": "d6",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "id": 807,
        "name": "Zeraora",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 808,
        "name": "Meltan",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 809,
        "name": "Melmetal",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 810,
        "name": "Grookey",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "grass"
        ]
    },
    {
        "id": 811,
        "name": "Thwackey",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 812,
        "name": "Rillaboom",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 813,
        "name": "Scorbunny",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "fire"
        ]
    },
    {
        "id": 814,
        "name": "Raboot",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fire"
        ]
    },
    {
        "id": 815,
        "name": "Cinderace",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "fire"
        ]
    },
    {
        "id": 816,
        "name": "Sobble",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 817,
        "name": "Drizzile",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 818,
        "name": "Inteleon",
        "con": "d8",
        "pow": "d12",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 819,
        "name": "Skwovet",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 820,
        "name": "Greedent",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 821,
        "name": "Rookidee",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "flying"
        ]
    },
    {
        "id": 822,
        "name": "Corvisquire",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "flying"
        ]
    },
    {
        "id": 823,
        "name": "Corviknight",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "flying",
            "steel"
        ]
    },
    {
        "id": 824,
        "name": "Blipbug",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 825,
        "name": "Dottler",
        "con": "d6",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug",
            "psychic"
        ]
    },
    {
        "id": 826,
        "name": "Orbeetle",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "bug",
            "psychic"
        ]
    },
    {
        "id": 827,
        "name": "Nickit",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dark"
        ]
    },
    {
        "id": 828,
        "name": "Thievul",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dark"
        ]
    },
    {
        "id": 829,
        "name": "Gossifleur",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass"
        ]
    },
    {
        "id": 830,
        "name": "Eldegoss",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 831,
        "name": "Wooloo",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 832,
        "name": "Dubwool",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "normal"
        ]
    },
    {
        "id": 833,
        "name": "Chewtle",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 834,
        "name": "Drednaw",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water",
            "rock"
        ]
    },
    {
        "id": 835,
        "name": "Yamper",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 836,
        "name": "Boltund",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 837,
        "name": "Rolycoly",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 838,
        "name": "Carkol",
        "con": "d10",
        "pow": "d4",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "rock",
            "fire"
        ]
    },
    {
        "id": 839,
        "name": "Coalossal",
        "con": "d12",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "rock",
            "fire"
        ]
    },
    {
        "id": 840,
        "name": "Applin",
        "con": "d4",
        "pow": "d4",
        "pro": "d8",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 841,
        "name": "Flapple",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 842,
        "name": "Appletun",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 843,
        "name": "Silicobra",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ground"
        ]
    },
    {
        "id": 844,
        "name": "Sandaconda",
        "con": "d8",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "ground"
        ]
    },
    {
        "id": 845,
        "name": "Cramorant",
        "con": "d8",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "flying",
            "water"
        ]
    },
    {
        "id": 846,
        "name": "Arrokuda",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 847,
        "name": "Barraskewda",
        "con": "d6",
        "pow": "d10",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 848,
        "name": "Toxel",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "electric",
            "poison"
        ]
    },
    {
        "id": 849,
        "name": "Toxtricity (Amped)",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "electric",
            "poison"
        ]
    },
    {
        "id": "849-lk",
        "name": "Toxtricity (Low Key)",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "electric",
            "poison"
        ]
    },
    {
        "id": 850,
        "name": "Sizzlipede",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fire",
            "bug"
        ]
    },
    {
        "id": 851,
        "name": "Centiskorch",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fire",
            "bug"
        ]
    },
    {
        "id": 852,
        "name": "Clobbopus",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 853,
        "name": "Grapploct",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 854,
        "name": "Sinistea",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 855,
        "name": "Polteageist",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 856,
        "name": "Hatenna",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 857,
        "name": "Hattrem",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 858,
        "name": "Hatterene",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "psychic",
            "fairy"
        ]
    },
    {
        "id": 859,
        "name": "Impidimp",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "id": 860,
        "name": "Morgrem",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "id": 861,
        "name": "Grimmsnarl",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "dark",
            "fairy"
        ]
    },
    {
        "id": 862,
        "name": "Obstagoon",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dark",
            "normal"
        ]
    },
    {
        "id": 863,
        "name": "Perrserker",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "steel"
        ]
    },
    {
        "id": 864,
        "name": "Cursola",
        "con": "d6",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 865,
        "name": "Sirfetch'd",
        "con": "d6",
        "pow": "d12",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 866,
        "name": "Mr. Rime",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "ice",
            "psychic"
        ]
    },
    {
        "id": 867,
        "name": "Runerigus",
        "con": "d6",
        "pow": "d8",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ground",
            "ghost"
        ]
    },
    {
        "id": 868,
        "name": "Milcery",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 869,
        "name": "Alcremie",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 870,
        "name": "Falinks",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 871,
        "name": "Pincurchin",
        "con": "d4",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 872,
        "name": "Snom",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice",
            "bug"
        ]
    },
    {
        "id": 873,
        "name": "Frosmoth",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "ice",
            "bug"
        ]
    },
    {
        "id": 874,
        "name": "Stonjourner",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "rock"
        ]
    },
    {
        "id": 875,
        "name": "Eiscue",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "ice"
        ]
    },
    {
        "id": 876,
        "name": "Indeedee (Male)",
        "con": "d6",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "normal"
        ]
    },
    {
        "id": "876-f",
        "name": "Indeedee (Female)",
        "con": "d8",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "psychic",
            "normal"
        ]
    },
    {
        "id": 877,
        "name": "Morpeko",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "electric",
            "dark"
        ]
    },
    {
        "id": 878,
        "name": "Cufant",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 879,
        "name": "Copperajah",
        "con": "d12",
        "pow": "d12",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "steel"
        ]
    },
    {
        "id": 880,
        "name": "Dracozolt",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "electric",
            "dragon"
        ]
    },
    {
        "id": 881,
        "name": "Arctozolt",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "electric",
            "ice"
        ]
    },
    {
        "id": 882,
        "name": "Dracovish",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "id": 883,
        "name": "Arctovish",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "water",
            "ice"
        ]
    },
    {
        "id": 884,
        "name": "Duraludon",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": 885,
        "name": "Dreepy",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "id": 886,
        "name": "Drakloak",
        "con": "d8",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "id": 887,
        "name": "Dragapult",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dragon",
            "ghost"
        ]
    },
    {
        "id": 888,
        "name": "Zacian",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 889,
        "name": "Zamazenta",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 890,
        "name": "Eternatus",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "poison",
            "dragon"
        ]
    },
    {
        "id": 891,
        "name": "Kubfu",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fighting"
        ]
    },
    {
        "id": 892,
        "name": "Urshifu (Single Strike)",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fighting",
            "dark"
        ]
    },
    {
        "id": "892-r",
        "name": "Urshifu (Rapid Strike)",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "fighting",
            "water"
        ]
    },
    {
        "id": 893,
        "name": "Zarude",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "dark",
            "grass"
        ]
    },
    {
        "id": 894,
        "name": "Regieleki",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric"
        ]
    },
    {
        "id": 895,
        "name": "Regidrago",
        "con": "d12",
        "pow": "d10",
        "pro": "d4",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dragon"
        ]
    },
    {
        "id": 896,
        "name": "Glastrier",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": 897,
        "name": "Spectrier",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 898,
        "name": "Calyrex",
        "con": "d10",
        "pow": "d8",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "psychic",
            "grass"
        ]
    },
    {
        "id": "898-i",
        "name": "Calyrex (Ice Rider)",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "psychic",
            "ice"
        ]
    },
    {
        "id": "898-s",
        "name": "Calyrex (Shadow Rider)",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "psychic",
            "ghost"
        ]
    },
    {
        "id": 899,
        "name": "Wyrdeer",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "id": 900,
        "name": "Kleavor",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "bug",
            "rock"
        ]
    },
    {
        "id": 901,
        "name": "Ursaluna",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "ground",
            "normal"
        ]
    },
    {
        "id": "901-b",
        "name": "Ursaluna (Blood Moon)",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d6",
        "types": [
            "ground",
            "normal"
        ]
    },
    {
        "id": 902,
        "name": "Basculegion (Male)",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "id": "902-f",
        "name": "Basculegion (Female)",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "water",
            "ghost"
        ]
    },
    {
        "id": 903,
        "name": "Sneasler",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "fighting",
            "poison"
        ]
    },
    {
        "id": 904,
        "name": "Overqwil",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dark",
            "poison"
        ]
    },
    {
        "id": 905,
        "name": "Enamorus (Incarnate)",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "id": "905-s",
        "name": "Enamorus (Therian)",
        "con": "d12",
        "pow": "d10",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fairy",
            "flying"
        ]
    },
    {
        "id": 906,
        "name": "Sprigatito",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "grass"
        ]
    },
    {
        "id": 907,
        "name": "Floragato",
        "con": "d6",
        "pow": "d8",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "grass"
        ]
    },
    {
        "id": 908,
        "name": "Meowscarada",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "id": 909,
        "name": "Fuecoco",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 910,
        "name": "Crocalor",
        "con": "d10",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 911,
        "name": "Skeledirge",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "id": 912,
        "name": "Quaxly",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "water"
        ]
    },
    {
        "id": 913,
        "name": "Quaxwell",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 914,
        "name": "Quaquaval",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "water",
            "fighting"
        ]
    },
    {
        "id": 915,
        "name": "Lechonk",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "normal"
        ]
    },
    {
        "id": 916,
        "name": "Oinkologne (Male)",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": "916-f",
        "name": "Oinkologne (Female)",
        "con": "d12",
        "pow": "d8",
        "pro": "d8",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 917,
        "name": "Tarountula",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 918,
        "name": "Spidops",
        "con": "d6",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 919,
        "name": "Nymble",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 920,
        "name": "Lokix",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "bug",
            "dark"
        ]
    },
    {
        "id": 921,
        "name": "Pawmi",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "electric"
        ]
    },
    {
        "id": 922,
        "name": "Pawmo",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "electric",
            "fighting"
        ]
    },
    {
        "id": 923,
        "name": "Pawmot",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "electric",
            "fighting"
        ]
    },
    {
        "id": 924,
        "name": "Tandemaus",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "normal"
        ]
    },
    {
        "id": 925,
        "name": "Maushold",
        "con": "d8",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "normal"
        ]
    },
    {
        "id": 926,
        "name": "Fidough",
        "con": "d4",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 927,
        "name": "Dachsbun",
        "con": "d6",
        "pow": "d8",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fairy"
        ]
    },
    {
        "id": 928,
        "name": "Smoliv",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "grass",
            "normal"
        ]
    },
    {
        "id": 929,
        "name": "Dolliv",
        "con": "d6",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "grass",
            "normal"
        ]
    },
    {
        "id": 930,
        "name": "Arboliva",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "grass",
            "normal"
        ]
    },
    {
        "id": 931,
        "name": "Squawkabilly",
        "con": "d10",
        "pow": "d8",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "id": 932,
        "name": "Nacli",
        "con": "d6",
        "pow": "d4",
        "pro": "d6",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 933,
        "name": "Naclstack",
        "con": "d6",
        "pow": "d4",
        "pro": "d10",
        "soc": "d6",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 934,
        "name": "Garganacl",
        "con": "d10",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "rock"
        ]
    },
    {
        "id": 935,
        "name": "Charcadet",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "fire"
        ]
    },
    {
        "id": 936,
        "name": "Armarouge",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "fire",
            "psychic"
        ]
    },
    {
        "id": 937,
        "name": "Ceruledge",
        "con": "d8",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fire",
            "ghost"
        ]
    },
    {
        "id": 938,
        "name": "Tadbulb",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 939,
        "name": "Bellibolt",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "electric"
        ]
    },
    {
        "id": 940,
        "name": "Wattrel",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": 941,
        "name": "Kilowattrel",
        "con": "d8",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "electric",
            "flying"
        ]
    },
    {
        "id": 942,
        "name": "Maschiff",
        "con": "d6",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dark"
        ]
    },
    {
        "id": 943,
        "name": "Mabosstiff",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "dark"
        ]
    },
    {
        "id": 944,
        "name": "Shroodle",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "poison",
            "normal"
        ]
    },
    {
        "id": 945,
        "name": "Grafaiai",
        "con": "d6",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "poison",
            "normal"
        ]
    },
    {
        "id": 946,
        "name": "Bramblin",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "id": 947,
        "name": "Brambleghast",
        "con": "d6",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "id": 948,
        "name": "Toedscool",
        "con": "d4",
        "pow": "d4",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "ground",
            "grass"
        ]
    },
    {
        "id": 949,
        "name": "Toedscruel",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ground",
            "grass"
        ]
    },
    {
        "id": 950,
        "name": "Klawf",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "rock"
        ]
    },
    {
        "id": 951,
        "name": "Capsakid",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass"
        ]
    },
    {
        "id": 952,
        "name": "Scovillain",
        "con": "d8",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d8",
        "types": [
            "grass",
            "fire"
        ]
    },
    {
        "id": 953,
        "name": "Rellor",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "bug"
        ]
    },
    {
        "id": 954,
        "name": "Rabsca",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "bug",
            "psychic"
        ]
    },
    {
        "id": 955,
        "name": "Flittle",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 956,
        "name": "Espathra",
        "con": "d10",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "psychic"
        ]
    },
    {
        "id": 957,
        "name": "Tinkatink",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "fairy",
            "steel"
        ]
    },
    {
        "id": 958,
        "name": "Tinkatuff",
        "con": "d8",
        "pow": "d4",
        "pro": "d8",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "fairy",
            "steel"
        ]
    },
    {
        "id": 959,
        "name": "Tinkaton",
        "con": "d10",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "fairy",
            "steel"
        ]
    },
    {
        "id": 960,
        "name": "Wiglett",
        "con": "d4",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d10",
        "types": [
            "water"
        ]
    },
    {
        "id": 961,
        "name": "Wugtrio",
        "con": "d4",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 962,
        "name": "Bombirdier",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "flying",
            "dark"
        ]
    },
    {
        "id": 963,
        "name": "Finizen",
        "con": "d8",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d8",
        "types": [
            "water"
        ]
    },
    {
        "id": 964,
        "name": "Palafin",
        "con": "d10",
        "pow": "d6",
        "pro": "d6",
        "soc": "d6",
        "dex": "d12",
        "types": [
            "water"
        ]
    },
    {
        "id": 965,
        "name": "Varoom",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "steel",
            "poison"
        ]
    },
    {
        "id": 966,
        "name": "Revavroom",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "steel",
            "poison"
        ]
    },
    {
        "id": 967,
        "name": "Cyclizar",
        "con": "d8",
        "pow": "d8",
        "pro": "d6",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dragon",
            "normal"
        ]
    },
    {
        "id": 968,
        "name": "Orthworm",
        "con": "d8",
        "pow": "d8",
        "pro": "d12",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "steel"
        ]
    },
    {
        "id": 969,
        "name": "Glimmet",
        "con": "d4",
        "pow": "d10",
        "pro": "d4",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "rock",
            "poison"
        ]
    },
    {
        "id": 970,
        "name": "Glimmora",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "rock",
            "poison"
        ]
    },
    {
        "id": 971,
        "name": "Greavard",
        "con": "d6",
        "pow": "d4",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 972,
        "name": "Houndstone",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 973,
        "name": "Flamigo",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "flying",
            "fighting"
        ]
    },
    {
        "id": 974,
        "name": "Cetoddle",
        "con": "d12",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d4",
        "types": [
            "ice"
        ]
    },
    {
        "id": 975,
        "name": "Cetitan",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d6",
        "dex": "d8",
        "types": [
            "ice"
        ]
    },
    {
        "id": 976,
        "name": "Veluza",
        "con": "d10",
        "pow": "d10",
        "pro": "d6",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "water",
            "psychic"
        ]
    },
    {
        "id": 977,
        "name": "Dondozo",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "water"
        ]
    },
    {
        "id": 978,
        "name": "Tatsugiri (Curly)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "water"
        ]
    },
    {
        "id": 978,
        "name": "Tatsugiri (Droopy)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "water"
        ]
    },
    {
        "id": 978,
        "name": "Tatsugiri (Stretchy)",
        "con": "d8",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "dragon",
            "water"
        ]
    },
    {
        "id": 979,
        "name": "Annihilape",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fighting",
            "ghost"
        ]
    },
    {
        "id": 980,
        "name": "Clodsire",
        "con": "d12",
        "pow": "d6",
        "pro": "d10",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "id": 981,
        "name": "Farigiraf",
        "con": "d12",
        "pow": "d10",
        "pro": "d6",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "normal",
            "psychic"
        ]
    },
    {
        "id": 982,
        "name": "Dudunsparce",
        "con": "d12",
        "pow": "d10",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 983,
        "name": "Kingambit",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "dark",
            "steel"
        ]
    },
    {
        "id": 984,
        "name": "Great Tusk",
        "con": "d12",
        "pow": "d12",
        "pro": "d12",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "ground",
            "fighting"
        ]
    },
    {
        "id": 985,
        "name": "Scream Tail",
        "con": "d12",
        "pow": "d6",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fairy",
            "psychic"
        ]
    },
    {
        "id": 986,
        "name": "Brute Bonnet",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d6",
        "types": [
            "grass",
            "dark"
        ]
    },
    {
        "id": 987,
        "name": "Flutter Mane",
        "con": "d6",
        "pow": "d12",
        "pro": "d12",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "ghost",
            "fairy"
        ]
    },
    {
        "id": 988,
        "name": "Slither Wing",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "bug",
            "fighting"
        ]
    },
    {
        "id": 989,
        "name": "Sandy Shocks",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric",
            "ground"
        ]
    },
    {
        "id": 990,
        "name": "Iron Treads",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "ground",
            "steel"
        ]
    },
    {
        "id": 991,
        "name": "Iron Bundle",
        "con": "d6",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "ice",
            "water"
        ]
    },
    {
        "id": 992,
        "name": "Iron Hands",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "fighting",
            "electric"
        ]
    },
    {
        "id": 993,
        "name": "Iron Jugulis",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dark",
            "flying"
        ]
    },
    {
        "id": 994,
        "name": "Iron Moth",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "fire",
            "poison"
        ]
    },
    {
        "id": 995,
        "name": "Iron Thorns",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d8",
        "types": [
            "rock",
            "electric"
        ]
    },
    {
        "id": 996,
        "name": "Frigibax",
        "con": "d8",
        "pow": "d6",
        "pro": "d4",
        "soc": "d4",
        "dex": "d6",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": 997,
        "name": "Arctibax",
        "con": "d10",
        "pow": "d8",
        "pro": "d6",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": 998,
        "name": "Baxcalibur",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "dragon",
            "ice"
        ]
    },
    {
        "id": 999,
        "name": "Gimmighoul (Chest)",
        "con": "d4",
        "pow": "d6",
        "pro": "d6",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "ghost"
        ]
    },
    {
        "id": "999-r",
        "name": "Gimmighoul (Roaming)",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d10",
        "types": [
            "ghost"
        ]
    },
    {
        "id": 1000,
        "name": "Gholdengo",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "steel",
            "ghost"
        ]
    },
    {
        "id": 1001,
        "name": "Wo-Chien",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "dark",
            "grass"
        ]
    },
    {
        "id": 1002,
        "name": "Chien-Pao",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dark",
            "ice"
        ]
    },
    {
        "id": 1003,
        "name": "Ting-Lu",
        "con": "d12",
        "pow": "d10",
        "pro": "d12",
        "soc": "d8",
        "dex": "d4",
        "types": [
            "dark",
            "ground"
        ]
    },
    {
        "id": 1004,
        "name": "Chi-Yu",
        "con": "d6",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "dark",
            "fire"
        ]
    },
    {
        "id": 1005,
        "name": "Roaring Moon",
        "con": "d12",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "dragon",
            "dark"
        ]
    },
    {
        "id": 1006,
        "name": "Iron Valiant",
        "con": "d8",
        "pow": "d12",
        "pro": "d8",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fairy",
            "fighting"
        ]
    },
    {
        "id": 1007,
        "name": "Koraidon",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "fighting",
            "dragon"
        ]
    },
    {
        "id": 1008,
        "name": "Miraidon",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "electric",
            "dragon"
        ]
    },
    {
        "id": 1009,
        "name": "Walking Wake",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "water",
            "dragon"
        ]
    },
    {
        "id": 1010,
        "name": "Iron Leaves",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "grass",
            "psychic"
        ]
    },
    {
        "id": 1011,
        "name": "Dipplin",
        "con": "d10",
        "pow": "d8",
        "pro": "d10",
        "soc": "d10",
        "dex": "d4",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 1012,
        "name": "Poltchageist",
        "con": "d4",
        "pow": "d6",
        "pro": "d4",
        "soc": "d6",
        "dex": "d6",
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "id": 1013,
        "name": "Sinistcha",
        "con": "d8",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "grass",
            "ghost"
        ]
    },
    {
        "id": 1014,
        "name": "Okidogi",
        "con": "d10",
        "pow": "d12",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "poison",
            "fighting"
        ]
    },
    {
        "id": 1015,
        "name": "Munkidori",
        "con": "d10",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d12",
        "types": [
            "poison",
            "psychic"
        ]
    },
    {
        "id": 1016,
        "name": "Fezandipiti",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "poison",
            "fairy"
        ]
    },
    {
        "id": 1017,
        "name": "Ogerpon",
        "con": "d10",
        "pow": "d10",
        "pro": "d8",
        "soc": "d8",
        "dex": "d12",
        "types": [
            "grass"
        ]
    },
    {
        "id": 1018,
        "name": "Archaludon",
        "con": "d10",
        "pow": "d12",
        "pro": "d12",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "steel",
            "dragon"
        ]
    },
    {
        "id": 1019,
        "name": "Hydrapple",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d4",
        "types": [
            "grass",
            "dragon"
        ]
    },
    {
        "id": 1020,
        "name": "Gouging Fire",
        "con": "d12",
        "pow": "d10",
        "pro": "d10",
        "soc": "d8",
        "dex": "d10",
        "types": [
            "fire",
            "dragon"
        ]
    },
    {
        "id": 1021,
        "name": "Raging Bolt",
        "con": "d12",
        "pow": "d12",
        "pro": "d8",
        "soc": "d12",
        "dex": "d8",
        "types": [
            "electric",
            "dragon"
        ]
    },
    {
        "id": 1022,
        "name": "Iron Boulder",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d10",
        "dex": "d12",
        "types": [
            "rock",
            "psychic"
        ]
    },
    {
        "id": 1023,
        "name": "Iron Crown",
        "con": "d10",
        "pow": "d10",
        "pro": "d10",
        "soc": "d12",
        "dex": "d10",
        "types": [
            "steel",
            "psychic"
        ]
    },
    {
        "id": 1024,
        "name": "Terapagos",
        "con": "d10",
        "pow": "d6",
        "pro": "d8",
        "soc": "d8",
        "dex": "d6",
        "types": [
            "normal"
        ]
    },
    {
        "id": 1025,
        "name": "Pecharunt",
        "con": "d10",
        "pow": "d8",
        "pro": "d12",
        "soc": "d10",
        "dex": "d10",
        "types": [
            "poison",
            "ghost"
        ]
    }
];

const speciesSelect = document.getElementById('species');

for (let i = 0; i < dex.length; ++i) {
    const opt = document.createElement('option');
    opt.value = dex[i].name;
    opt.innerHTML = dex[i].name;
    speciesSelect.appendChild(opt);
}

function makeTypeBox(type) {
    const div = document.createElement('div');

    const color = ({
        normal: "#A8A878", fighting: "#C03028", flying: "#A890F0", poison: "#A040A0",
        ground: "#E0C068", rock: "#B8A038", bug: "#A8B820", ghost: "#705898",
        steel: "#B8B8D0", fire: "#F08030", water: "#6890F0", grass: "#78C850",
        electric: "#F8D030", psychic: "#F85888", ice: "#98D8D8", dragon: "#7038F8",
        dark: "#705848", fairy: "#EE99AC"
    })[type];

    const style = "width: 100%; color: #FFF;" +
        'text-align: center; font-family: "Space Mono", monospace;' +
        `background-color: ${color};` +
        "border: 1px solid #222;";

    div.style = style;
    div.innerHTML = type.toUpperCase();

    return div;
}

const speciesInput = document.getElementById("speciesInput");
const speciesImage = document.getElementById("speciesImage");


function changeHandler(elem, name) {
    const id = elem.id;
    const value = elem.name;

    if (name === value) {
        hasSet = true;

        // Serebii doesn't have Paldean forms
        if (name === "Paldean Wooper") {
            speciesImage.src = "https://img.pokemondb.net/artwork/wooper-paldean.jpg";
        }
        else if (name === "Paldean Tauros (Combat Breed)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/tauros-paldean.jpg"
        }
        else if (name === "Paldean Tauros (Blaze Breed)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/tauros-blaze.jpg";
        }
        else if (name === "Paldean Tauros (Aqua Breed)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/tauros-aqua.jpg";
        }
        else if (name === "Ursaluna (Blood Moon)") {
            speciesImage.src = "https://archives.bulbagarden.net/media/upload/thumb/" +
                "8/85/0901Ursaluna-Bloodmoon.png/900px-0901Ursaluna-Bloodmoon.png";
        }
        else if (name === "Urshifu (Rapid Strike)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/urshifu-rapid-strike.jpg";
        }
        else if (name === "Toxtricity (Low Key)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/toxtricity-low-key.jpg";
        }
        else if (name === "Oricorio (Pom Pom)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/oricorio-pom-pom.jpg";
        }
        else if (name === "Oricorio (Pa'u)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/oricorio-pau.jpg";
        }
        else if (name === "Oricorio (Sensu)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/oricorio-sensu.jpg";
        }
        else if (name === "Tatsugiri (Droopy)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/tatsugiri-droopy.jpg";
        }
        else if (name === "Tatsugiri (Stretchy)") {
            speciesImage.src = "https://img.pokemondb.net/artwork/tatsugiri-stretchy.jpg";
        }
        else {
            speciesImage.src = `https://www.serebii.net/art/th/${id}.png`;
        }

        // Clearing type icons
        const span = document.getElementById('monTypes');
        span.innerHTML = "";

        // Adding type icons
        if (elem.types) {
            for (let i = 0; i < elem.types.length; ++i) {
                const type = makeTypeBox(elem.types[i]);
                span.appendChild(type);
            }
        }
    }
}

speciesInput.addEventListener("input", (event) => {
    const name = event.target.value;
    dex.forEach(elem => changeHandler(elem, name));
});

function updateStats() {
    const name = speciesInput.value;

    for (let i = 0; i < dex.length; ++i) {
        const elem = dex[i];
        if (name === elem.name) {
            document.getElementById('con-stat').value = elem.con.slice(1);
            document.getElementById('pow-stat').value = elem.pow.slice(1);
            document.getElementById('pro-stat').value = elem.pro.slice(1);
            document.getElementById('soc-stat').value = elem.soc.slice(1);
            document.getElementById('dex-stat').value = elem.dex.slice(1);
            break;
        }
    }
}
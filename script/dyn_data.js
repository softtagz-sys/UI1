
const merken = {
    Citadel: "Citadel",
    GamesWorskhop: "Games workshop"
}
const soort = {
    boek: "boek",
    mini: "mini",
    tool: "tool",
    verf: "verf"
}
const categorieen = {
    essentials: "Essentials",
    terrein: "Terrein",
    hobby: "Hobby"
}

export const productenData = [
    //Essentials
    {
        categorie: categorieen.essentials,
        id:1,
        naam:{
            nl:"Warhammer 40k recruit editie",
            en:"Warhammer 40k recruit edition"
        },
        img:"../media/WH40KRecruitEditionStock.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 40.00
    },
    {
        categorie: categorieen.essentials,
        id:2,
        naam:{
            nl:"Warhammer 40k elite editie",
            en:"Warhammer 40k elite edition"
        },
        img:"../media/WH40KEliteEditionStock.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 80.00
    },
    {
        categorie: categorieen.essentials,
        id:3,
        naam:{
            nl:"Warhammer 40k command editie",
            en:"Warhammer 40k command edition"
        },
        img:"../media/WH40KCommandEditionStock.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 145.00
    },
    {
        categorie: categorieen.essentials,
        id:4,
        naam:{
            nl:"Warhammer 40K Core regel boek",
            en:"Warhammer 40K Core Rule Book"
        },
        img:"../media/ENGRulebook.webp",
        merk: merken.GamesWorskhop,
        soort: soort.boek,
        prijs: 55.00
    },
    {
        categorie: categorieen.essentials,
        id:5,
        naam:{
            nl:"GW Roll meter",
            en:"GW Tape Measure"
        },
        img:"../media/TapeMeasure.webp",
        merk: merken.GamesWorskhop,
        soort: soort.tool,
        prijs: 7.00
    },
    {
        categorie: categorieen.essentials,
        id:6,
        naam:{
            nl:"Citadel 12mm dobbelsteen set",
            en:"Citadel 12mm Dice Set"
        },
        img:"../media/Dice-Cube.webp",
        merk: merken.Citadel,
        soort: soort.tool,
        prijs: 9.00
    },
    {
        id:7,
        categorie: categorieen.essentials,
        naam:{
            nl:"Warhammer 40K: wonden trackers",
            en:"Warhammer 40K: Wound Trackers"
        },
        img:"../media/40KWoundTrackers.webp",
        merk: merken.GamesWorskhop,
        soort: soort.tool,
        prijs: 12.00
    },
    {
        categorie: categorieen.essentials,
        id:8,
        naam:{
            nl:"Crusade missie pakket: Wars Of Faith",
            en:"Crusade Misson Pack: Wars Of Faith"
        },
        img:"../media/EngCrusadeMissionPackWarsofFaith.webp",
        merk: merken.GamesWorskhop,
        soort: soort.boek,
        prijs: 35.00
    },
    //Terrein
    {
        categorie: categorieen.terrein,
        id:9,
        naam:{
            nl: "Necromunda: Zone Mortalis vloer tegelset",
            en:"Necromunda: Zone Mortalis Floor Tile Set"
        },
        img:"../media/ZoneMortalisFloorTileBox.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 60.00
    },
    {
        categorie: categorieen.terrein,
        id:10,
        naam:{
            nl: "Munitorum bepanserde containers",
            en:"Munitorum Armoured Containers"
        },
        img:"../media/MunitorumContainers.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 45.00
    },
    {
        categorie: categorieen.terrein,
        id:11,
        naam:{
            nl: "Battlezone Manufactorum Sanctum Administratus",
            en:"Battlezone Manufactorum Sanctum Administratus"
        },
        img:"../media/SanctumAdministratus.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 70.00
    },
    {
        categorie: categorieen.terrein,
        id:12,
        naam:{
            nl: "Zone Mortalis: zuilen & muren",
            en:"Zone Mortalis: Columns & Walls"
        },
        img:"../media/ZMCW.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 70.00
    },
    {
        categorie: categorieen.terrein,
        id:13,
        naam:{
            nl: "Zone Mortalis: platformen & trappen",
            en:"Zone Mortalis: Platforms & Stairs"
        },
        img:"../media/NECZMPlatformsStairs.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 40.00
    },
    {
        categorie: categorieen.terrein,
        id:14,
        naam:{
            nl: "Sector Imperialis ruines",
            en:"Sector Imperialis Ruins"
        },
        img:"../media/SectorImperialisRuinsx.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 35.00
    },
    {
        categorie: categorieen.terrein,
        id:15,
        naam:{
            nl: "Battlezone Mechanicus Galvanic Magnavent",
            en:"Battlezone Mechanicus Galvanic Magnavent"
        },
        img:"../media/BattlezoneMechanicusGalvanicMagnavent.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 65.00
    },
    //hobby
    {
        categorie: categorieen.hobby,
        id:16,
        naam:{
            nl: "Basis: Corax wit",
            en:"Base: Corax White"
        },
        img:"../media/Base-Corax-White.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        categorie: categorieen.hobby,
        id:17,
        naam:{
            nl: "Basis: Abaddon zwart",
            en:"Base: Abaddon Black"
        },
        img:"../media/Base-Abaddon-Black.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        categorie: categorieen.hobby,
        id:18,
        naam:{
            nl: "Basis: Averland Sunset",
            en:"Base: Averland Sunset"
        },
        img:"../media/Averland-Sunset.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        categorie: categorieen.hobby,
        id:19,
        naam:{
            nl: "Contrast: Asurmen blauw",
            en:"Contrast: Asurmen Blue"
        },
        img:"../media/Asurmen_Blue_Contrast.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 6.30
    },
    {
        categorie: categorieen.hobby,
        id:20,
        naam:{
            nl: "Laag: Dawnstone",
            en:"Layer: Dawnstone"
        },
        img:"../media/Dawnstone.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        categorie: categorieen.hobby,
        id:21,
        naam:{
            nl: "Technise: Tesseract schijn",
            en:"Technical: Tesseract Glow"
        },
        img:"../media/TesseractGlowTechnical.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 6.30
    }
];

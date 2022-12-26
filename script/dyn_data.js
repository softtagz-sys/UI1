
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

const productenEssentials = [
    //Essentials
    {
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
        naam:{
            nl:"Crusade missie pakket: Wars Of Faith",
            en:"Crusade Misson Pack: Wars Of Faith"
        },
        naam:"Crusade Misson Pack: Wars Of Faith",
        img:"../media/EngCrusadeMissionPackWarsofFaith.webp",
        merk: merken.GamesWorskhop,
        soort: soort.boek,
        prijs: 35.00
    }
    ]
const productenTerrein = [
    {
        naam:{
            nl: "Necromunda: Zone Mortalis vloer tegelset",
            eng:"Necromunda: Zone Mortalis Floor Tile Set"
        },
        img:"../media/ZoneMortalisFloorTileBox.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 60.00
    },
    {
        naam:{
            nl: "Munitorum bepanserde containers",
            eng:"Munitorum Armoured Containers"
        },
        img:"../media/MunitorumContainers.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 45.00
    },
    {
        naam:{
            nl: "Battlezone Manufactorum Sanctum Administratus",
            eng:"Battlezone Manufactorum Sanctum Administratus"
        },
        img:"../media/SanctumAdministratus.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 70.00
    },
    {
        naam:{
            nl: "Zone Mortalis: zuilen & muren",
            eng:"Zone Mortalis: Columns & Walls"
        },
        img:"../media/ZMCW.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 70.00
    },
    {
        naam:{
            nl: "Zone Mortalis: platformen & trappen",
            eng:"Zone Mortalis: Platforms & Stairs"
        },
        img:"../media/NECZMPlatformsStairs.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 40.00
    },
    {
        naam:{
            nl: "Sector Imperialis ruines",
            eng:"Sector Imperialis Ruins"
        },
        img:"../media/SectorImperialisRuinsx.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 35.00
    },
    {
        naam:{
            nl: "Battlezone Mechanicus Galvanic Magnavent",
            eng:"Battlezone Mechanicus Galvanic Magnavent"
        },
        img:"../media/BattlezoneMechanicusGalvanicMagnavent.webp",
        merk: merken.GamesWorskhop,
        soort: soort.mini,
        prijs: 65.00
    }]
const productenHobby = [
    {
        naam:{
            nl: "Basis: Corax wit",
            eng:"Base: Corax White"
        },
        img:"../media/Base-Corax-White.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        naam:{
            nl: "Basis: Abaddon zwart",
            eng:"Base: Abaddon Black"
        },
        img:"../media/Base-Abaddon-Black.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        naam:{
            nl: "Basis: Averland Sunset",
            eng:"Base: Averland Sunset"
        },
        img:"../media/Averland-Sunset.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        naam:{
            nl: "Contrast: Asurmen blauw",
            eng:"Contrast: Asurmen Blue"
        },
        img:"../media/Asurmen_Blue_Contrast.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 6.30
    },
    {
        naam:{
            nl: "Laag: Dawnstone",
            eng:"Layer: Dawnstone"
        },
        img:"../media/Dawnstone.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 3.60
    },
    {
        naam:{
            nl: "Technise: Tesseract schijn",
            eng:"Technical: Tesseract Glow"
        },
        img:"../media/TesseractGlowTechnical.webp",
        merk: merken.Citadel,
        soort: soort.verf,
        prijs: 6.30
    }
    ]
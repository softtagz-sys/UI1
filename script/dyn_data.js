
const merken = {
    brand001: "Citadel",
    brand002: "Games workshop"
}
const soort = {
    type001: "boek",
    type002: "mini",
    type003: "tool",
    type004: "verf"
}
const categorieen = {
    cat001: "Essentials",
    cat002: "Terrein",
    cat003: "Hobby"
}

export const productenData = [
    //Essentials
    {
        categorie: categorieen.cat001,
        id:1,
        naam:{
            nl:"Warhammer 40k recruit editie",
            en:"Warhammer 40k recruit edition"
        },
        beschrijving:{
            nl:"De Warhammer 40,000 Recruit Edition is een instapniveau tafelblad oorlogsspel dat zich afspeelt in een dystopisch sciencefiction-universum. Deze doos is ontworpen voor nieuwkomers in de hobby en bevat vereenvoudigde regels, miniaturen en alles wat nodig is om te beginnen met het spelen van gevechten in de grimmige duisternis van het 41e millennium.",
            en:"The Warhammer 40,000 Recruit Edition is an entry-level tabletop wargame set in a dystopian science fiction universe. This box set is designed for newcomers to the hobby and includes simplified rules, miniatures, and everything needed to start playing battles in the grim darkness of the 41st millennium."
        },
        img:"../media/WH40KRecruitEditionStock.webp",
        link: "Productdetailpagina1.html",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 40.00

    },
    {
        categorie: categorieen.cat001,
        id:2,
        naam:{
            nl:"Warhammer 40k elite editie",
            en:"Warhammer 40k elite edition"
        },
        beschrijving:{
            nl:"De Warhammer 40,000 Elite Edition is een uitgebreide tafelblad oorlogsspelset die een verbeterde spelervaring biedt in een duister, futuristisch universum. Het bevat een breder scala aan miniaturen, geavanceerde regels en verschillende componenten voor spelers die dieper willen ingaan op de complexiteit van gevechten in het 41e millennium.",
            en:"The Warhammer 40,000 Elite Edition is a comprehensive tabletop wargame set that offers an enhanced gaming experience in a dark, futuristic universe. It includes a wider range of miniatures, advanced rules, and various components for players looking to delve deeper into the intricacies of battles in the 41st millennium."
        },
        img:"../media/WH40KEliteEditionStock.webp",
        link: "Productdetailpagina2.html",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 80.00
    },
    {
        categorie: categorieen.cat001,
        id:3,
        naam:{
            nl:"Warhammer 40k command editie",
            en:"Warhammer 40k command edition"
        },
        beschrijving:{
            nl:"De Warhammer 40,000 Command Edition is een complete tafelblad oorlogsspelset die een meeslepende ervaring biedt in het grimmige en ruige universum van het 41e millennium. Deze set bevat een aanzienlijke selectie miniaturen, geavanceerde regels en verschillende accessoires, waardoor het een ideale keuze is voor spelers die op zoek zijn naar een veelzijdige spelervaring.",
            en:"The Warhammer 40,000 Command Edition is a complete tabletop wargame package that provides an immersive experience in the grim and gritty universe of the 41st millennium. This set includes a substantial selection of miniatures, advanced rules, and various accessories, making it an ideal choice for players seeking a well-rounded gaming experience."
        },
        img:"../media/WH40KCommandEditionStock.webp",
        link: "Productdetailpagina3.html",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 145.00
    },
    {
        categorie: categorieen.cat001,
        id:4,
        naam:{
            nl:"Warhammer 40K Core regel boek",
            en:"Warhammer 40K Core Rule Book"
        },
        beschrijving:{
            nl:"Het Warhammer 40,000 Core Rule Book is de essentiële gids die de basis biedt voor het spelen van gevechten in het dystopische universum van het 41e millennium. Het bevat uitgebreide regels, achtergrondverhaal en informatie om spelers te helpen bij het navigeren door de complexiteiten van het spel en zich onder te dompelen in de duistere en uitgestrekte setting.",
            en:"The Warhammer 40,000 Core Rule Book is the essential guide that provides the foundation for playing battles in the dystopian universe of the 41st millennium. It includes comprehensive rules, lore, and information to help players navigate the complexities of the game and immerse themselves in the dark and expansive setting."
        },
        img:"../media/ENGRulebook.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type001,
        prijs: 55.00
    },
    {
        categorie: categorieen.cat001,
        id:5,
        naam:{
            nl:"GW Roll meter",
            en:"GW Tape Measure"
        },
        beschrijving:{
            nl:"De Games Workshop meetlint is een precisiegereedschap dat wordt gebruikt bij tafelblad wargames om afstanden tussen miniaturen te meten en bewegingen en bereiken te bepalen. Het is een essentiële accessoire om nauwkeurig gameplay en strategische positionering op het speelbord te garanderen.",
            en:"The Games Workshop Tape Measure is a precision tool used in tabletop wargaming to measure distances between miniatures and determine movement and ranges. It's an essential accessory for ensuring accurate gameplay and strategic positioning on the gaming table."
        },
        img:"../media/TapeMeasure.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type003,
        prijs: 7.00
    },
    {
        categorie: categorieen.cat001,
        id:6,
        naam:{
            nl:"Citadel 12mm dobbelsteen set",
            en:"Citadel 12mm Dice Set"
        },
        beschrijving:{
            nl:"De Citadel 12mm Dobbelsteen Set is een verzameling kleine dobbelstenen ontworpen door Citadel, een merk dat bekend staat om zijn hoogwaardige gaming accessoires. Deze 12mm dobbelstenen worden veel gebruikt in tafelbladspellen zoals Warhammer 40,000 en andere oorlogsspellen. Ze zijn verkrijgbaar in verschillende kleuren en zijn perfect om te rollen om uitkomsten tijdens het spelen te bepalen.",
            en:"The Citadel 12mm Dice Set is a collection of small dice designed by Citadel, a brand known for its high-quality gaming accessories. These 12mm dice are commonly used in tabletop games like Warhammer 40,000 and other wargames. They come in various colors and are perfect for rolling to determine outcomes during gameplay."
        },
        img:"../media/Dice-Cube.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type003,
        prijs: 9.00
    },
    {
        id:7,
        categorie: categorieen.cat001,
        naam:{
            nl:"Warhammer 40K: wonden trackers",
            en:"Warhammer 40K: Wound Trackers"
        },
        beschrijving:{
            nl:"Warhammer 40,000: Wound Trackers zijn hulpmiddelen die worden gebruikt om de schade bij te houden die individuele miniaturen tijdens gevechten oplopen. Deze trackers helpen spelers eenvoudig de overgebleven wonden van hun eenheden bij te houden terwijl ze schade oplopen, zodat de toestand van het model nauwkeurig wordt weergegeven en de spelervaring wordt verbeterd.",
            en:"Warhammer 40,000: Wound Trackers are tools used to keep track of the damage taken by individual miniatures during battles. These trackers help players easily monitor the remaining wounds of their units as they sustain damage, ensuring accurate representation of the model's condition and enhancing the gameplay experience."
        },
        img:"../media/40KWoundTrackers.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type003,
        prijs: 12.00
    },
    {
        categorie: categorieen.cat001,
        id:8,
        naam:{
            nl:"Crusade missie pakket: Wars Of Faith",
            en:"Crusade Misson Pack: Wars Of Faith"
        },
        beschrijving:{
            nl:"De Crusade Mission Pack: Wars of Faith is een uitbreiding voor Warhammer 40,000 die een reeks verhaalgestuurde missies en campagnes introduceert met als thema geloof, toewijding en conflict. Deze set biedt spelers nieuwe scenario's, doelen en uitdagingen om hun spelervaring te verbeteren, zodat ze zich kunnen onderdompelen in epische gevechten in de grimmige duisternis van het 41e millennium.",
            en:"The Crusade Mission Pack: Wars of Faith is an expansion for Warhammer 40,000 that introduces a series of narrative-driven missions and campaigns focused on themes of faith, devotion, and conflict. This pack provides players with new scenarios, objectives, and challenges to enhance their gaming experience, allowing them to immerse themselves in epic battles within the grim darkness of the 41st millennium."
        },
        img:"../media/EngCrusadeMissionPackWarsofFaith.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type001,
        prijs: 35.00
    },
    //Terrein
    {
        categorie: categorieen.cat002,
        id:9,
        naam:{
            nl: "Necromunda: Zone Mortalis vloer tegelset",
            en:"Necromunda: Zone Mortalis Floor Tile Set"
        },
        beschrijving:{
            nl:"De Necromunda: Zone Mortalis Vloertegelset is een verzameling modulaire terreintegels die zijn ontworpen voor het Necromunda tafelbladspel. Deze tegels vertegenwoordigen de complexe en gevaarlijke omgevingen van de hivesteden, waardoor spelers meerlaagse slagvelden kunnen creëren met loopbruggen, platforms en nauwe gangen. De set verbetert de meeslepende ervaring van gevechten in de grimmige onderwereld.",
            en:"The Necromunda: Zone Mortalis Floor Tile Set is a collection of modular terrain tiles designed for the Necromunda tabletop game. These tiles represent the intricate and dangerous environments of the hive cities, allowing players to create multi-level battlegrounds with walkways, platforms, and tight corridors. The set enhances the immersive experience of battles within the grim underhive."
        },
        img:"../media/ZoneMortalisFloorTileBox.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 60.00
    },
    {
        categorie: categorieen.cat002,
        id:10,
        naam:{
            nl: "Munitorum bepanserde containers",
            en:"Munitorum Armoured Containers"
        },
        beschrijving:{
            nl:"Munitorum Gepantserde Containers zijn terreinstukken die zijn ontworpen voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze containers stellen robuuste opslageenheden voor die te vinden zijn op slagvelden in het 41e millennium. Ze kunnen dienen als dekking, doelwitten of obstakels tijdens het spelen, waardoor zowel tactische diepgang als thematische realisme wordt toegevoegd aan gevechten die worden uitgevochten in het grimmige en door oorlog verscheurde universum.",
            en:"Munitorum Armoured Containers are terrain pieces designed for Warhammer 40,000 and other tabletop wargames. These containers represent sturdy storage units found across battlefields in the 41st millennium. They can serve as cover, objectives, or obstacles during gameplay, adding both tactical depth and thematic realism to battles fought in the grim and war-torn universe."
        },
        img:"../media/MunitorumContainers.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 45.00
    },
    {
        categorie: categorieen.cat002,
        id:11,
        naam:{
            nl: "Battlezone Manufactorum Sanctum Administratus",
            en:"Battlezone Manufactorum Sanctum Administratus"
        },
        beschrijving:{
            nl:"De Battlezone Manufactorum Sanctum Administratus is een terreinstuk voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze set vertegenwoordigt een heilig administratief gebouw binnen de manufactorum, een industrieel complex in het duistere universum. Het voegt diepte toe aan opstellingen op het slagveld en biedt spelers een thematisch en strategisch element voor hun gevechten in het door oorlog verscheurde 41e millennium.",
            en:"The Battlezone Manufactorum Sanctum Administratus is a terrain piece for Warhammer 40,000 and other tabletop wargames. This kit represents a sacred administrative building within the manufactorum, an industrial complex in the grimdark universe. It adds depth to battlefield setups, providing players with a thematic and strategic element for their battles in the war-torn 41st millennium."
        },
        img:"../media/SanctumAdministratus.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 70.00
    },
    {
        categorie: categorieen.cat002,
        id:12,
        naam:{
            nl: "Zone Mortalis: zuilen & muren",
            en:"Zone Mortalis: Columns & Walls"
        },
        beschrijving:{
            nl:"Zone Mortalis: Zuilen & Muren is een terreinuitbreiding ontworpen voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze set bevat verschillende zuilen en muren die geschikt zijn om nauwe, overdekte slagvelden te creëren met een beperkte en claustrofobische sfeer. Het stelt spelers in staat om complexe lay-outs, smalle doorgangen en strategische chokepoints te maken voor intense schermutselingen in het duistere universum.",
            en:"Zone Mortalis: Columns & Walls is a terrain expansion designed for Warhammer 40,000 and other tabletop wargames. This set includes various columns and walls that are suitable for creating tight, indoor battlegrounds with a confined and claustrophobic feel. It allows players to craft intricate layouts, narrow passages, and strategic chokepoints for intense skirmishes in the grimdark universe."
        },
        img:"../media/ZMCW.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 70.00
    },
    {
        categorie: categorieen.cat002,
        id:13,
        naam:{
            nl: "Zone Mortalis: platformen & trappen",
            en:"Zone Mortalis: Platforms & Stairs"
        },
        beschrijving:{
            nl:"Zone Mortalis: Platforms & Stairs is een terreinuitbreiding ontworpen voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze set bevat verschillende platforms en trappen die ideaal zijn om meerlaagse slagvelden te bouwen met verticale gameplay-elementen. Het stelt spelers in staat om dynamische slagvelden te creëren met verhoogde posities, tactische voordelen en mogelijkheden voor strategisch manoeuvreren in het duistere universum.",
            en:"Zone Mortalis: Platforms & Stairs is a terrain expansion designed for Warhammer 40,000 and other tabletop wargames. This set includes various platforms and stairs that are ideal for constructing multi-level battlefields with vertical gameplay elements. It allows players to create dynamic battlegrounds with elevated positions, tactical advantages, and opportunities for strategic maneuvering in the grimdark universe."
        },
        img:"../media/NECZMPlatformsStairs.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 40.00
    },
    {
        categorie: categorieen.cat002,
        id:14,
        naam:{
            nl: "Sector Imperialis ruines",
            en:"Sector Imperialis Ruins"
        },
        beschrijving:{
            nl:"De Sector Imperialis Ruins is een terreinset ontworpen voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze set bevat ruïnes en puin die de overblijfselen voorstellen van eens majestueuze structuren in de uitgestrekte steden van het 41e millennium. Het voegt een realistisch en meeslepend element toe aan slagvelden, waardoor spelers stedelijke oorlogsgebieden kunnen creëren met dekking, zichtblokkades en thematische diepgang.",
            en:"The Sector Imperialis Ruins is a terrain set designed for Warhammer 40,000 and other tabletop wargames. This kit includes ruins and debris that represent the remains of once-majestic structures in the sprawling cities of the 41st millennium. It adds a realistic and immersive element to battlefields, allowing players to create urban warzones with cover, line of sight blockers, and thematic depth."
        },
        img:"../media/SectorImperialisRuinsx.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 35.00
    },
    {
        categorie: categorieen.cat002,
        id:15,
        naam:{
            nl: "Battlezone Mechanicus Galvanic Magnavent",
            en:"Battlezone Mechanicus Galvanic Magnavent"
        },
        beschrijving:{
            nl:"De Battlezone Mechanicus Galvanic Magnavent is een terreinstuk ontworpen voor Warhammer 40,000 en andere tafelblad oorlogsspellen. Deze set vertegenwoordigt een massieve industriële structuur die wordt gebruikt voor het winnen en verwerken van grondstoffen in de duistere toekomst. Het voegt een uniek visueel element toe aan het slagveld en biedt strategische mogelijkheden voor dekking, zichtlijnen en hoogtevoordelen.",
            en:"The Battlezone Mechanicus Galvanic Magnavent is a terrain piece designed for Warhammer 40,000 and other tabletop wargames. This kit represents a massive industrial structure used for resource extraction and processing in the grimdark future. It adds a unique visual element to the battlefield and offers strategic possibilities for cover, line of sight, and elevation advantages."
        },
        img:"../media/BattlezoneMechanicusGalvanicMagnavent.webp",
        link: "",
        merk: merken.brand002,
        soort: soort.type002,
        prijs: 65.00
    },
    //hobby
    {
        categorie: categorieen.cat003,
        id:16,
        naam:{
            nl: "Basis: Corax wit",
            en:"Base: Corax White"
        },
        beschrijving:{
            nl:"Base: Corax White is een verfkleur van Citadel, een merk dat bekend staat om zijn benodigdheden voor het schilderen van miniaturen. Deze specifieke kleur is een basisverf die wordt gebruikt als onderlaag voor miniatuurmodellen. Het biedt een gladde en gelijkmatige witte basis, waardoor andere kleuren beter hechten bij het aanbrengen van lagen en accenten.",
            en:"Base: Corax White is a paint color from Citadel, a brand known for its miniature painting supplies. This particular color is a foundation paint used as a base coat for miniature models. It provides a smooth and even white foundation, allowing other colors to adhere better when layering and highlighting."
        },
        img:"../media/Base-Corax-White.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 3.60
    },
    {
        categorie: categorieen.cat003,
        id:17,
        naam:{
            nl: "Basis: Abaddon zwart",
            en:"Base: Abaddon Black"
        },
        beschrijving:{
            nl:"Base: Abaddon Black is een verfkleur van Citadel, een merk dat bekend staat om zijn producten voor het schilderen van miniaturen. Deze kleur is een basisverf die wordt gebruikt als onderlaag voor miniatuurmodellen. Het biedt een solide zwarte basis die andere kleuren goed laat hechten bij het aanbrengen van lagen en accenten, waardoor diepte en contrast ontstaan in de uiteindelijke verfklus.",
            en:"Base: Abaddon Black is a paint color from Citadel, a brand renowned for its miniature painting products. This color is a foundational paint used as a base coat for miniature models. It provides a solid black base that helps other colors adhere well during layering and highlighting, creating depth and contrast in the final paint job."
        },
        img:"../media/Base-Abaddon-Black.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 3.60
    },
    {
        categorie: categorieen.cat003,
        id:18,
        naam:{
            nl: "Basis: Averland Sunset",
            en:"Base: Averland Sunset"
        },
        beschrijving:{
            nl:"Base: Averland Sunset is een verfkleur van Citadel, een merk dat bekend staat om zijn benodigdheden voor het schilderen van miniaturen. Deze kleur is bedoeld om te worden gebruikt als onderlaag voor miniatuurmodellen. Het heeft een levendige gele tint en biedt een solide startpunt voor het creëren van heldere en gedurfde kleurenschema's op je miniaturen.",
            en:"Base: Averland Sunset is a paint color from Citadel, a brand known for its miniature painting supplies. This color is designed to be used as a base coat for miniature models. It features a vibrant yellow tone and provides a solid starting point for creating bright and bold color schemes on your miniatures."
        },
        img:"../media/Averland-Sunset.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 3.60
    },
    {
        categorie: categorieen.cat003,
        id:19,
        naam:{
            nl: "Contrast: Asurmen blauw",
            en:"Contrast: Asurmen Blue"
        },
        beschrijving:{
            nl:"Contrast: Asurmen Blue is een verfproduct van Citadel, een merk dat bekend staat om zijn benodigdheden voor het schilderen van miniaturen. Contrast-verven zijn ontworpen om schaduw- en highlight-effecten in één stap te bieden. Asurmen Blue is een specifieke kleur in het Contrast-assortiment, bekend om zijn diepblauwe tint. Het maakt snelle en efficiënte kleuraanbreng mogelijk, waardoor schaduw en detail op miniaturen worden gecreëerd.",
            en:"Contrast: Asurmen Blue is a paint product from Citadel, a brand renowned for its miniature painting supplies. Contrast paints are designed to provide shading and highlighting effects in a single step. Asurmen Blue is a specific color in the Contrast range, known for its deep blue hue. It allows for quick and efficient color application, creating shading and detail on miniatures."
        },
        img:"../media/Asurmen_Blue_Contrast.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 6.30
    },
    {
        categorie: categorieen.cat003,
        id:20,
        naam:{
            nl: "Laag: Dawnstone",
            en:"Layer: Dawnstone"
        },
        beschrijving:{
            nl:"Layer: Dawnstone is een verfkleur van Citadel, een merk dat bekend staat om zijn benodigdheden voor het schilderen van miniaturen. Layer-verven worden gebruikt om fijnere details en highlights aan miniatuurmodellen toe te voegen. Dawnstone is een specifieke kleur die een neutrale grijze tint biedt, vaak gebruikt voor het markeren en schaduwen van verschillende delen van miniaturen om hun visuele aantrekkingskracht te vergroten.",
            en:"Layer: Dawnstone is a paint color from Citadel, a brand known for its miniature painting supplies. Layer paints are used to add finer details and highlights to miniature models. Dawnstone is a specific color that offers a neutral gray tone, often used for highlighting and shading various parts of miniatures to enhance their visual appeal."
        },
        img:"../media/Dawnstone.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 3.60
    },
    {
        categorie: categorieen.cat003,
        id:21,
        naam:{
            nl: "Technise: Tesseract schijn",
            en:"Technical: Tesseract Glow"
        },
        beschrijving:{
            nl:"Technical: Tesseract Glow is een verfproduct van Citadel, een merk dat bekend staat om zijn benodigdheden voor het schilderen van miniaturen. Technische verven zijn ontworpen voor specifieke effecten en afwerkingen. Tesseract Glow is een bepaald type verf dat een gloeiend en etherisch effect creëert wanneer het wordt aangebracht over een basiskleur. Het wordt vaak gebruikt om energie, magische effecten of buitenaardse aura's op miniaturen te simuleren.",
            en:"Technical: Tesseract Glow is a paint product from Citadel, a brand known for its miniature painting supplies. Technical paints are designed for specific effects and finishes. Tesseract Glow is a particular type of paint that creates a glowing and ethereal effect when applied over a base color. It's often used to simulate energy, magical effects, or otherworldly auras on miniatures."
        },
        img:"../media/TesseractGlowTechnical.webp",
        link: "",
        merk: merken.brand001,
        soort: soort.type004,
        prijs: 6.30
    }
];

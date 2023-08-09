import {productenData} from "./dyn_data.js";

window.addEventListener("load", INIT);

const query = window.location.search;
const searchParams = new URLSearchParams(query);

let valueVoornaam = searchParams.get("voornaam");
let valueAchternaam = searchParams.get("achternaam");
let valueNummer = searchParams.get("nummer");
let valueMail = searchParams.get("mail");
let valueAdres = searchParams.get("adres");

let valueProduct = searchParams.get("product");
let valueAantal = searchParams.get("aantal");
let valueCadeau = searchParams.get("cadeau");
let valueEditie = searchParams.get("editie");
let valueInfo = searchParams.get("info");

const product = productenData.filter(function (product) {return product.id == valueProduct})[0];

function INIT() {
    let voornaamSpan = document.getElementById("voornaamSpan");
    let achternaamSpan = document.getElementById("achternaamSpan");
    let nummerSpan = document.getElementById("nummerSpan");
    let mailSpan = document.getElementById("mailSpan");
    let adresSpan = document.getElementById("adresSpan");

    let productSpan = document.getElementById("productSpan");
    let aantalSpan = document.getElementById("aantalSpan");
    let cadeauSpan = document.getElementById("cadeauSpan");
    let editieSpan = document.getElementById("editieSpan");
    let merkSpan = document.getElementById("merkspan");
    let soortspan = document.getElementById("soortspan");
    let infoSpan = document.getElementById("infoSpan");

    fillSpan("Voornaam", valueVoornaam, voornaamSpan);
    fillSpan("Achternaam", valueAchternaam, achternaamSpan);
    fillSpan("Nummer", valueNummer, nummerSpan);
    fillSpan("E-mail", valueMail, mailSpan);
    fillSpan("Adres", valueAdres, adresSpan);


    fillSpan("Product", product.naam.en, productSpan);
    fillSpan("Aantal", valueAantal, aantalSpan);
    fillSpan("Cadeau",
        valueCadeau?"We pakken het met plezier in voor u":"We verpakken het niet"
        , cadeauSpan);
    fillSpan("Editie", valueEditie, editieSpan);
    fillSpan("merk", product.merk, merkSpan);
    fillSpan("soort", product.soort, soortspan);
    fillSpan("Extra", valueInfo, infoSpan);

    let article = document.getElementById("mainContainer");

    let section = document.createElement("section");
    article.append(section);

    let title = document.createElement("h3");
    section.append(title);
    title.classList.add("hiddenTitle")

    let productCard = document.createElement("div");
    section.append(productCard);
    productCard.classList.add("productCard");

    let img = document.createElement("img");
    productCard.append(img);
    productCard.classList.add("foto");

    let ul = document.createElement("ul");
    productCard.append(ul);

    let li = document.createElement("li");
    ul.append(li);

    let pNaam = document.createElement("li");
    ul.append(pNaam);
    pNaam.classList.add("naam");

    let pPrijs = document.createElement("li");
    ul.append(pPrijs);
    pPrijs.classList.add("prijs");

    let pCategorie = document.createElement("li");
    ul.append(pCategorie);

    let pBeschrijving = document.createElement("li");
    ul.append(pBeschrijving)
    pCategorie.classList.add("categorie");

    let aLink = document.createElement("a");
    aLink.href = product.link;
    aLink.textContent = "klik hier voor de volledige product pagina";
    ul.append(aLink);

    title.innerHTML = "Product card";
    img.src = product.img;
    pNaam.innerHTML = product.naam.en;
    pPrijs.innerHTML = "€" + product.prijs;
    pCategorie.innerHTML = product.categorie;
    pBeschrijving.innerHTML = product.beschrijving.nl;
}

function fillSpan(spanNaam, value, span){
    if (value === "" ||  value === null) {
        span.innerHTML = "";
    } else {
        span.innerHTML = spanNaam + ": " + "&emsp;" + value +"<br>";
    }
}
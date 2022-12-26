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
    fillSpan("Extra", valueInfo, infoSpan);

    let article = document.getElementById("mainContainer");

    var section = document.createElement("section");
    article.append(section);
    var ul = document.createElement("ul")
    section.append(ul)
    ul.classList.add("productCard");
    var img = document.createElement("img");
    ul.append(img);
    img.classList.add("foto");
    var li = document.createElement("li");
    ul.append(li);
    var pNaam = document.createElement("p");
    li.append(pNaam);
    pNaam.classList.add("naam");
    var pPrijs = document.createElement("p");
    li.append(pPrijs);
    pPrijs.classList.add("prijs");
    var pCategorie = document.createElement("p");
    li.append(pCategorie);
    pCategorie.classList.add("categorie");

    img.src = product.img;
    pNaam.innerHTML = product.naam.en;
    pPrijs.innerHTML = "€" + product.prijs;
    pCategorie.innerHTML = product.categorie;
}

function fillSpan(spanNaam, value, span){
    if (value === "" ||  value === null) {
        span.innerHTML = "";
    } else {
        span.innerHTML = spanNaam + ": " + "&emsp;" + value +"<br>";
    }
}
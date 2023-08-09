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
    fillSpan("Product", valueProduct, productSpan);
    fillSpan("Aantal", valueAantal, aantalSpan);
    fillSpan("Cadeau",
        valueCadeau?"We pakken het met plezier in voor u":"We verpakken het niet"
        , cadeauSpan);
    fillSpan("Editie", valueEditie, editieSpan);
    fillSpan("Extra", valueInfo, infoSpan);
}

function fillSpan(spanNaam, value, span){
    if (value === "" ||  value === null) {
        span.innerHTML = "";
    } else {
        span.innerHTML = spanNaam + ": " + "&emsp;" + value +"<br>";
    }
}
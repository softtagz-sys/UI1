window.addEventListener("load", INIT);

function INIT() {
    let voornaam = document.getElementById("voornaam");
    voornaam.addEventListener("focusout", voornaamValidatie);
    let achternaam = document.getElementById("achternaam");
    achternaam.addEventListener("focusout", achternaamValidatie);
    let click = document.getElementById("mail");
    click.addEventListener("keyup", mailValidatie)
    let button = document.getElementById("Submit");
    button.addEventListener("click", SUBMIT)
}
function SUBMIT() {
    let span = document.getElementById("verzendenSpan")

    if (voornaamValidatie() && achternaamValidatie() && mailValidatie()) {
        return true;
    } else {
        span.innerHTML = "Gelieve alles juist in te vullen";
        return false;
    }
}
function achternaamValidatie() {
    let form = document.getElementById("achternaam");
    let span = document.getElementById("achternaamSpan");

    naamValidatie(form, span);
}
function voornaamValidatie() {
    let form = document.getElementById("voornaam");
    let span = document.getElementById("voornaamSpan");

    naamValidatie(form, span);
}
function naamValidatie(form,span){
    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class");
        return false;
    } else if (form.value.includes(" ")) {
        span.innerHTML = "Geen spaties aub";
        form.removeAttribute("class");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.setAttribute("class", "validInput");
        return true;
    }
}
function mailValidatie() {
    let regex = new RegExp("([A-z]+[\.]{1}[A-z]+(\.[0-9])?)@((kdg\.be)|(student\.kdg\.be))");
    let form = document.getElementById("mail");
    let correct = regex.test(form.value);
    let span = document.getElementById("mailSpan");

    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.removeAttribute("class");
        return false;
    } else if (correct) {
        span.innerHTML = "";
        form.setAttribute("class", "validInput")
        return true;
    } else {
        span.innerHTML = "Email adres is niet van het correcte type";
        form.removeAttribute("class");
        return false;
    }
}
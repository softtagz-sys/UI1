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
    naamValidatie(
        document.getElementById("achternaam"),
        document.getElementById("achternaamSpan")
    );
}
function voornaamValidatie() {
    naamValidatie(
        document.getElementById("voornaam"),
        document.getElementById("voornaamSpan")
    );
}
function naamValidatie(form,span){
    if (form.value.length < 2) {
        span.innerHTML = "Gelieve een waarde in te geven";
        form.classList.remove("validInput");
        return false;
    } else if (startsOrEndsWithWhitespace(form.value)) {
        span.innerHTML = "Geen spaties voor of achter aub";
        form.classList.remove("validInput");
        return false;
    } else {
        console.log(form.value);
        span.innerHTML = "";
        form.classList.add("validInput");
        return true;
    }
}
function startsOrEndsWithWhitespace(str)
{
    return /^\s|\s$/.test(str);
}

function mailValidatie() {
    let regex = new RegExp(/^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@(kdg\.be|student\.kdg\.be)$/i);
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
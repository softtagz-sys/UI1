window.addEventListener("load", INIT);

function INIT() {
    let voornaam = document.getElementById("vnaam");
    voornaam.addEventListener("focusout", voornaamValidatie);
    let achternaam = document.getElementById("anaam");
    achternaam.addEventListener("focusout", achternaamValidatie);
    let click = document.getElementById("mail");
    click.addEventListener("keyup", mailValidatie)
    let button = document.getElementById("submit");
    button.addEventListener("click", SUBMIT)
}
function SUBMIT(event) {
    let span = document.getElementById("verzendenSpan")
    if (voornaamValidatie() && achternaamValidatie() && mailValidatie()) {
        return true;
    } else {
        event.preventDefault();
        span.innerHTML = "Gelieve alles juist in te vullen";
        return false;
    }
}
function achternaamValidatie() {
    return naamValidatie(
        document.getElementById("anaam"),
        document.getElementById("achternaamSpan")
    );
}
function voornaamValidatie() {
    return naamValidatie(
        document.getElementById("vnaam"),
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
    let regex = new RegExp("([A-z]+[\.][A-z]+(.[0-9])?)@((kdg.be)|(student.kdg.be))");
    let form = document.getElementById("mail");
    let correct = regex.test(form.value);
    let span = document.getElementById("mailSpan");
    console.log(form.value);

    if (!correct) {
        span.innerHTML = "Email adres is niet van het correcte type";

        return false;
    } else {
        span.innerHTML = "";
        return true;
    }
}
import {productenData} from "./dyn_data.js";

window.addEventListener("load", INIT);

function INIT(){

    const selectElement = document.getElementById("product-select");

    for (const product of productenData) {
        const optionElement = document.createElement("option");
        optionElement.value = product.id;
        optionElement.textContent = product.naam.en;


        const optgroupElement = selectElement.querySelector(`optgroup[label="${product.categorie}"]`);
        if (!optgroupElement) {
            const newOptgroupElement = document.createElement("optgroup");
            newOptgroupElement.label = product.categorie;
            selectElement.appendChild(newOptgroupElement);
            newOptgroupElement.appendChild(optionElement);
        } else {
            optgroupElement.appendChild(optionElement);
        }
    }
}
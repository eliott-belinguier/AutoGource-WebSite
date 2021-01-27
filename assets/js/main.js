import FORM_MANAGER from "./form.js";

window.onload = function () {
    const createButton = document.getElementById('create');

    createButton.onclick = function () {FORM_MANAGER.createElement()};
    FORM_MANAGER.createElement();
}
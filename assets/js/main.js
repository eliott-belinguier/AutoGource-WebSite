import FORM_MANAGER from "./form.js";

function initCreateButton() {
    const createButton = document.getElementById('create');

    if (createButton == null) {
        console.error("Create button not found !");
        return false;
    }
    createButton.onclick = function () {
        FORM_MANAGER.createElement();
    }
    return true;
}

function initForm() {
    const form = document.getElementById('gource_form');

    if (form == null) {
        console.error("Form not found !");
        return false;
    }
    form.onsubmit = send;
    return true;
}

function setErrorMessage(text) {
    const errorParagraph = document.getElementById('error_message');

    if (errorParagraph == null)
        return false;
    errorParagraph.textContent = text;
    return true;
}

function send() {
    const form = document.getElementById('gource_form');
    let text;
    let result;

    if (form == null)
        return;
    text = JSON.stringify(FORM_MANAGER.toJson());
    FORM_MANAGER.clear();
    result = document.createElement('input');
    result.type = 'hidden';
    result.name = 'gits';
    result.value = text;
    form.appendChild(result);
}

window.onload = function () {
    if (initCreateButton())
        FORM_MANAGER.createElement();
    initForm();
}
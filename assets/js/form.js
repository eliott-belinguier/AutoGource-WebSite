class Element {

    id;
    input;

    constructor(id) {
        const inputs = document.getElementById('inputs');
        const template = document.getElementById('input_template');
        const newElement = template.content.cloneNode(true);
        const newDiv = newElement.querySelector('div');
        const newButton = newElement.querySelector('button');

        this.input = newElement.querySelector('input');
        this.id = id;

        newDiv.setAttribute('id', 'input_' + this.id);
        newButton.setAttribute('id', 'input_' + this.id + '_button');
        newButton.onclick = function () {
            FORM_MANAGER.deleteElement(id);
        }

        this.input.setAttribute('id', 'input_' + this.id + '_input');
        inputs.appendChild(newElement);
    }

    getText() {
        return this.input.value;
    }

    setText(text) {
        this.input.value = text;
    }
}

class FormManager {
    form;
    elements;

    constructor() {
        this.form = document.getElementById('inputs');
        this.elements = [];
    }

    createElement() {
        const element = new Element(Date.now() + Math.round(Math.random() * 1000));

        this.elements.push(element);
        return element;
    }

    deleteElement(id) {
        this.elements = this.elements.filter(item => {
            if (item.id != id)
                return true;
            item.setText("remove !");
            const elementToDelete = document.getElementById('input_' + item.id);
            if (elementToDelete == null)
                return false;
            elementToDelete.remove();
            return false;
        })
    }
}

const FORM_MANAGER = new FormManager('inputs');

export default FORM_MANAGER;
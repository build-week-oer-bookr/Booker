class Dropdow {
    constructor(element) {
        this.elemeent = element;
        this.button = this.elemeent.querySelector('.dropdown-button');
        this.content = this.element.querySelector('dropdown-content');
        this.button.addEventListener('click', () => { this.toggleContent() });
    }
    
    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}


let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
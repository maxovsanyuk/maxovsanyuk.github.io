class App {
    constructor(){
    }

    init() {
        document.getElementById('form').addEventListener('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(e) {
        e.preventDefault();
        const input = e.target.input;
        if (!input.value) {
            this.showError();
            return;
        }
        this.addTodo(input.value)
        input.value = '';
    }

    showError(){
        const errorModal = document.getElementById('error');
        const closeModalBtn = document.getElementById('removeError');
        const addItemBtn = document.getElementById('addItemBtn');
        addItemBtn.classList.add('button-rotate');

        error.style.display = "block";
        input.classList.add("input-error");

        removeError.addEventListener('click', () => {
            error.style.display = "none";
            input.classList.remove("input-error");
            addItemBtn.classList.remove('button-rotate');
        });
    };

    addTodo(value) {
        const newItem = document.createElement("div");
        newItem.className = "content-item__add-item";
        const closeIcon = document.createElement("button");
        closeIcon.className = "remove-input__button";
        newItem.innerHTML = value;
        newItem.appendChild(closeIcon);
        document.getElementById("content-item").appendChild(newItem);

        closeIcon.addEventListener('click', this.onRemoveBtnClick);

        this.crossOutText(newItem);
    }

    crossOutText(newItem){
        newItem.addEventListener('click', () => {
            newItem.classList.toggle('checked');
        });
    }

    onRemoveBtnClick(e) {
        const itemToRemove = e.target.parentNode;
        document.getElementById("content-item").removeChild(itemToRemove);

    }
}

const app = new App();
app.init();



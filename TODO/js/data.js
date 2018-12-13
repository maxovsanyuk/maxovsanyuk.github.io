
addItem.addEventListener('click', (e) => {
    const input = document.getElementById("myInput");
    if (!input.value) {
        const errorModal = document.getElementById('error');
        const closeModalBtn = document.getElementById('removeError');

        e.target.classList.add('button-rotate');
        error.style.display = "block";
        input.classList.add("input-error");
        
        removeError.addEventListener('click', () => {
            error.style.display = "none";
            input.classList.remove("input-error");
            addItem.classList.remove('button-rotate');
            return;
        });
    }

    const addBtn = document.getElementById("addItem");
    
    const newItem = document.createElement("div");
    newItem.className = "content-item__add-item";

    const closeIcon = document.createElement("button");
    closeIcon.className = "remove-input__button";

    newItem.innerHTML = input.value;
    newItem.appendChild(closeIcon);

    closeIcon.addEventListener('click',() => {
        document.getElementById("content-item").removeChild(newItem);
    });

    const addToContent = document.getElementById("content-item");
    addToContent.appendChild(newItem);
    input.value = '';

    newItem.addEventListener('click', () => {
        newItem.classList.toggle('checked');
    });
}); 



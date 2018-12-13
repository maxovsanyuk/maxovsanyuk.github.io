
addItem.addEventListener('click',function(){
    const addItem = document.getElementById("addItem");
    const inputValue = document.getElementById("myInput").value;
    
    const addDiv = document.createElement("div");
    addDiv.className = "content-item__add-item";

    const close = document.createElement("button");
    close.className = "remove-input__button";
    const createItem = document.createTextNode(inputValue);
    addDiv.appendChild(createItem);
    addDiv.appendChild(close);

    close.addEventListener('click', function(){
        document.getElementById("content-item").removeChild(addDiv);
    });
    
    if (!inputValue) {
        const input = document.getElementById('myInput');
        const error = document.getElementById('error');
        const removeError = document.getElementById('removeError');

        addItem.classList.add('button-rotate');
        error.style.display = "block";
        input.classList.add("input-error");
        
        removeError.addEventListener('click', function(){
        error.style.display = "none";
        input.classList.remove("input-error");
        addItem.classList.remove('button-rotate');
        addItem.classList.add('button-rotate__remove');
    });

    }else{
        const addToContent = document.getElementById("content-item");
        addToContent.appendChild(addDiv);
        document.getElementById("myInput").value = '';
    }

    addDiv.addEventListener('click', function(){
    addDiv.classList.toggle('checked');
    });
    
}); 
const addItem = document.getElementById("addItem");
addItem.addEventListener('click',function(){
    let addDiv = document.createElement("div");
    addDiv.className = "content-item__add-item";
    const inputValue = document.getElementById("myInput").value;
    const close = document.createElement("button");
    close.className = "remove-input__button";
    const createItem = document.createTextNode(inputValue);
    addDiv.appendChild(createItem);
    addDiv.appendChild(close);
    close.addEventListener('click', function(){
        document.getElementById("content-item").removeChild(addDiv);
    });
    const input = document.getElementById('myInput');
    addItem.classList.add('error-focus');
    addItem.style.transition = ".5s"
    
    if (inputValue === '') {
        const error = document.getElementById('error');
        error.style.display = "block";
        input.classList.add("input-error");
        const removeError = document.getElementById('removeError');
        removeError.addEventListener('click', function(){
        error.style.display = "none";
        input.classList.remove("input-error");
    });
    }else{
        addItem.classList.remove("error-focus");
        document.getElementById("content-item").appendChild(addDiv);
        document.getElementById("myInput").value = '';
    }
    addDiv.addEventListener('click', function(){
      if(addDiv.classList.toggle('checked')){
      }
    }, false);
}); 
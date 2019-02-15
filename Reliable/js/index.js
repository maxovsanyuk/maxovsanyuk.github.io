'use strict'

let menu = document.getElementById('menu');
let hiddenMenu = document.getElementById('hidden-menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('menu-act');
    hiddenMenu.classList.toggle('show-hidden-menu');
    document.body.classList.toggle('body');
})
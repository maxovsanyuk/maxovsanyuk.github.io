'use strict'

$(document).ready(function() {

    // dropDown btn language
    $("#countries").msDropdown();

    // search btn
    $(".header-search").after();

    // rate stars
    $('#star1').starrr({
        change: function(e, value){
        if (value) {
            $('.your-choice-was').show();
            $('.choice').text(value);
        } else {
            $('.your-choice-was').hide();
        }
        }
    });

    // tabulathion
    $( function() {
        $( "#tabs" ).tabs();
    } );

    //  Spinner
    $("input[type='number']").inputSpinner()
    $("input.small").inputSpinner({groupClass: "input-group-sm"})
    $("input.large").inputSpinner({groupClass: "input-group-lg"})
})


// slider
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let imgFild = document.getElementById('img-fild');

if(img1.hasAttributes('chacked')){
    imgFild.classList.add('show-img1');
}
img1.addEventListener('change', () => {
    if(img1.hasAttributes('chacked')){
        imgFild.classList.remove('show-img2');
        imgFild.classList.remove('show-img3');
        imgFild.classList.add('show-img1');
    }
})
img2.addEventListener('change', () => {
    if(img2.hasAttributes('chacked')){
        imgFild.classList.remove('show-img1');
        imgFild.classList.remove('show-img3');
        imgFild.classList.add('show-img2');
    }
})
img3.addEventListener('change', () => {
    if(img3.hasAttributes('chacked')){
        imgFild.classList.remove('show-img1');
        imgFild.classList.remove('show-img2');
        imgFild.classList.add('show-img3');
    }
})

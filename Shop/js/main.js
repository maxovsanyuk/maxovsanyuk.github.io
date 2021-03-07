$(document).ready(() => {
    $('.logo-link, .menu-link').click(function(){
        const ID = $(this).attr('href');
        // console.log(ID);
        const OFFEST = $(ID).offset().top;
        // console.log(OFFEST);
        $('html').animate({
            scrollTop: OFFEST
        }, 1000);
    })
})
$(document).ready(function(){
    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#trabajos').offset().top;
    var galeria = $('#contacto').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 500
        }, 500);
    });

    $('#btn-trabajos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });
});
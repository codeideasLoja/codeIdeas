/**
 * Created by dfmontano on 11/11/16.
 */

//= require appear

/*
jQuery(document).ready(function($){
    $(".all-portfolios").isotope({
        itemSelector : '.single-portfolio',

        layoutMode: 'fitRows',
    });
    $('ul.filter li').click(function(){
        $("ul.filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".all-portfolios").isotope({

            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});
*/



$(window).ready(function() { // espera a que cargue el sitio


    $('#status').fadeOut(); // desvanece la animacion de carga
    $('#loader-wrapper').delay(200).fadeOut('slow'); // desvanece el fondo blanco
    $('body').delay(200).css({'overflow-x':'hidden'});


});


$('.show_hide').showHide({
    speed: 1000,  // speed you want the toggle to happen
    easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1, // if you dont want the button text to change, set this to 0
    showText: 'View',// the button text to show when a div is closed
    hideText: 'Close' // the button text to show when a div is open

});


jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


//Hide Overflow of Body on DOM Ready //
$(document).ready(function(){
    $("body").css("overflow", "hidden");
});

// Show Overflow of Body when Everything has Loaded
$(window).load(function(){
    $("body").css("overflow", "visible");
    var nice=$('html').niceScroll({
        cursorborder:"5",
        cursorcolor:"#00AFF0",
        cursorwidth:"3px",
        boxzoom:true,
        autohidemode:true
    });

});


jQuery(document).ready(function () {




    /*----------------------------------------------------*/
    /*  Barras de habilidad
     /*----------------------------------------------------*/

    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
            jQuery(this).animate({opacity:1,left:"0px"},500);
            var b = jQuery(this).find(".progress-bar").attr("data-width");
            jQuery(this).find(".progress-bar").animate({
                width: b + "%"
            }, 400, "linear");
        });
    });





    /*----------------------------------------------------*/
    /* Nuestro equipo
     /*----------------------------------------------------*/
    $('.all_team').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        smartSpeed:2000,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });

    /*----------------------------------------------------*/
    /* Testimonios
     /*----------------------------------------------------*/
    $('.all_tstm').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        smartSpeed:3000,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    /*----------------------------------------------------*/
    /* Clientes satisfechos
     /*----------------------------------------------------*/
    $('.al_clt').owlCarousel({
        items:6,
        loop:true,
        margin:30,
        nav:true,
        autoplay:true,
        smartSpeed:3000,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        }
    })






});


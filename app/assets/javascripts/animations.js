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

jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
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
                items:4
            }
        }
    })

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
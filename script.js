$(document).ready(function() {

    $(".menu-btn").click(function(){
        $(".menu-item-list").css({
            top : "0"
        })
    });



    $("#owl-example").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "backSlide",
        slideSpeed: 500,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });





 $("#owl-exampleee").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "goDown",
        slideSpeed: 500,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
    $("#owl-example2").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "GoDown",
        slideSpeed: 500,
        itemsDesktop : [400,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
     $("#owl-example3").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "backSlide",
        slideSpeed: 500,
        itemsDesktop : [400,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
       $("#owl-example4").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "backSlide",
        slideSpeed: 500,
        itemsDesktop : [400,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
         $("#owl-example5").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "GoDown",
        slideSpeed: 500,
        itemsDesktop : [400,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
              $("#owl-example6").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "GoDown",
        slideSpeed: 500,
        itemsDesktop : [400,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });
              
    $("#what-people").owlCarousel({
        items:1,
        autoPlay:true,
        transitionStyle : "GoDown",
        slideSpeed: 8000,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: true,
        itemsMobile : [479,1]
    });

    $("#company-adds").owlCarousel({
        items:4,
        autoPlay:true,
        transitionStyle : "GoDown",
        slideSpeed: 10000,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsTabletSmall: true,
        itemsMobile : [479,2]
    });




    //__________navbar start____________

    // $(window).scroll(function(){
    //     var navbarr = $(window).scrollTop();

    //     if (navbarr >= 200) {
    //         $('.shah').addClass("shah-1")
    //     } else {
    //         $('.shah').removeClass("shah1")
    //     }
    // });



    //____________navbar end______________

    //_____________letest technology_____________

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 2200){
            $('.heading').addClass('headingtop');
        }
    });
                //______1st____
    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 2300){
        $('.para').addClass('paraleft');

    }
    if (animation >= 200) {
            $('.shah').addClass("shah-1")
        } else {
            $('.shah').removeClass("shah-1")
        }
    });

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 2300){
            $('.para1').addClass('paraleft1');
        }
    });

        //______________2nd_______

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 2700){
            $('.para2').addClass('paraleft2');
        }
    });

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 2700){
            $('.para3').addClass('pararight3');
        }
    });

    //_______________3rd__________

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 3100){
            $('.para4').addClass('paraleft4');
        }
    });

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 3100){
            $('.para5').addClass('pararight5');
        }
    });

    //__________________4th_________

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 3600){
            $('.para6').addClass('paraleft6');
        }
    });

    $(window).scroll(function(){
        var animation= $(this).scrollTop();

        if(animation > 3600){
            $('.para7').addClass('pararight7');
        }
    });


});

    //_______________technology end____________________


                                    //_______________something start_______________


$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 550){
        $('.something').addClass('somethingleft');
    }
});

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 550){
        $('.something1').addClass('somethingright');
    }
});




                                    //________________something end____________


//____________________heading start_______________

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 500){
        $('.heading1').addClass('headingtop1');
    }
});


$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 900){
        $('.heading2').addClass('headingtop2');
    }
});

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 1500){
        $('.heading3').addClass('headingtop3');
    }
});

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 4200){
        $('.heading4').addClass('headingtop4');
    }
});


$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 4800){
        $('.heading5').addClass('headingtop5');
    }
});

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 5450){
        $('.heading6').addClass('headingtop6');
    }
});

//__________________heading  end___________________


//_________________who i really am start__________________


$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 1200){
        $('.contactparaa').addClass('contactparaa1');
    }
});

$(window).scroll(function(){
    var animation= $(this).scrollTop();

    if(animation > 1200){
        $('.contactpicc').addClass('contactpicc1');
    }
});


//_________________who i really am end__________________


$(".home").click(function(){
    $("body").animate({
        scrollTop : $(".home-page").offset().top
    }, 1000)

})

$(".services").click(function(){
    $("body").animate({
        scrollTop : $(".somethings").offset().top
    }, 1000)

})

$(".aboutme").click(function(){
    $("body").animate({
        scrollTop : $(".about").offset().top
    }, 1000)

})

$(".technology").click(function(){
    $("body").animate({
        scrollTop : $(".tech").offset().top
    }, 1000)

})

$(".mycontact").click(function(){
    $("body").animate({
        scrollTop : $(".contactme").offset().top
    }, 1000)

})



$(function(){
  $('.bxslider').bxSlider({
    mode: 'vertical',
    auto:true,
    captions: true,
    slideWidth: 1365
    
  });
});














            











$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function() {
 
  $("#owl-demoo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

      



















$(document).ready(function() {
  $("#carousel").owlCarousel({
      navigation : false,
      slideSpeed : 500,
        paginationSpeed : 800,
        rewindSpeed : 1000,
      singleItem: true,
            autoPlay : true,
        stopOnHover : true,
  });
});
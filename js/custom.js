$('.preloader').preloadinator({

    animation: 'fadeOut',
  
    animationDuration: 200 
  
  });


// nav dropdown aicon animation
$(".advertise_drop").hover(function(){
    $(".ad_drop_icon").toggleClass("nav_icon_rotate")
})
$(".support_drop").hover(function(){
    $(".support_drop_icon").toggleClass("nav_icon_rotate")
})

// na drop down in out

$(".advertise_drop").hover(function(){
    $(".ad_drop_items").toggleClass("drop_in_out")
})
$(".support_drop").hover(function(){
    $(".support_drop_items").toggleClass("drop_in_out")
})
// nav toggle
$(".na_tgl").click(function(){
  $(".na_tgl").toggleClass("fa-xmark")
})

// venobox link

new VenoBox({
    selector: ".my-video-links"
});

// testimonial slider
$('.test_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.prevv',
    nextArrow:'.nextv',
    
    centerMode:true,
    centerPadding:"0",
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

//   blog slider

$('.blog_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.prevvv',
    nextArrow:'.nextvv',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    centerMode:true,
    centerPadding:"0"
  });

//   FAQ icon change



  
 $("#minus").click(function(){
 
 $("#minus").toggleClass("faq_icon_rotate")
   
})
 $(".accordion-header2").click(function(){
 
 $("#minus1").toggleClass("faq_icon_rotate")
   
})
 $(".accordion-header3").click(function(){
 
 $("#minus3").toggleClass("faq_icon_rotate")
   
})
 $(".accordion-header4").click(function(){
 
 $("#minus4").toggleClass("faq_icon_rotate")
   
})
 $(".accordion-header5").click(function(){
 
 $("#minus5").toggleClass("faq_icon_rotate")
   
})

// nav bar fixed and back to top btn
  // navbar scroll
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 10){
      $("nav").addClass("navdown")
    }else{
       $("nav").removeClass("navdown")
    }
    if(scrolling > 10){
      $(".backtop").fadeIn(1000)
    }else{
       $(".backtop").fadeOut(1000)
    }
   
    
  })
  // backtop button
$(".backtop").click(function(){
    $("html,body").animate({
      scrollTop:0,
    },
    )
  },)

// wow js
new WOW().init();
// wow js

// preloader fadein out
$('.js-preloader').preloadinator({

  animation: 'fadeOut',

  animationDuration: 9000

});


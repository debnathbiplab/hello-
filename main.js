
  $('.banner-slide').owlCarousel({
    loop: true,
    nav: false,
    rtl: false,
    autoplay: true,
    autoplayTimeout: 4500,
    smartSpeed: 1950,
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

// sticky-header..

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 400) {
      $(".header-sec").addClass("darkHeader");
    }
    else{
      $(".header-sec").removeClass("darkHeader");
    }
});

// magnific-pop-up

$('.images-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});


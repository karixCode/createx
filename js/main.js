$(function(){
  Fancybox.bind()

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function() {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: true,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    responsive:
    [
      {
        // breakpoint: 700,
        // settings: {
          
        // },
      },
    ]
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  // $('.program__accordeon-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__accordeon-link--active')
  //   $(this).children('.program__accordeon-text').slideToggle()
  // })
  $('.program__accordeon-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__accordeon-link--active')) {
      $(this).removeClass('program__accordeon-link--active')
      $(this).children('.program__accordeon-text').slideUp()
  } else {
    $('.program__accordeon-link').removeClass('program__accordeon-link--active')
    $('.program__accordeon-text').slideUp()
    $(this).addClass('program__accordeon-link--active')
    $(this).children('.program__accordeon-text').slideDown()
    }
  })

  $(".header__nav-list a, .header__top-btn, .footer__go-top ").on("click", function(e){
    e.preventDefault();
    anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 100
    }, 800);
});
setInterval(() => {

    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false ){
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }

}, 0);

  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })
})

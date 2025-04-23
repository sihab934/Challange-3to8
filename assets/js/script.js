/*menu for mobile devices */
$(document).ready(function(){
  // Generic function to active nav
    $(".toggle-btn").click(function () {
      $(".toggle-btn").removeClass("active");
      $(this).addClass("active");
    });
  // Generic function to  active nav in phone
    $(".toggle-btn-mobile").click(function () {
      $(".toggle-btn-mobile").removeClass("active_mobile");
      $(this).addClass("active_mobile");
    });
    
  //phone menu btn
    $(".menu-btn").click(function () {
      $("#navPhone").toggleClass("hidden");
    });

    //Home page video popup
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    //slick carosal for testimonial
    $('.carouseAutoplay').slick({
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000, 
      dots: true, 
      arrows: false
  });
});
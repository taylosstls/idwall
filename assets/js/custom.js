$(document).ready(function () {
  // Active Menu on Scroll
  $('body').scrollspy({ target: '.navbar', offset: 90 });


  // Smooth Scrolling
  $('a.scroll-it').bind('click', function (e) {
    e.preventDefault();
    var headerHeight = $('.navbar.fixed-top').height();

    var target = $(this).attr('href'); //Get the target

    var boxWidth = $(window).width();
    if (boxWidth <= 991) {
      var scrollToPosition = $(target).offset().top - 80;
      $('html').animate({ 'scrollTop': scrollToPosition }, 800, function () {
        window.location.hash = '';
        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
      });
    }
    else {
      var scrollToPosition = $(target).offset().top - headerHeight;
      $('html').animate({ 'scrollTop': scrollToPosition }, 800, function () {
        window.location.hash = '';
        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
      });
    }

  });

  // Menu Responsive
  $('.menu-button').on('click', function () {
    $('.menu-icon').toggleClass('open');
  });

  // Verify if Click is on Menu Itens
  $('.nav-link.scroll-it').on('click', function () {
    var boxWidth = $(window).width();
    if ($('.menu-button').children('div').hasClass('open') && (boxWidth <= 991)) {
      $('.menu-icon').toggleClass('open');
    }
  });

  // Close Toggle on Menu Responsive
  $(window).bind("resize", function () {
    if ($(this).width() <= 991) {
      $('.nav-link.scroll-it').attr('data-toggle', 'collapse').attr('data-target', '#navigationHeader').removeClass('active');
    } else {
      $('.nav-link.scroll-it').removeAttr('data-toggle', 'collapse').removeAttr('data-target', '#navigationHeader');
    }
  }).trigger('resize');

  // Carousel Solutions
  $('.solutions-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2
      },
      1000: {
        items: 2,
      }
    }
  });

  // Carousel Solutions
  $('.partnership-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });

  // Start AOS Animation
  AOS.init();

  // Bootstrap Form Validation
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

});

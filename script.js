$(window).on('scroll', function() {
    $('.section-2').each(function() {
      const elementOffset = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scrollTop + windowHeight > elementOffset && scrollTop < elementOffset + elementHeight) {
        const visiblePercentage = ((scrollTop + windowHeight - elementOffset) / elementHeight) * 100;
        if (visiblePercentage >= 50) {
          $(".section-2 .intro-text").addClass('fade-up');
        } else {
          $(".section-2 .intro-text").removeClass('fade-up');
        }
      } else {
        $(".section-2 .intro-text").removeClass('fade-up');
      }
    });
  });

  $(window).on('scroll', function() {
    $('.section-3').each(function() {
      const elementOffset = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scrollTop + windowHeight > elementOffset && scrollTop < elementOffset + elementHeight) {
        const visiblePercentage = ((scrollTop + windowHeight - elementOffset) / elementHeight) * 100;
        if (visiblePercentage >= 50) {
          $(".section-3 .intro-text").addClass('fade-up');
          $(".section-3 .coffee-machine-img").addClass('fade-up');
        } else {
          $(".section-3 .intro-text").removeClass('fade-up');
          $(".section-3 .coffee-machine-img").removeClass('fade-up');
        }
      } else {
        $(".section-3 .intro-text").removeClass('fade-up');
        $(".section-3 .coffee-machine-img").removeClass('fade-up');
      }
    });
  });

  $(window).on('scroll', function() {
    $('.section-4').each(function() {
      const elementOffset = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scrollTop + windowHeight > elementOffset && scrollTop < elementOffset + elementHeight) {
        const visiblePercentage = ((scrollTop + windowHeight - elementOffset) / elementHeight) * 100;
        if (visiblePercentage >= 50) {
          $(".section-4 .card").addClass('fade-up');
        } else {
          $(".section-4 .card").removeClass('fade-up');
        }
      }
    });
  });

  $(window).on('scroll', function() {
    $('.section-5').each(function() {
      const elementOffset = $(this).offset().top;
      const elementHeight = $(this).outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scrollTop + windowHeight > elementOffset && scrollTop < elementOffset + elementHeight) {
        const visiblePercentage = ((scrollTop + windowHeight - elementOffset) / elementHeight) * 100;
        if (visiblePercentage >= 50) {
          $(".section-5 .circle-1").addClass('fade-up');
          $(".section-5 .step-1").addClass('fade-up');
          $(".section-5 .step-2").addClass('fade-up');
          $(".section-5 .step-3").addClass('fade-up');
          $(".section-5 .step-4").addClass('fade-up');
          $(".section-5 .step-5").addClass('fade-up');
          $(".section-5 .step-6").addClass('fade-up');
          $(".section-5 .step-7").addClass('fade-up');
          $(".section-5 .circle-2").addClass('fade-up');
          $(".section-5 .circle-4 > img").addClass('fade-up');
          $(".section-4 .card-img-1").addClass("move-down");
          $(".section-4 .card-img-5").addClass("move-down");
          $(".section-4 .card-img-7").addClass("move-down");
        } else {
          $(".section-5 .circle-1").removeClass('fade-up');
          $(".section-5 .step-1").removeClass('fade-up');
          $(".section-5 .step-2").removeClass('fade-up');
          $(".section-5 .step-3").removeClass('fade-up');
          $(".section-5 .step-4").removeClass('fade-up');
          $(".section-5 .step-5").removeClass('fade-up');
          $(".section-5 .step-6").removeClass('fade-up');
          $(".section-5 .step-7").removeClass('fade-up');
          $(".section-5 .circle-2").removeClass('fade-up');
          $(".section-5 .circle-4 > img").removeClass('fade-up');
          $(".section-4 .card-img-1").removeClass("move-down");
          $(".section-4 .card-img-5").removeClass("move-down");
          $(".section-4 .card-img-7").removeClass("move-down");
        }
      } else {
          $(".section-5 .circle-1").removeClass('fade-up');
          $(".section-5 .step-1").removeClass('fade-up');
          $(".section-5 .step-2").removeClass('fade-up');
          $(".section-5 .step-3").removeClass('fade-up');
          $(".section-5 .step-4").removeClass('fade-up');
          $(".section-5 .step-5").removeClass('fade-up');
          $(".section-5 .step-6").removeClass('fade-up');
          $(".section-5 .step-7").removeClass('fade-up');
          $(".section-5 .circle-2").removeClass('fade-up');
          $(".section-5 .circle-4 > img").removeClass('fade-up');
          $(".section-4 .card-img-1").removeClass("move-down");
          $(".section-4 .card-img-5").removeClass("move-down");
          $(".section-4 .card-img-7").removeClass("move-down");
      }
    });
  });

$(".toggler").click(function () {
    $(".menu").slideToggle();
});

$(document).on('click mousewheel touchend', function(event) {
    if(!$(event.target).is(".menu") && !$(event.target).is(".toggler") && !$(event.target).is(".dropdown-toggle")){
        $(".menu").fadeOut();
        $(".toggler").prop('checked', false);
    }
});

var translateX = 0;
$(".section-1 .next").click(function(){
  $(".number-list div:first").appendTo('.number-list');
});

$(".section-1 .prev").click(function(){
  $(".number-list div:last").prependTo('.number-list');
});
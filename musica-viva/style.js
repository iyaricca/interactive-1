$(window).scroll(function(e){parallaxScroll();});
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.y1').css({'transform': 'translate3d(0,' + scrolled * -0.15 + 'px, 0)'});
    $('.y2').css({'transform': 'translate3d(0,' + scrolled * -0.25 + 'px, 0)'});
    $('.y3').css({'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'});
    $('.y4').css({'transform': 'translate3d(0,' + scrolled * -0.4 + 'px, 0)'});
    $('.y5').css({'transform': 'translate3d(0,' + scrolled * -0.5 + 'px, 0)'});
    $('.y6').css({'transform': 'translate3d(0,' + scrolled * -0.6 + 'px, 0)'});
  };
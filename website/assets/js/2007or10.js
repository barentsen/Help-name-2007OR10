'use strict';
$(document).ready(function(){

  // animsition
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  // smooth scroll
  $('html').smoothScroll();

  // matchHeight
  $('.match-height').matchHeight();

}); // end (document).ready(function()



// parallax
jQuery(window).trigger('resize').trigger('scroll');

window.setTimeout(function(){
    $(window).resize();
},500);



// mixItUp
$('#work-container').mixItUp({
  controls: {
    activeClass: 'on'
  },
   load: {
            filter: '.category-1'
        }
});



// fade out intro on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.intro-content').css({'opacity':(( 1000-scroll )/1000)});
});


// sticky nav
$(".js_fixedcontent").fixedcontent({
  marginTop: 0,
  minWidth: 0,
  zIndex: 500
});


// close collapsed bootstrap nav
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});

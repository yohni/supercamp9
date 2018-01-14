$(document).ready(function() {
  var offset=300,
      scroll_top_duration=1000,
      toTop=$('.back-top').first();

  $(window).scroll(function() {
    if ($(this).scrollTop()>offset) {
      if (!toTop.hasClass('visible')) {
        toTop.addClass('visible');
      }
    }
    else {
      toTop.removeClass('visible');
    }
  });
  $('a[href="#"]').click(function(event) {
    return false;
  });
  toTop.click(function(event) {
    $('html, body').animate({
      scrollTop: 0});
    return false;
  });

  setTimeout(function () {
    $('#preloader').addClass('done');
  }, 1000);
  //Toggled menu on mobile screen
  $('#b-menu-toggler').click(function(event) {
    console.log('c;');
    var target=$($(this).data('target'));
    if (target.hasClass('show')) {
      $(this).removeClass('opened');
      target.removeClass('show');
    }
    else {
      $(this).addClass('opened');
      target.addClass('show');
    }
  });

  var options = {
  strings: ["ILMU YANG BERMANFAAT", "NILAI - NILAI KEAGAMAAN","MASUK UNIVERSITAS FAVORIT"],
  typeSpeed: 90,
  showCursor:false,
  backSpeed:50,
  loop:true
  }

  $('#typing-line').text('');
  var typed = new Typed("#typing-line", options);


});

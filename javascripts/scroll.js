$(function () {
  $('#webLink').click(function() {
    $('html, body').animate({
      scrollTop: $("#web").offset().top-100
    }, 500);
  });

  $('#graphicsLink').click(function() {
    $('html, body').animate({
      scrollTop: $("#graphics").offset().top-100
    }, 1000);
  });

  $('#contactsLink').click(function() {
    $('html, body').animate({
      scrollTop: $(".contacts").offset().top-100
    }, 1000);
  });
})

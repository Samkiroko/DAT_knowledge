$(function () {
  $('#showPopup').click(function (e) {
    e.stopPropagation();
    $('.bg').toggle();
    $('.popup').toggle();
  });
  $('body').click(function () {
    $('.bg').toggle();
    $('.popup').hide();
    var video = $('#player').attr('src');
    $('#player').attr('src', '');
    $('#player').attr('src', video);
  });
});

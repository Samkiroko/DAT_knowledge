$(function () {
  var $modal = $('.modal');
  var HIDE_CLASS = 'is-hide';

  $('#js-startbtn').on('click', function () {
    $modal.removeClass(HIDE_CLASS);
  });

  $('.js-modal-close').on('click', function () {
    $modal.addClass(HIDE_CLASS);
  });
});

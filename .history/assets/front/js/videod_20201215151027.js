var player = null;
var tag = document.createElement('script');
tag.id = 'iframe-api';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example');
}

var elPopupClose = $('.popup__close');
var elPopupOverlay = $('.popup__overlay');
var elPopupToggle = $('#popup__toggle');

// @see https://developers.google.com/youtube/iframe_api_reference#Playback_controls
// @see http://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
function popupDidClose() {
  if (player !== null) {
    player.pauseVideo();
  }
}

elPopupClose.click(function () {
  elPopupOverlay.css({ display: 'none', visibility: 'hidden', opacity: 0 });
  popupDidClose();
});

elPopupOverlay.click(function (event) {
  event = event || window.event;
  if (event.target === this) {
    elPopupOverlay.css({ display: 'none', visibility: 'hidden', opacity: 0 });
    popupDidClose();
  }
});

elPopupToggle.click(function () {
  elPopupOverlay.css({ display: 'block', visibility: 'visible', opacity: 1 });
});

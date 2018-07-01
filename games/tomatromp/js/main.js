var $hero, videoContainer, $download;

window.addEventListener('load', () => {
  $hero = document.getElementsByClassName('hero')[0];
  $videoContainer = document.getElementsByClassName('video-container')[0];
  $download = document.getElementsByClassName('downloads')[0];
  resize();
});

window.addEventListener('resize', () => {
  resize();
});

function resize() {
  var width = document.body.clientWidth;
  var heroHeight = parseInt(width / 1.966);
  var videoContainerHeight = parseInt((width - (width * 0.20))/ 1.77);
  var downloadPadding = parseInt(width / 3.695);

  $hero.style.height = heroHeight + 'px';
  $videoContainer.style.height = videoContainerHeight + 'px';
  $download.style.paddingTop = downloadPadding + 'px';
}

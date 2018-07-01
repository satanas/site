var $hero, videoContainer, $download, $title;

window.addEventListener('load', () => {
  $hero = document.getElementsByClassName('hero')[0];
  $videoContainer = document.getElementsByClassName('video-container')[0];
  $download = document.getElementsByClassName('downloads')[0];
  $title = document.getElementsByClassName('title')[0];

  resize();
});

window.addEventListener('resize', () => {
  resize();
});

function resize() {
  var width = document.body.clientWidth;
  var heroHeight = parseInt(width / 1.966);
  var videoContainerHeight = parseInt((width - (width * 0.20))/ 1.77);
  var downloadPadding = parseInt(width / 25.714);
  var titlePadding = parseInt(width / 18);

  $hero.style.height = heroHeight + 'px';
  $videoContainer.style.height = videoContainerHeight + 'px';
  $download.style.paddingTop = downloadPadding + 'px';
  $title.style.paddingTop = titlePadding + 'px';
}

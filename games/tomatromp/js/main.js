var $hero, videoContainer;

window.addEventListener('load', () => {
  $hero = document.getElementsByClassName('hero')[0];
  $videoContainer = document.getElementsByClassName('video-container')[0];
  resize();
});

window.addEventListener('resize', () => {
  resize();
});

function resize() {
  var width = document.body.clientWidth;
  var heroHeight = parseInt(width / 1.966);
  var videoContainerHeight = parseInt((width - (width * 0.20))/ 1.77);

  $hero.style.height = heroHeight + 'px';
  $videoContainer.style.height = videoContainerHeight + 'px';
}

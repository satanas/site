var $hero;

window.addEventListener('load', () => {
  $hero = document.getElementsByClassName('hero')[0];
  resize();
});

window.addEventListener('resize', () => {
  resize();
});

function resize() {
  var heroHeight = parseInt(document.body.clientWidth / 1.966);
  $hero.style.height = heroHeight + 'px';
  console.log(heroHeight);
}

const img = document.querySelector('#poza');
const bg = document.querySelector('#bg');

if (img.complete) {
  bg.style.width = img.offsetWidth + 'px';
} else {
  img.onload = function () {
    bg.style.width = img.offsetWidth + 'px';
  };
}

import Filterizr from 'filterizr'

const options = {layout: 'sameWidth'};
const filterizr = new Filterizr('.gallery', options);

document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.video__wrapper');
  const playButton = videoWrapper.querySelector('.video__play');
  const video = videoWrapper.querySelector('.video__source');

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoWrapper.classList.add('is-playing');
    } else {
      video.pause();
      videoWrapper.classList.remove('is-playing');
    }
  })
});
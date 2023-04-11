import Filterizr from 'filterizr';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const options = {layout: 'sameWidth'};
if (document.querySelector('.gallery')) {
  const filterizr = new Filterizr('.gallery', options);
}

const toggleActiveItem = () => {
  if (document.querySelector('.filtr-controls')) {
    const controls = document.querySelector('.filtr-controls');
    const controlItem = controls.querySelectorAll('li.filtr-control');

    [...controlItem].forEach(item => {
      item.addEventListener('click', () => {
        const current = controls.querySelector('li.active');
        if (current) current.classList.remove('active');
        item.classList.add('active');
      });
    });
  }
}

toggleActiveItem();

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.video__wrapper')) {
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
  }
});


if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const toggleModal = () => {
  const openModalButton = document.querySelector('.preview__button');
  const modal = document.querySelector('.slider-modal');
  const closeModalButton = document.querySelector('.modal__button');

  openModalButton.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
  
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = 'visible';
  });
}

toggleModal()
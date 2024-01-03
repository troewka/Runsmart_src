const slider = tns({
   container: '.carousel__slider',
   items: 1,
   slideBy: 'page',
   speed: 1200,
   nav: false,
   controls: false
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
   slider.goTo('prev')
});

document.querySelector('.carousel__next').addEventListener('click', function () {
   slider.goTo('next')
});
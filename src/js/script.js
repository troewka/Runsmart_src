/-----------------------------------------Slider (Tiny-Slider)-------------------------------------------------------/

const slider = tns({ // Tiny-Slider
   container: '.carousel__slider',
   controls: false,
   items: 1,
   slideBy: 'page',
   speed: 1000,
   nav: true
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
   slider.goTo('prev')
});

document.querySelector('.carousel__next').addEventListener('click', function () {
   slider.goTo('next')
});

/-----------------------------------------TABS (jQuery)-------------------------------------------------------/

$(document).ready(function () { // jQuery

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () { // Функція переключення TABS та показ контенту відповідного табу
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active') // Додавання активного класу для переключення TABS
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__box').eq(i).toggleClass('catalog-item__box_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      })
   }

   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');
});
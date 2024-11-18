window.addEventListener("load", function () {
    let swiper = new Swiper(".main-slider__container", {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.main-slider__nav-arrow--next',
            prevEl: '.main-slider__nav-arrow--prev'
        },
        pagination: {
            el: ".main-slider__pag"
        },
        breakpoints: {
            // Responsive design, changing slidesPerView based on screen width Code by Amit Niranjan
            640: {
                slidesPerView: 1.4,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            1024: {
                spaceBetween: 30,
                slidesPerView: 'auto'
            }
        }
    });

});

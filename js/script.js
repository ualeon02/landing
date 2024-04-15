var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:true,
    grabCursor:true,
    navigator: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
    breakpoints : {
        991: {
            slidesPerView: 3
        }
    }
});
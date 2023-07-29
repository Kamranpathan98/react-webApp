export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: { // this helps to show the number of cards on different types of screens
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
}
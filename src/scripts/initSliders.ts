import { Swiper } from 'swiper'
import { Navigation } from 'swiper/modules'

export function initProductsSlider() {
    const swiper = new Swiper('.js-products-slider', {
        modules: [Navigation],
        speed: 700,
        spaceBetween: 40,
        navigation: {
            prevEl: '.slider-prev',
            nextEl: '.slider-next',
        },
    })
}
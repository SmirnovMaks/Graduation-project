import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

const slider = () => {
    const swiper = new Swiper('.services-elements', {
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left'
        },
        slidesPerView: 3,
        loop: true
    });
    const topSlider = new Swiper('.top-slider', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });
};

export default slider;
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

const slider = () => {
    const swiper = new Swiper('.services-elements', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left'
        },
        slidesPerView: 3,
        loop: true
    });
};

export default slider;
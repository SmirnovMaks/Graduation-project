import {
    animate
} from './helpers';

const modal = () => {
    const header = document.querySelector('.header');
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    console.log(modal);

    header.addEventListener('click', (e) => {
        if (e.target.closest('.callback-btn')) {
            e.preventDefault();
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress;
                }
            });
        } else if (e.target.closest('ul>li>a')) {
            e.preventDefault();
            const id = e.target.getAttribute('href');
            console.log(id);
            if (id === '#services') {
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    });

    modalOverlay.addEventListener('click', (e) => {
        if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    });

};

export default modal;
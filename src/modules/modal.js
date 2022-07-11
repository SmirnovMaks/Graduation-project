import {
    animate
} from './helpers';

const modal = () => {
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const body = document.querySelector('body');

    const modalOpen = () => {
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
    };

    body.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal-open]')) {
            e.preventDefault();
            modalOpen();
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
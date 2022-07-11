const smoothScroll = () => {
    const btnUp = document.querySelector('.up');
    const header = document.querySelector('.header');
    let scroll = window.scrollY;

    header.addEventListener('click', (e) => {
        if (e.target.closest('ul>li>a')) {
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

    window.addEventListener('scroll', () => {
        scroll = window.scrollY;
        if (scroll >= 700) {
            btnUp.style.display = 'block';
        } else if (scroll < 700) {
            btnUp.style.display = 'none';
        }
    });
    if (scroll >= 700) {
        btnUp.style.display = 'block';
    } else if (scroll < 700) {
        btnUp.style.display = 'none';
    }
    btnUp.addEventListener('click', () => {
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
export default smoothScroll;
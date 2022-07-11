const accordeon = () => {
    const accordeon = document.querySelector('.accordeon');
    const accordeonItems = accordeon.querySelectorAll('.element');
    const accordeonContent = accordeon.querySelectorAll('.element-content');

    accordeon.addEventListener('click', (e) => {
        if (e.target.closest('.element')) {
            const btn = e.target.closest('.element');
            accordeonItems.forEach((elem, index) => {
                if (elem === btn) {
                    elem.classList.add('active');
                    accordeonContent[index].style.display = 'block';
                } else {
                    elem.classList.remove('active');
                    accordeonContent[index].style.display = 'none';
                }
            });
        }
    });
};

export default accordeon;
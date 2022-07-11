const sendForm = () => {
    const form = document.getElementById('form-callback');
    const inputName = form.querySelector('input[name="fio"]');
    const inputTel = form.querySelector('input[name="tel"]');

    const statusBlock = document.createElement('div');
    statusBlock.classList.add('status-block');
    const loadText = 'Идет отправка';
    const errorText = 'Ошибка...';
    const successText = 'Отправлено';

    const validator = (item, regExp) => {
        inputName.classList.add('success');
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(regExp, '');
        });
        item.addEventListener('blur', (e) => {
            if (e.target.value !== '') {
                e.target.classList.add('success');
                e.target.classList.remove('error');
            } else {
                e.target.classList.remove('success');
                e.target.classList.add('error');
            }
        });
        item.addEventListener('invalid', (e) => {
            e.preventDefault();
            item.classList.add('error');
        });

    };
    validator(inputName, /[^а-яА-Я]/);
    validator(inputTel, /[^\d\+]/);

    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const inputs = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (val) {
                formBody[key] = val;
            }
        });

        if (validate(inputs)) {
            statusBlock.textContent = loadText;
            statusBlock.style.color = 'black';
            sendData(formBody)
                .then((data) => {
                    statusBlock.textContent = successText;
                    inputs.forEach((input, index) => {
                        if (index < 2) {
                            input.value = '';
                        }
                    });
                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 3000);
                })
                .catch(error => {
                    console.log(error);
                    statusBlock.textContent = errorText;
                    statusBlock.style.color = 'black';
                });
        } else {
            statusBlock.textContent = 'Ошибка! Введите данные правильно';
            statusBlock.style.color = 'black';
            setTimeout(() => {
                statusBlock.textContent = '';
            }, 3000);
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};


export default sendForm;
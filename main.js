const inputE1 = document.querySelector('#email');
const btn = document.querySelector('#submit');
const RegEmail = /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
const iconErrorE1 = document.querySelector('.icon-error');
const textErrorE1 = document.querySelector('.text-error');
const fromGroupE1 = document.querySelector('.from-group');
let errors = [];

btn.addEventListener('click', e => {
    textErrorE1.classList.remove('text-success');

    errors = []

    e.preventDefault();
    //validate email address
    const email = inputE1.value;

    if (email == '' || email === undefined) {
        errors.push('please provide us your email');
        //show error icon 
        iconErrorE1.getElementsByClassName.display = 'block';
        textErrorE1.innerText = errors[0];
    }
    if (!errors.length > 0) {
        //hide error icon
        iconErrorE1.style.display = 'none';
        textErrorE1.classList.add(text - success);
        textErrorE1.innerText = 'thank you for subscribing to our store newsletter';
    }
});
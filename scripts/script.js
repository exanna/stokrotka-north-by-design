const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav');
const navi = document.querySelector('.navigation');
const policyBtn = document.querySelector('.policy__btn');
const modal = document.querySelector('.modal');
const acceptBtn = document.querySelector('.accept');
const xBtn = document.querySelector('.x');

const openMenu = () => {
    console.log('ok');
    nav.classList.toggle('nav--active');
    navi.classList.toggle('navigation--active');
}

const showPolicy = () => {
    modal.classList.add('modal--show');
}

const hidePolicy = () => {
    modal.classList.remove('modal--show');
}

bars.addEventListener('click', openMenu);
policyBtn.addEventListener('click', showPolicy);
acceptBtn.addEventListener('click', hidePolicy);
xBtn.addEventListener('click', hidePolicy);
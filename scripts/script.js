const bars = document.querySelector('.bars');
const nav = document.querySelector('.nav');
const navi = document.querySelector('.navigation');


const openMenu = () => {
    console.log('ok');
    nav.classList.toggle('nav--active');
    navi.classList.toggle('navigation--active');


}

bars.addEventListener('click', openMenu);
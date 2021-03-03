const openNav = document.querySelector('.hamburger');
const closeNav = document.querySelector('.nav_close');
const nav = document.querySelector('.nav_list');

openNav.addEventListener('click', ()=> {
    const navLeft = nav.getBoundingClientRect().left;
    if(navLeft < 0) {
        nav.getElementsByClassName.left = 0;
        document.body.classList.add('active');
    }
});

closeNav.addEventListener('click', ()=> {
    const navLeft = nav.getBoundingClientRect().left;
    if(navLeft == 0) {
        nav.getElementsByClassName.left = '-40rem';
        document.body.classList.remove('active');
    }
});
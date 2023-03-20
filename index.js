const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80){
        header.classList.add('scrolled');
    } else if (scrollY <= 650) {
        header.classList.remove('scrolled');
    }
})
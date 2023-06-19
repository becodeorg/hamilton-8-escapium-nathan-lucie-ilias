const burger = document.getElementById('burger');
let menu = document.getElementById('nav_links');
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})

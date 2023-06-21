
function nav() {
    const burger = document.getElementById('burger');
    let menu = document.getElementById('nav_links');
    console.log("nav js");
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
    let links = document.getElementsByClassName('links_menu');

    for (let link of links) {
        link.addEventListener('click', () => {
            for (let linkcolorbase of links) {
                linkcolorbase.style.color = '#CBCBCB';
            }
            link.style.color = 'white';
            for (let lignered of links) {
                lignered.nextElementSibling.style.opacity = '0'
            }
            link.nextElementSibling.style.opacity = '1'
        });
    }
}

export {nav};







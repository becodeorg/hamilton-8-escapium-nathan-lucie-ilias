import {nav} from "./topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("topNav.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);

    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}

//carousel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel_container_fifth");
    const left = document.getElementById("arrow_left_fifth");
    const right = document.getElementById("arrow_right_fifth");
  
    left.addEventListener("click", showPreviousSlideTestimonials);
    right.addEventListener("click", showNextSlideTestimonials);
  
    function showPreviousSlideTestimonials() {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth"
      });
    }
    function showNextSlideTestimonials() {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth"
      });
    }
  });
  
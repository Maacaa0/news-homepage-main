const btn = document.querySelector(".menu_btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const body = document.querySelector("body")

btn.addEventListener("click", function() {
        overlay.classList.toggle("opacity");
        menu.classList.toggle("visibility-left");
        btn.classList.toggle("btn-x-toggle");
})

overlay.addEventListener("click", function() {
    overlay.classList.remove("opacity");
    menu.classList.remove("visibility-left");
    btn.classList.remove("btn-x-toggle");
})

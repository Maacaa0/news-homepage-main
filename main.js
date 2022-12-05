const openMenuBtn = document.querySelector(".menu_btn");
const closeMenuBtn = document.querySelector(".menu_close_btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".mobile_menu");
const body = document.querySelector("body")

openMenuBtn.addEventListener("click", function() {
        overlay.style.zIndex = "2";
        overlay.style.opacity = ".5";
        menu.style.left = "40vw";
})

closeMenuBtn.addEventListener("click", function() {
        overlay.style.zIndex = "-10";
        overlay.style.opacity = "0";
        menu.style.left = "100%";
})

overlay.addEventListener("click", function() {
        overlay.style.zIndex = "-10";
        overlay.style.opacity = "0";
        menu.style.left = "100%";
})

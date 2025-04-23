document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("loading-screen-id").style.animation = "loaded-animation 1s ease forwards";
    document.getElementById("loading-screen-id").style.animationDelay = ".2s";
}, false);

let menuButton = document.getElementById("floating-menu-btn");
let menuScreen = document.getElementById("floating-screen-id");
let isShow = false;
menuButton.addEventListener("click", () => {
    if (isShow)
    {
        menuScreen.style.animation = "menu-screen-to-hide .4s ease forwards";
        isShow = false;
    }
    else
    {
        menuScreen.style.animation = "menu-transition-to-screen .4s ease forwards";
        isShow = true;
    }
});
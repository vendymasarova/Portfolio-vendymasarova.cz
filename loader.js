const loader = document.querySelector(".preload");
const main = document.querySelector(".main");

function preloader() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.classList.add("main-active");
  }, 3000);
}

preloader();

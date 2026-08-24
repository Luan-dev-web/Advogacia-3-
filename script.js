const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".links-menu");
const header = document.querySelector("header");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("ativo");
    header.classList.toggle("menu-aberto");

});


links.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("ativo");
        header.classList.remove("menu-aberto");

    });

});
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".links-menu");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("ativo");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("ativo");
    });
});
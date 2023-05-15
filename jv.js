    const menuHamburguer = document.querySelector(".hamburger-menu");

    const menu = document.querySelector(".menu");

    menuHamburguer.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
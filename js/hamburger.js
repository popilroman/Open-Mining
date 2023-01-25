// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {
        
        const menuHamburger = document.querySelector(".menu__hamburger");
        const menu = this.document.querySelector(".menu");
        const menuSpan = this.document.querySelector(".menu__span");

        menuHamburger.addEventListener("click", function() {
            menu.classList.toggle("menu_visible");   
            menuSpan.classList.toggle("menu__span-click"); 
        });


    });
});
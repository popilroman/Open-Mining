// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {
        
        var menuHamburger = document.querySelector(".menu__hamburger");
        var menu = this.document.querySelector(".menu");
        var menuSpan = this.document.querySelector(".menu__span");

        menuHamburger.addEventListener("click", function() {
            menu.classList.toggle("menu_visible");   
            menuSpan.classList.toggle("menu__span-click"); 
        });


    });
});
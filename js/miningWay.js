// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        const btnPoint = document.querySelector(".btn__point");
        const defaultMining = this.document.querySelector(".advantages__default");
        const cloudMining = this.document.querySelector(".advantages__cloud");

        btnPoint.addEventListener("click", function() {
            btnPoint.classList.toggle("btn__point_click");   

            if (btnPoint.classList.contains("btn__point_click")) {
                defaultMining.style.display="none"; 
                cloudMining.style.display="flex";  
            } else {
                defaultMining.style.display="flex";
                cloudMining.style.display="none"
            }
        });


    });
});
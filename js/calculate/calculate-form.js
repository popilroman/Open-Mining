// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        const rangeInputPower = document.getElementById("powerRange");
        const textInputPower = document.getElementById("powerText");
        const rangeInputPeriod = document.getElementById("periodRange");
        const textInputPeriod = document.getElementById("periodText");

        changeOnInputByRange(rangeInputPower, textInputPower );
        changeOnInputByRange(rangeInputPeriod, textInputPeriod);


        function changeOnInputByRange(range, text) {
            // Текстовое поле берет начальное значение ползунка
            text.value = range.value;
            //Функция, которая меняет значение текстового поля при изменении ползунка 
            range.oninput = function() {
                // Текстовое поле берет значение ползунка
                text.value = this.value;
            };
        };


        const currencySelect = document.querySelector(".calculate__form-currency-list");
        const currencyArrow = document.querySelector(".select__wrapper_img");

        // Функция, которая при клике на переменную добавляет и удаляет класс
        currencySelect.addEventListener("click", function(){
            currencyArrow.classList.toggle("is-click");
        });

        var priceSpan = this.document.querySelector(".price");
        var serviceSpan = this.document.querySelector(".service");
        var paymentSpan = this.document.querySelector(".payment");
        const currencyComboBox = this.document.querySelector(".calculate__form-currency-list");
        var currencyTotalSpan = this.document.querySelector(".currency__total");
        var currencySpan = this.document.querySelector(".currency");

        currencyComboBox.addEventListener("click", function changeOnCurrency() {
            var value = currencyComboBox.options[currencyComboBox.selectedIndex].value;

            if (value === "Выберите валюту") {
                ;
            } else {
                currencyTotalSpan.innerHTML = value;
                currencySpan.innerHTML = value;
            }
        });





        var serviceDayPrice = 182.53;
        var powerDayPrice = 205.23;

        rangeInputPower.addEventListener("change", function calculateServicePrice() {
            var totalPrice = Math.trunc((serviceDayPrice * rangeInputPeriod.value) + (powerDayPrice * rangeInputPower.value));
            serviceSpan.innerHTML = totalPrice;
        });
        rangeInputPeriod.addEventListener("change", function calculateServicePrice() {
            var totalPrice = Math.trunc((serviceDayPrice * rangeInputPeriod.value) + (powerDayPrice * rangeInputPower.value));
            serviceSpan.innerHTML = totalPrice;
        });
        
        



     });
});
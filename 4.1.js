'use strict';
        let number = {
            units: null,
            tens: null,
            hundreds: null
        };

        function NumberToObject(EnterNumber) {
            number.units = EnterNumber % 10;
            number.tens = parseInt((EnterNumber / 10) % 10);
            number.hundreds = parseInt((EnterNumber / 100) % 10);
            console.log(number);
        }
         function CheckData(EnterNumber) {
            if (isNaN(EnterNumber) || (EnterNumber == null) || (EnterNumber == "")) {
                alert("Вы ввели не число");
                console.log(number);
            } else if ((EnterNumber < 0) || (EnterNumber > 999)) {
                alert("Вы ввели число вне диапазона от 0 до 999");
                console.log(number);
            } else if (!Number.isInteger(Number(EnterNumber))) {
                alert("Вы ввели не целое число");
                console.log(number);
            } else {
                NumberToObject(EnterNumber);
            }
        }
        let EnterNumber = prompt("Введите целое число в диапазоне от 0 до 999");
        CheckData(EnterNumber);

        
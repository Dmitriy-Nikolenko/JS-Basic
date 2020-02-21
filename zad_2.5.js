'use strict'
let arg1 = parseInt(Math.random()*100);
let arg2 = parseInt(Math.random()*100);
let operation = prompt("Введите одну из операций: сложение, вычитание, умножение, деление");
/**
 * Функция возвращает разность чисел
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns разность чисел
 */
function difference(arg1,arg2) {
    return arg1 - arg2;}
    /**
     * Функция возвращает сумму чисел
     * @param {number} arg1 
     * @param {number} arg2 
     * @returns сумма чисел
     */
function summ(arg1,arg2) {
    return arg1 + arg2;
}  
/**
 * Функция возвращает резултат умножения чисел
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns произведение чисел
 */  
function multiplication(arg1,arg2) {
    return arg1 * arg2;
}
/**
 * Функция возвращает резултат деления чисел
 * @param {number} arg1 
 * @param {number} arg2 
 * @returns деление чисел
 */
function division (arg1,arg2) {
    return arg1 / arg2;
}
/**
 * Функция возвращает значение той операции которую выбрал пользователь
 * @param {number} arg1 первое число для подсчета
 * @param {number} arg2 второе число для подсчета
 * @param {string} operation операция которую ввел пользователь
 * @returns значение операции которую запросил пользователь
 */
function mathOperation (arg1, arg2, operation) {    
    switch(operation.toLowerCase()) {
    case "сложение":
        return alert("Сумма чисел " + arg1 + " и " + arg2 + " равна "  + summ(arg1,arg2));        
    case "вычитание":
        return alert("Разность чисел " + arg1 + " и " + arg2 + " равна " + difference(arg1,arg2));       
    case "умножение":
        return alert("Произведение чисел " + arg1 + " и " + arg2 + " равно "  + multiplication(arg1,arg2));        
    case "деление":
        return alert("Результат деления чисел " + arg1 + " и " + arg2 + " равен "  + division(arg1, arg2).toFixed(2));        
    default:
        return alert("Я такой операции не знаю");
         }   
}
mathOperation(arg1, arg2, operation);


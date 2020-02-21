'use strict'
let num1 = parseInt((Math.random()*100)); 
let num2 = parseInt((Math.random()*100)); 
/**
 * Функция возвращает разность чисел
 * @param {number} num1 
 * @param {number} num2 
 * @returns разность чисел
 */
function difference(num1,num2) {
    return num1 - num2;}
    /**
     * Функция возвращает сумму чисел
     * @param {number} num1 
     * @param {number} num2 
     * @returns сумма чисел
     */
function summ(num1,num2) {
    return num1 + num2;
}  
/**
 * Функция возвращает резултат умножения чисел
 * @param {number} num1 
 * @param {number} num2 
 * @returns произведение чисел
 */  
function multiplication(num1,num2) {
    return num1 * num2;
}
/**
 * Функция возвращает резултат деления чисел
 * @param {number} num1 
 * @param {number} num2 
 * @returns деление чисел
 */
function division (num1,num2) {
    return num1 / num2;
}
alert("Сумма чисел " + num1 + " и " + num2 + " равна "  + summ(num1,num2));
alert("Разность чисел " + num1 + " и " + num2 + " равна " + difference(num1,num2));
alert("Произведение чисел " + num1 + " и " + num2 + " равно "  + multiplication(num1,num2));
alert("Результат деления чисел " + num1 + " и " + num2 + " равен "  + division(num1, num2).toFixed(2));



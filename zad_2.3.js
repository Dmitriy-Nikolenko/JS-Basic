'use strict'
let a = parseInt((((Math.random() - 0.5)*2)*100)); //случайное число разных знаков
let b = parseInt((((Math.random() - 0.5)*2)*100)); //случайное число разных знаков
/**
 * Функция считает разность чисел
 * @param {number} a 
 * @param {number} b 
 * @returns разность чисел
 */
function difference(a,b) {
    return a - b;
}
    /**
     * Функция считает сумму чисел
     * @param {number} a 
     * @param {number} b 
     * @returns сумма чисел
     */
function summ(a,b) {
    return a + b;
}  
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns произведение чисел
 */  
function multiplication(a,b) {
    return a * b;
}
if ((a >= 0) && (b >= 0)) {
    alert("Разность положительных чисел " + a + " и " + b + " равна " + difference(a,b));
}
if ((a < 0) && (b < 0)) {
    alert("Произведение отрицательных чисел " + a + " и " + b + " равно "  + multiplication(a,b));
}
if (Math.sign(a) != Math.sign(b)) {
    alert("Сумма чисел разных знаков " + a + " и " + b + " равна "  + summ(a,b));
}

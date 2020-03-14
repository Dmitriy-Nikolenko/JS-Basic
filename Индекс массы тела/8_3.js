'use strict'
let allDiv = document.querySelector('.error')
let age = document.querySelector('.age__input');
let ageDiv = document.querySelector('.age')
let height = document.querySelector('.height__input');
let heightDiv = document.querySelector('.height')
let weight = document.querySelector('.weight__input');
let weightDiv = document.querySelector('.weight')
let total = document.querySelector('.total');
let button = document.querySelector('.button');
let textEl = document.querySelector('.total__text');
let inputEl = document.querySelector('.total__input')
total.classList.add('hide');

/**
 * При нажатии кнопки считаем Индекс Массы Тела
 */
button.addEventListener('click', function(){
    if((ageNumFun()) && (heightNumFun()) && (weightNumFun())) {
       total.classList.remove('hide');
      
       inputEl.value = (weightNumFun()/heightNumFun()).toFixed(1);
  }
   
   
})
/**
 * Функция скрывает сообщения о неправильном вводе
 */
function hideText (){
    let element = document.querySelector('.error');
    if(element) {
        element.classList.add('hide');
      }   
}
/**
 * Функция проверяет правильно ли введен возраст и возвращает его
 */
function ageNumFun () {
    hideText ();
    let ageNum = age.value;
    if(isNaN(ageNum) || (ageNum <= 0) || (ageNum > 120)) {
       ageDiv.insertAdjacentHTML('afterend', `<p class ="error">Введите корректный возраст</p>`);
       
     } else {
         return ageNum;
     }
    
} 
/**
 * Функция проверяет правильно ли введен рост и возвращает рост в метрах в квадрате
 */
function heightNumFun() {
    hideText ();
    let heightNum = height.value;
    if(isNaN(heightNum) || (heightNum <= 50) || (heightNum >= 250)) {
    heightDiv.insertAdjacentHTML('afterend', `<p class ="error">Введите корректный рост в сантиметрах</p>`);
    
     } else {
         return Math.pow((heightNum / 100), 2);
     }
    
}
/**
 * Функция проверяет правильно ли введен вес и возвращает его
 */
 function weightNumFun () {
    hideText ();
    let weightNum = weight.value;
    if(isNaN(weightNum) || (weightNum <= 5) || (weightNum > 500)) {
    weightDiv.insertAdjacentHTML('afterend', `<p class ="error">Введите корректный вес в килограммах</p>`);
    
     } else {
         return weightNum
     }
    

 }
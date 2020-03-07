'use strict';
let divEl = document.querySelector('.container');
let loadEl = document.querySelector('.fas');
let arrRight = document.querySelector('.fa-arrow-alt-circle-right');
let arrLeft = document.querySelector('.fa-arrow-alt-circle-left');
let divImage = document.querySelectorAll('.image');
let imageEl = document.querySelectorAll('img');
let count = 0;
/**
 * Функция скрывает все картинки
 */
function clearAllImg() {
  imageEl.forEach(function (image) {
    image.classList.add('hidden')
      })
} 
/**
 * Функция скрывает поочередно слайды при нажатии правой кнопки
 */
 function rightButton () {
   if (count == imageEl.length-1) {
     count = 0;
   } else {
     count++;
   }
   divImage[count].classList.add('swing-right-fwd');
   imageEl[count].classList.remove('hidden'); 
   setTimeout(function(){
     divImage[count].classList.remove('swing-right-fwd');
   }, 150);
    
 }
 /**
  * Функция скрывает поочередно слайды при нажатии левой кнопки
  */
 function leftButton () {
  if (count == 0) {
    count = imageEl.length-1;
  } else {
    count--;
  }
  divImage[count].classList.add('swing-left-fwd');
  imageEl[count].classList.remove('hidden'); 
  setTimeout(function(){
    divImage[count].classList.remove('swing-left-fwd');
  }, 150);
  
 
 }
 window.addEventListener('load', function(){
   loadEl.classList.add('hidden');
 });

 arrRight.addEventListener('click', function(){
   clearAllImg();
   rightButton();
  
     
 });

 arrLeft.addEventListener('click', function(){
  clearAllImg();
 leftButton();
});



 
     
  


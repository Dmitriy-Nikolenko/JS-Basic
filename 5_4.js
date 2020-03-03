'use strict';
let product = document.getElementsByClassName('product');
let lor = "Lorem text Lorem text Lorem textLorem textLorem textLorem textLorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem textLorem textLorem textLorem textLorem text Lorem text Lorem text Lorem text Lorem text";
for (let i = 0; i < product.length; i++) {  
let prName = product[i].querySelector('.productName')      
let butEl = product[i].querySelector('button')             
let imgEl = product[i].querySelector('img');
butEl.addEventListener ('click', function(){  
if ( butEl.innerHTML == "Подробнее") {
    butEl.innerHTML = "Отмена"; } 
    else { butEl.innerHTML = "Подробнее"};
if (imgEl.style.display == 'none')   {
    imgEl.style.display = 'block'}
    else {imgEl.style.display = 'none'};
    let desc = product[i].querySelector('.desc');
    if(desc == null) {
        prName.insertAdjacentHTML('afterend', `<div class = "desc">${lor}</div>`); }
    else { product[i].querySelector('.desc').remove(); }   
 })  
}
'use strict'
let prodEl = document.querySelectorAll('.product');
let cartEl = document.querySelector('.cart');
let butEl = document.querySelectorAll('.product_button');
let prodNameEl = document.querySelectorAll('.product_name')
let cartBut = document.querySelector('.cart_button');
let cartTab = document.querySelector('.cart_table');
let productIdPriceName = {};
let count;
/**
 * Функция добавляет элемент в корзину, если такой id уже есть просто увеличиваем количество
 * @param {Number} id 
 */
function addProduct (id){
    let tabEl = document.querySelector(`.${productIdPriceName[id].name}`);
    if(tabEl) {
    tabEl.textContent++;        
     }  else {
        let productCart = `  
        <tr> 
        <td>${productIdPriceName[id].id}</td>
        <td >${productIdPriceName[id].name}</td>
        <td class = "${productIdPriceName[id].name}">${productIdPriceName[id].count}</td>
        <td>${productIdPriceName[id].price}</td>
       </tr>
        `; 
        let tbodyEl = document.querySelector('tbody');
        tbodyEl.insertAdjacentHTML ("beforeend", productCart);
     };
}
/**
 * Функция считает сумму элементов в корзине
 */
function summProduct(){
    let sumEl = document.querySelector('.summ');
    sumEl.textContent = 0;
    for (let key in productIdPriceName) {
        sumEl.textContent = productIdPriceName[key].price * productIdPriceName[key].count + Number(sumEl.textContent);
            }
            return sumEl.textContent;
}
butEl.forEach(function(but) {
    but.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        if((productIdPriceName[id] == undefined) ) {
            productIdPriceName[id] = {id: id, price:  price, name: name, count: 1}
        } else {
            productIdPriceName[id].count++;
        }
        addProduct(id);
        summProduct(); 
    })
});
cartBut.addEventListener('click', function(){
    if(cartTab.classList.contains('cart_table')) {
        cartTab.classList.remove('cart_table');
    } else {
        cartTab.classList.add('cart_table');
    }
   
})




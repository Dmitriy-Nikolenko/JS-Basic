'use strict'
let prodEl = document.querySelectorAll('.product');
let cartEl = document.querySelector('.cart');
let butEl = document.querySelectorAll('.product_button');
let prodNameEl = document.querySelectorAll('.product_name')
let cartBut = document.querySelector('.cart_button');
let cartTab = document.querySelector('.cart_table');
let productIdPriceName = {};
let count;

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
        cart.addProduct(id); 
        cart.summProduct();       
        cart.delCart ();       
        })

  
   

});
cartBut.addEventListener('click', function(){
    if(cartTab.classList.contains('cart_table')) {
        cartTab.classList.remove('cart_table');
    } else {
        cartTab.classList.add('cart_table');
    }

})
 let cart = {
/**
 * Метод добавляет элемент в корзину
 * @param {number} id 
 */
    addProduct(id) {
        let tabEl = document.querySelector(`.${productIdPriceName[id].name}`);
        if(tabEl) {
        tabEl.textContent++;        
         }  else {
            let productCart = `  
            <tr> 
            <td>${productIdPriceName[id].id}</td>
            <td >${productIdPriceName[id].name}</td>
            <td class = "prodCount ${productIdPriceName[id].name}" data-id = "${productIdPriceName[id].id}">${productIdPriceName[id].count}</td>
            <td>${productIdPriceName[id].price}</td>
            <td class = "button_del"><i class="far fa-trash-alt" data-id = "${productIdPriceName[id].id}"></i></td>
           </tr>
            `; 
            let tbodyEl = document.querySelector('tbody');
            tbodyEl.insertAdjacentHTML ("beforeend", productCart);       
         };
    },
    /**
     * Метод считает сумму элементов в корзине
     */
    summProduct() {
        let sumEl = document.querySelector('.summ');
        sumEl.textContent = 0;
        for (let key in productIdPriceName) {
            sumEl.textContent = productIdPriceName[key].price * productIdPriceName[key].count + Number(sumEl.textContent);
                }
                return sumEl.textContent;
    },
    /**
     * Метод удаляет элемент в корзине по его id
     * @param {number} id 
     */
    deleteProdCart(id) {        
         let delProd = document.querySelector(`.prodCount[data-id="${id}"]`);                 
            if (delProd.textContent == 1){
                delProd.parentNode.remove()                           
            } else {  delProd.textContent--;
             }           
           },
    /**
     * Метод удаляет элемент массива из объекта
     * @param {} event 
     */         
    deleteProdObject (event) {  
        let id = event.srcElement.dataset.id;     
        if (productIdPriceName[id].count == 1) {
            delete productIdPriceName[id];
        } else {
            productIdPriceName[id].count--;
        }
        
        cart.deleteProdCart(id);
        cart.summProduct(); 
      },
      /**
       * Метод находит все иконки корзины и при нажатии на нее происходит событие удаление элемента
       */
    delCart () {
        let id = event.srcElement.dataset.id;
        let iEl = document.querySelectorAll('.far')         
            for (let i = 0; i < iEl.length; i++) {
                iEl[i].addEventListener('click', this.deleteProdObject)       
            }         
           }    

 }

 

 




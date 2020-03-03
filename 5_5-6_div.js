'use strict';
/**
 * Функция создает шахматную доску и расставляет нп ней фигуры
 */
function chess(){
    let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let number = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let chessBoard = document.querySelector('.chess');
    let board;
    let change = true;
    //Создание шахматного поля, и расскраска полей
    for(let i = 0; i < 10; i++) {
       for(let j = 0; j < 10; j++) {                    
          if (j == 0) {
             change = !change
            }
            board = document.createElement('div');
           if(change && (i != 0) && (j != 0) && (i != 9) && (j != 9)) {
               board.className = ' block black';
                 }                         
                 else {
                     board.className = 'block white';
                   }
            chessBoard.appendChild(board);
          change = !change;
        }
    } 
    //Проставляем наименование шахматных строк и столбцов
    let chessSimvol = chessBoard.querySelectorAll('div');
    for(let i = 0; i < 8; i++) {                
            chessSimvol[i+1].innerText = letters[i];              
    }
    for(let i = 91; i < (chessSimvol.length - 1); i++) {                
            chessSimvol[i].innerText = letters[i-91];              
    } 
    let j = 0; 
    for (let i = 0; i <= 80; i++) {
        if (((i % 10) == 0) && (i != 0)) {                                     
            chessSimvol[i].innerText = number[j];   
            j = j + 1;                 
        }
    }
        j = 0; 
        for (let i = 0; i <= 89; i++) {
        if (((i % 10) == 9) && (i != 9)) {                                     
            chessSimvol[i].innerText = number[j];   
            j = j + 1;                 
        }  

   }
   // Расстановка шахматных фигур на доске
   for(let i = 21; i < 29; i++) {
          chessSimvol[i].innerHTML = '&#9823';
        }  
     for(let i = 71; i < 79; i++) {
          chessSimvol[i].innerHTML = '&#9817;';
        }  
        for(let i = 11; i < 19; i++) {
            if ((i == 11) || (i == 18)) {
                chessSimvol[i].innerHTML = '&#9820';
            }
            if ((i == 12) || (i == 17)) {
                chessSimvol[i].innerHTML = '&#9822';
            }
            if ((i == 13) || (i == 16)) {
                chessSimvol[i].innerHTML = '&#9821';
            }
            if (i == 14) {
                chessSimvol[i].innerHTML = '&#9819';
            }
            if (i == 15) {
                chessSimvol[i].innerHTML = '&#9818';
            }
        } 
        for(let i = 81; i < 89; i++) {
            if ((i == 81) || (i == 88)) {
                chessSimvol[i].innerHTML = '&#9814';
            }
            if ((i == 82) || (i == 87)) {
                chessSimvol[i].innerHTML = '&#9816';
            }
            if ((i == 83) || (i == 86)) {
                chessSimvol[i].innerHTML = '&#9815';
            }
            if (i == 84) {
                chessSimvol[i].innerHTML = '&#9813';
            }
            if (i == 85) {
                chessSimvol[i].innerHTML = '&#9812';
            }
        } 
}

chess();

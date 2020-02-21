'use strict'
let r = "рубль";
let r1 = "рублей";
let r2 = "рубля";
let vklad = +prompt("Введите сумму которую вы хотите положить на счет");
let last = vklad % 10;
let twoLast = vklad % 100;
/**
 * Функция смотрит последний знак числа и в зависимости от него возвращет падеж слову рубль
 */
function lastSymbol () 
{
    switch (last)
    {
      case 0: case 5: case 6: case 7: case 8: case 9:
        return alert("Ваша сумма в " + vklad + " " + r1 + " успешно зачислена"); 
        break;
      case 1:
        return alert("Ваша сумма в " + vklad + " " + r + " успешно зачислена"); 
        break;
      case 2: case 3: case 4:
        return alert("Ваша сумма в " + vklad + " " + r2 + " успешно зачислена"); 
        break; 
    }
 } 
/**
 * Функция смотрит последние два знака числа и в зависимости от него возвращет падеж слову рубль
 */
 function twoLastSymbol () 
 {
     switch (twoLast) 
     {
    case 11: case 12: case 13: case 14:
        return alert("Ваша сумма в " + vklad + " " + r1 + " успешно зачислена"); 
        break;    
     }
 }
 
if((isNaN(vklad)) || (vklad <= 0) ) 
  {
    alert("Вы некорректно  ввели сумму");
  }
    else
((twoLast != 11) && (twoLast != 12) && (twoLast != 13) && (twoLast != 14)) ? lastSymbol (): twoLastSymbol ()




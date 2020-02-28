'use sctrict';
function ask_questions() {
    let otvet = [];
    let count = 0;
    for (let i = 0; i < questionAnswer.length; i++) {
        otvet[i] = prompt ("Вопрос номер " + (i+1) + " выберете правильный ответ" +"\n" +"\n" + questionAnswer[i].question + '\n' + questionAnswer[i].answers + "\n" + "\n" + "Для выхода из игры нажмите Отмена");
        if (otvet[i] == null) {
            alert("Игра остановлена по вашему желанию");
            break;
        } else if (otvet[i].toLowerCase == correctAnswer[i].toLowerCase) {
            alert("Поздравляю вы правильно ответили на вопрос");
            count++; 
        } else {
            alert("Вы не правильно ответили на вопрос");
        }                              
          }
          alert ("Количество правильных ответов " + count);
          if(confirm("Хотите еще раз сыграть?")) {
            ask_questions();   
          }
     }
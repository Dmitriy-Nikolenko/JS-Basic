class Game {
    constructor() {
       
    } 
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        board.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    }
 
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!clickCorrect.isCorrectClick(event)) {
            return;
        }
       // Заполняем ячейку.
       cell.fillCell(event);
       // Если кто-то выиграл, заходим в if.
       if (winLoss.hasWon()) {
           // Ставим статус в "остановлено".
           status.setStatusStopped();
           // Сообщаем о победе пользователя.
           phase.sayWonPhrase();
       }  
       
        // Меняем фигуру (крестик или нолик).
        phase.togglePhase();
    }
 
}
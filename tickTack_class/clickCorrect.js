class ClickCorrect {
    constructor() {

    }
    isCorrectClick(event) {
        return status.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    }
    
    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }  
    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return winLoss.mapValues[row][col] === '';
    }
}
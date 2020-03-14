class Cell {
    constructor() {

    }        
    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        winLoss.mapValues[row][col] = phase.phase;
        event.target.textContent = phase.phase;
    }
}
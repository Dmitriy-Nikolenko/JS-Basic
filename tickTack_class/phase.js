class Phase {
    constructor () {
        this.phase = 'X'
    }
    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    } 
}
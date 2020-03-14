class Status {
    constructor() {
        this.status = 'playing';
    }
    isStatusPlaying() {
        return this.status === 'playing';
    }
    setStatusStopped() {
        this.status = 'stopped';
    }
}
class Clock {
    constructor() {
        this.date = new Date();
        this.canvas = document.getElementById("analog_clock");
    }

    draw() {
        var ctx = this.canvas.getContext("2d");
    }
}
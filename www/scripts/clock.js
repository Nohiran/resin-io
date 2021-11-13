export class Clock {
    constructor() {
        this.hour = document.getElementById("analog_clock_hour");
        this.min = document.getElementById("analog_clock_min");
    }

    draw(date) {
        let hour = date.getHours();
        let min = date.getMinutes();
        let hour_deg = hour / 12.0 * 360.0 - 90.0 + min / 60.0 * 360 / 12;
        let min_deg = min / 60.0 * 360 - 90;
        this.hour.style.transform = "rotate(" + String(hour_deg) + "deg)";
        this.min.style.transform = "rotate(" + String(min_deg) + "deg)";
    }
}
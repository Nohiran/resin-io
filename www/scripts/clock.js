export class Clock {
    constructor() {
        this.frame = document.getElementById("analog_clock_frame");
        this.hour = document.getElementById("analog_clock_hour");
        this.min = document.getElementById("analog_clock_min");
        this.diff0 = document.getElementById("analog_clock_diff0");
        this.diff1 = document.getElementById("analog_clock_diff1");
        this.digital_clock = document.getElementById("digital_clock");
    }

    draw(date) {
        this.analog_draw(date);
        this.digital_draw(date);
    }

    analog_draw(date) {
        let now_date = new Date();
        let now_hour_deg = now_date.getHours() * 30.0 + now_date.getMinutes() * 0.5;

        let min = date.getMinutes();
        let hour = date.getHours();
        let min_deg = min * 6.0;
        let hour_deg = hour * 30.0 + min_deg / 12.0;
        let diff_deg = (hour_deg - now_hour_deg) % 360.0;
        this.diff0.style.backgroundImage =
            "conic-gradient("
            + "from " + String(now_hour_deg) + "deg,"
            + "black 0deg,"
            + "white " + String(diff_deg) + "deg,"
            + "black " + String(diff_deg) + "deg,"
            + "black 360deg)";
        console.log(this.diff0.style.backgroundImage);

        this.hour.style.transform = "rotate(" + String(hour_deg - 90) + "deg)";
        this.min.style.transform = "rotate(" + String(min_deg - 90) + "deg)";
    }

    digital_draw(date) {
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");
        this.digital_clock.textContent = hour + ":" + min;
    }
}
export class Clock {
    constructor() {
        this.frame = document.getElementById("analog_clock_frame");
        this.hour = document.getElementById("analog_clock_hour");
        this.min = document.getElementById("analog_clock_min");
        // this.diff = document.getElementById("time_difference");
        // let style = window.getComputedStyle(this.frame);
        // this.width = parseFloat(style.width);
        // this.height = parseFloat(style.height);
        // this.diff.width = parseFloat(this.width);
        // this.diff.height = parseFloat(this.height);
        this.digital_clock = document.getElementById("digital_clock");
    }

    draw(date) {
        this.analog_draw(date);
        this.time_difference_draw(date);
        this.digital_draw(date);
    }

    analog_draw(date) {
        let hour = date.getHours();
        let min = date.getMinutes();
        let hour_deg = hour / 12.0 * 360.0 - 90.0 + min / 60.0 * 360 / 12;
        let min_deg = min / 60.0 * 360 - 90;
        this.hour.style.transform = "rotate(" + String(hour_deg) + "deg)";
        this.min.style.transform = "rotate(" + String(min_deg) + "deg)";
    }

    time_difference_draw(date) {
        // if (this.diff.getContext) {
        //     var ctx = this.diff.getContext("2d");
        //     let radius = this.width / 2.0;
        //     ctx.beginPath();
        //     ctx.arc(this.width / 2.0, this.height / 2.0, radius, 0, Math.PI);
        //     ctx.stroke();
        //     ctx.closePath();
        // }
    }

    digital_draw(date) {
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");
        this.digital_clock.textContent = hour + ":" + min;
    }
}
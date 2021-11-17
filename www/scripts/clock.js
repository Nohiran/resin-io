export class Clock {
    constructor() {
        this.frame = document.getElementById("analog_clock_frame");
        this.hour = document.getElementById("analog_clock_hour");
        this.min = document.getElementById("analog_clock_min");
        this.outer_diff = document.getElementById("analog_clock_outer_diff");
        this.inner_diff = document.getElementById("analog_clock_inner_diff");
        this.digital_clock = document.getElementById("digital_clock");
    }

    draw(clock_bundle) {
        this.hour.style.transform = clock_bundle.filling_analog_hour_string();
        this.min.style.transform = clock_bundle.filling_analog_min_string();
        this.digital_clock.textContent = clock_bundle.digital_clock_string();
        this.outer_diff.style.backgroundImage = clock_bundle.outer_conic_gradient();
        this.inner_diff.style.backgroundImage = clock_bundle.inner_conic_gradient();
    }

    analog_draw(clock_bundle) {
        let now_date = new Date();
        let now_hour_deg = now_date.getHours() * 30.0 + now_date.getMinutes() * 0.5;

        let min = date.getMinutes();
        let hour = date.getHours();
        let min_deg = min * 6.0;
        let hour_deg = hour * 30.0 + min_deg / 12.0;
        let diff_deg = (hour_deg - now_hour_deg) % 360.0;
        this.outer_diff.style.backgroundImage = clock_bundle.

            this.hour.style.transform = "rotate(" + String(hour_deg - 90) + "deg)";
        this.min.style.transform = "rotate(" + String(min_deg - 90) + "deg)";
    }

    digital_draw(date) {
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");
        this.digital_clock.textContent = hour + ":" + min;
    }
}
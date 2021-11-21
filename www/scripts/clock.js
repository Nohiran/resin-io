export class Clock {
    constructor() {
        this.frame = document.getElementById("analog_clock_frame");
        this.hour = document.getElementById("analog_clock_hour");
        this.min = document.getElementById("analog_clock_min");
        this.outer_diff = document.getElementById("analog_clock_outer_diff");
        this.inner_diff = document.getElementById("analog_clock_inner_diff");
        this.digital_clock = document.getElementById("digital_clock");

        for (let i = 0; i < 12; i++) {
            let tick = document.createElement("div");
            tick.className = "analog_clock_tick";
            tick.style.transform = "rotate(" + String(i * 30) + "deg)";
            this.frame.appendChild(tick);
        }
    }

    draw(clock_bundle) {
        this.hour.style.transform = clock_bundle.filling_analog_hour_string();
        this.min.style.transform = clock_bundle.filling_analog_min_string();
        this.digital_clock.textContent = clock_bundle.digital_clock_string();
        this.outer_diff.style.backgroundImage = clock_bundle.outer_conic_gradient();
        this.inner_diff.style.backgroundImage = clock_bundle.inner_conic_gradient();
    }
}
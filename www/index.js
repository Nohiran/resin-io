import { ResinClock } from "resin-io-wasm";

const MAX_RESIN_COUNT = 160;

var body = document.body
const ViewMode = {
    Landscape: 0,
    Portrait: 1,
};
var view_mode = ViewMode.Portrait;
if (body.clientWidth > body.clientHeight) {
    view_mode = ViewMode.Landscape;
    body.style.flexDirection = "row-reverse";
}

var resin_scroll = document.getElementById("resin_scroll");
let resin_scroll_style = window.getComputedStyle(resin_scroll);
let resin_numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());
let resin_number_height = parseFloat(resin_scroll_style.height) / 3.0;
for (let i = 0; i < resin_numbers.length; i++) {
    var number = document.createElement("div");
    number.textContent = String(resin_numbers[i]);
    number.className = "resin_number";
    if (i == 0) {
        number.style.marginTop = String(resin_number_height) + "px";
    } else if (i == resin_numbers.length - 1) {
        number.style.marginBottom = String(resin_number_height) + "px";
    }
    resin_scroll.appendChild(number);
}

var scroll_timeout = null;
var resin_count = 0;
resin_scroll.addEventListener("scroll", on_resin_scroll, {capture: true});
var digital_clock = document.getElementById("digital_clock");
var rc = ResinClock.new(MAX_RESIN_COUNT, 8);

function on_resin_scroll(e) {
    let old_resin_count = resin_count;
    resin_count = Math.round(resin_scroll.scrollTop / resin_number_height);
    if (resin_count != old_resin_count) {
        resin_scroll.children[old_resin_count].style.color = null;
        resin_scroll.children[resin_count].style.color = "black";

        let date = rc.resin_to_clock(resin_count);
        let h = String(date.getHours()).padStart(2, "0");
        let m = String(date.getMinutes()).padStart(2, "0");
        digital_clock.textContent = h + ":" + m;
    }
}

var h = 0;
var m = 90;
var ch = document.getElementById("analog_clock_hour");
var cm = document.getElementById("analog_clock_min");
window.setInterval(function() {
    h += 1;
    ch.style.transform = "rotate(" + String(h - 90) + "deg)";
    m += 1;
    cm.style.transform = "rotate(" + String(m - h) + "deg)";
});
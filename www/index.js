import { Resin as ResinWasm } from "resin-io-wasm";
import { Clock } from "./scripts/clock.js";
import { MAX_RESIN_COUNT, Resin } from "./scripts/resin.js";
import { LANDSCAPE, view_port } from "./scripts/view_port";

if (view_port() == LANDSCAPE) {
    document.body.style.flexDirection = "row-reverse";
}
let body_color = window.getComputedStyle(document.body).getPropertyValue("--body-background");
console.log(body_color);
var resin = new Resin();
var clock = new Clock();

resin_scroll.addEventListener("scroll", on_resin_scroll, { capture: true });
var resin_wasm = ResinWasm.new(MAX_RESIN_COUNT, 8);
resin.scroll_to(80);
draw_update();

function on_resin_scroll(e) {
    if (resin.on_scroll()) {
        draw_update();
    }
}

function draw_update() {
    let clock_bundle = resin_wasm.clock_bundle(resin.count, body_color);
    clock.draw(clock_bundle);
}

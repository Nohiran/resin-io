import { Resin as ResinWasm } from "resin-io-wasm";
import { Clock } from "./scripts/clock.js";
import { MAX_RESIN_COUNT, Resin } from "./scripts/resin.js";
import { LANDSCAPE, view_port } from "./scripts/view_port";

if (view_port() == LANDSCAPE) {
    document.body.style.flexDirection = "row-reverse";
}
let body_style = window.getComputedStyle(document.body);
let body_color = body_style.getPropertyValue("--body-background");
let elem_color = body_style.getPropertyValue("--element-background");
let resin = new Resin();
let resin_wasm = ResinWasm.new(MAX_RESIN_COUNT, 8);
let clock = new Clock();

resin.scroll.addEventListener("scroll", on_resin_scroll, { capture: true });
draw_update();

window.onresize = function (e) {
    if (view_port() == LANDSCAPE) {
        document.body.style.flexDirection = "row-reverse";
    } else {
        document.body.style.flexDirection = null;
    }
    resin.recreate();
}

function on_resin_scroll(e) {
    if (resin.on_scroll()) {
        draw_update();
    }
}

function draw_update() {
    let clock_bundle = resin_wasm.clock_bundle(resin.count, body_color, elem_color);
    clock.draw(clock_bundle);
}

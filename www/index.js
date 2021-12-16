import { Resin as ResinWasm } from "resin-io-wasm";
import { Clock } from "./scripts/clock.js";
import { MAX_RESIN_COUNT, Resin } from "./scripts/resin.js";
import { LANDSCAPE, view_port } from "./scripts/view_port";

if (view_port() == LANDSCAPE) {
    document.body.style.flexDirection = "row";
}
let body_style = window.getComputedStyle(document.body);
let body_color = body_style.getPropertyValue("--body-background");
let elem_color = body_style.getPropertyValue("--element-background");
let resin_start = new Resin("start");
let resin_end = new Resin("end");
resin_end.scroll_to(MAX_RESIN_COUNT);
let resin_wasm = ResinWasm.new(MAX_RESIN_COUNT, 8);
let clock = new Clock();

resin_start.scroll.addEventListener("scroll", on_resin_scroll, { capture: true });
resin_end.scroll.addEventListener("scroll", on_resin_scroll, { capture: true });
draw_update();

window.onresize = function (e) {
    if (view_port() == LANDSCAPE) {
        document.body.style.flexDirection = "row";
    } else {
        document.body.style.flexDirection = null;
    }
    resin_start.recreate();
    resin_end.recreate();
}

function on_resin_scroll(e) {
    if (resin_start.on_scroll()) {
        draw_update();
    }
    if (resin_end.on_scroll()) {
        draw_update();
    }
}

function draw_update() {
    let clock_bundle = resin_wasm.clock_bundle(resin_start.count, resin_end.count, body_color, elem_color);
    clock.draw(clock_bundle);
}

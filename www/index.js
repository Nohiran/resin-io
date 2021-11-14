import { ResinClock } from "resin-io-wasm";
import { Clock } from "./scripts/clock.js";
import { MAX_RESIN_COUNT, Resin } from "./scripts/resin.js";
import { LANDSCAPE, view_port } from "./scripts/view_port";

if (view_port() == LANDSCAPE) {
    document.body.style.flexDirection = "row-reverse";
}
var resin = new Resin();
var clock = new Clock();

resin_scroll.addEventListener("scroll", on_resin_scroll, {capture: true});
var rc = ResinClock.new(MAX_RESIN_COUNT, 8);

function on_resin_scroll(e) {
    if (resin.on_scroll()) {
        let date = rc.resin_to_clock(resin.count);
        clock.draw(date);
    }
}

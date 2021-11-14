export const MAX_RESIN_COUNT = 160;
export class Resin {
    constructor() {
        this.resin_scroll = document.getElementById("resin_scroll");
        let resin_scroll_style = window.getComputedStyle(this.resin_scroll);
        this.resin_number_height = parseFloat(resin_scroll_style.height) / 3.0;
        let resin_numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());
        for (let i = 0; i < resin_numbers.length; i++) {
            var number = document.createElement("div");
            number.textContent = String(resin_numbers[i]);
            number.className = "resin_number";
            number.style.fontSize = String(this.resin_number_height * 0.8) + "px"
;            if (i == 0) {
                number.style.marginTop = String(this.resin_number_height) + "px";
            } else if (i == resin_numbers.length - 1) {
                number.style.marginBottom = String(this.resin_number_height) + "px";
            }
            this.resin_scroll.appendChild(number);
        }

        this.count = 80;
    }

    on_scroll() {
        let old_resin_count = this.count;
        let new_count = Math.round(this.resin_scroll.scrollTop / this.resin_number_height);
        this.count = Math.max(Math.min(MAX_RESIN_COUNT, new_count), 0);
        if (this.count != old_resin_count) {
            this.resin_scroll.children[old_resin_count].style.color = null;
            this.resin_scroll.children[this.count].style.color = "black";
            return true;
        }
    }
}
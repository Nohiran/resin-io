export const MAX_RESIN_COUNT = 160;
export class Resin {
    constructor(id) {
        this.new(id);
    }

    new(id) {
        this.id = id;
        this.scroll = document.getElementById("resin_scroll_" + id);
        let scroll_style = window.getComputedStyle(this.scroll);
        this.number_height = parseFloat(scroll_style.height) / 3.0;
        let numbers = Array.from(Array(MAX_RESIN_COUNT + 1).keys());
        for (let i = 0; i < numbers.length; i++) {
            var number = document.createElement("div");
            number.textContent = String(numbers[i]);
            number.className = "resin_number";
            number.style.fontSize = String(this.number_height * 0.8) + "px"
                ; if (i == 0) {
                    number.style.marginTop = String(this.number_height) + "px";
                } else if (i == numbers.length - 1) {
                    number.style.marginBottom = String(this.number_height) + "px";
                }
            this.scroll.appendChild(number);
        }

        this.count = 0;
        this.scroll_to(0);
    }

    recreate() {
        let old_count = this.count;
        while (this.scroll.firstChild) {
            this.scroll.removeChild(this.scroll.firstChild);
        }

        this.new(this.id);
        this.scroll_to(old_count);
    }

    on_scroll() {
        let old_resin_count = this.count;
        let new_count = Math.round(this.scroll.scrollTop / this.number_height);
        this.count = Math.max(Math.min(MAX_RESIN_COUNT, new_count), 0);
        if (this.count != old_resin_count) {
            this.scroll.children[old_resin_count].className = "resin_number";
            this.scroll.children[this.count].className = "selected_resin_number";
            return true;
        }
    }

    scroll_to(count) {
        let old_count = this.count;
        this.count = Math.min(MAX_RESIN_COUNT, Math.max(0, Math.floor(count)));
        this.scroll.scrollTop = this.count * this.number_height;
        this.scroll.children[old_count].className = "resin_number";
        this.scroll.children[this.count].className = "selected_resin_number";
        this.count = count;
    }
}
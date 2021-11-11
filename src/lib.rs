mod utils;

use wasm_bindgen::prelude::*;
use chrono::prelude::*;
use chrono::Duration;
use js_sys::Date;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use web_sys;
// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub struct ResinClock {
    max_resin_count: u32,
    one_resin_restore_minutes: u32,
}

#[wasm_bindgen]
impl ResinClock {
    pub fn new(max_resin_count: u32, one_resin_restore_minutes: u32) -> Self {
        Self {
            max_resin_count,
            one_resin_restore_minutes,
        }
    }

    pub fn resin_to_clock(&self, resin_count: u32) -> Date {
        let restore_minutes = (self.max_resin_count - resin_count) * self.one_resin_restore_minutes;
        let mili_sec = Date::now();
        let current = NaiveDateTime::from_timestamp((mili_sec / 1000.0).floor() as _, 0);
        let filling_time = current + Duration::minutes(restore_minutes as _);
        let filling_date = Date::new_0();
        filling_date.set_time(filling_time.timestamp_millis() as f64);
        log!("filling: {}", filling_date.to_string());
        filling_date
    }

    pub fn clock_to_resin() -> u32 {
        0
    }
}

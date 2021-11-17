mod utils;

use chrono::prelude::*;
use chrono::Duration;
use js_sys::Date;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// use web_sys;
// // A macro to provide `println!(..)`-style syntax for `console.log` logging.
// macro_rules! log {
//     ( $( $t:tt )* ) => {
//         web_sys::console::log_1(&format!( $( $t )* ).into());
//     }
// }

#[wasm_bindgen]
pub struct Resin {
    max_resin_count: u32,
    one_resin_restore_minutes: u32,
}

#[wasm_bindgen]
pub struct ClockBundle {
    current_analog_hour_string: String,
    filling_analog_hour_string: String,
    filling_analog_min_string: String,
    digital_clock_string: String,
    outer_conic_gradient: String,
    inner_conic_gradient: String,
}

struct SimpleDate {
    hour: u32,
    min: u32,
}

#[wasm_bindgen]
impl Resin {
    pub fn new(max_resin_count: u32, one_resin_restore_minutes: u32) -> Self {
        Self {
            max_resin_count,
            one_resin_restore_minutes,
        }
    }

    pub fn clock_bundle(&self, resin_count: u32, color: &str) -> ClockBundle {
        let restore_minutes = (self.max_resin_count - resin_count) * self.one_resin_restore_minutes;
        let restore = Duration::minutes(restore_minutes as _);

        let current_naive = NaiveDateTime::from_timestamp((Date::now() / 1000.0).floor() as _, 0);
        let current_date = Date::new_0();
        current_date.set_time(current_naive.timestamp_millis() as f64);
        let current = SimpleDate::from(&current_date);

        let filling_naive = current_naive + restore;
        let filling_date = Date::new_0();
        filling_date.set_time(filling_naive.timestamp_millis() as f64);
        let filling = SimpleDate::from(&filling_date);

        let current_analog_hour_deg = current.to_hour_deg();
        let current_analog_hour_string = format!("rotate({}deg)", current_analog_hour_deg - 90.0);
        let filling_analog_hour_string = format!("rotate({}deg)", filling.to_hour_deg() - 90.0);
        let filling_analog_min_string = format!("rotate({}deg)", filling.to_min_deg() - 90.0);
        let digital_clock_string = format!("{:02}:{:02}", filling.hour, filling.min);

        let conic_init = format!(
            "conic-gradient(from {}deg, hsl(0, 100%, 50%) 0deg, ",
            current_analog_hour_deg
        );
        let mut outer_conic = conic_init.clone();
        let mut inner_conic = String::new();
        let restore_hour = restore.num_hours();
        for i in 1..=restore_hour.min(12) {
            outer_conic += &format!("hsl({}, 100%, 50%) {0}deg, ", i * 30);
        }
        let restore_deg = restore.num_minutes() as f64 * 0.5;
        if restore_deg > 360.0 {
            outer_conic += &format!("hsl({}, 100%, 50%) {0}deg)", 360);

            inner_conic = conic_init;
            for i in 1..=restore_hour - 12 {
                inner_conic += &format!("hsl({}, 100%, 50%) {0}deg, ", i * 30);
            }
            inner_conic += &format!(
                "hsl({}, 100%, 50%) {0}deg, {1} {0}deg)",
                restore_deg - 360.0,
                color,
            );
        } else {
            outer_conic += &format!("hsl({}, 100%, 50%) {0}deg, {1} {0}deg)", restore_deg, color);
        }

        ClockBundle {
            current_analog_hour_string,
            filling_analog_hour_string,
            filling_analog_min_string,
            digital_clock_string,
            outer_conic_gradient: outer_conic,
            inner_conic_gradient: inner_conic,
        }
    }
}

#[wasm_bindgen]
impl ClockBundle {
    pub fn current_analog_hour_string(&self) -> String {
        self.current_analog_hour_string.clone()
    }

    pub fn filling_analog_hour_string(&self) -> String {
        self.filling_analog_hour_string.clone()
    }

    pub fn filling_analog_min_string(&self) -> String {
        self.filling_analog_min_string.clone()
    }

    pub fn digital_clock_string(&self) -> String {
        self.digital_clock_string.clone()
    }

    pub fn outer_conic_gradient(&self) -> String {
        self.outer_conic_gradient.clone()
    }

    pub fn inner_conic_gradient(&self) -> String {
        self.inner_conic_gradient.clone()
    }
}

impl From<&'_ Date> for SimpleDate {
    fn from(date: &Date) -> Self {
        SimpleDate {
            hour: date.get_hours(),
            min: date.get_minutes(),
        }
    }
}

impl SimpleDate {
    fn to_hour_deg(&self) -> f64 {
        (self.hour as f64 * 30.0 + self.min as f64 * 0.5) % 360.0
    }

    fn to_min_deg(&self) -> f64 {
        self.min as f64 * 6.0
    }
}

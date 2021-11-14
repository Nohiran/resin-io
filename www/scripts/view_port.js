export const PORTRAIT = 0;
export const LANDSCAPE = 1;

export function view_port() {
    if (document.body.clientWidth > document.body.clientHeight) {
        return LANDSCAPE;
    } else {
        return PORTRAIT;
    }
}
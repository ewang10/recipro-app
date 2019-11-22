let timeoutId;
let _idleCallback = null;
let notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
let fiveMin = 5 * 60 * 1000;

const IdleService = {
    setIdleCallback(idleCallback) {
        _idleCallback = idleCallback;
    },
    resetIdleTimer() {
        /*will be called when user interacts with the page*/
        clearTimeout(timeoutId);
        timeoutId = setTimeout(_idleCallback, fiveMin);
    },
    registerIdleTimerResets() {
        /* register resetIdleTimer for every events when user interacts with the page */
        notIdleEvents.forEach(event =>
            document.addEventListener(event, IdleService.resetIdleTimer, true)
        );
    },
    unRegisterIdleResets() {
        /* remove any queued callbacks and events that will queue callbacks */
        clearTimeout(timeoutId);
        notIdleEvents.forEach(event =>
            document.removeEventListener(event, IdleService.resetIdleTimer, true)
        );
    }
}

export default IdleService;
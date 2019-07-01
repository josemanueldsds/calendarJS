let now = Date.now;
const INVALID_CALLBACK_EXCEPTION = "Callback is not a function";

export class ServiceTimer {

    constructor(intervalTime) {
        this._intervalTime = intervalTime;
        this.initIniterval();
    }

    initIniterval() {
        this._interval = null;
    }

    startTimer(callback) {
        if (typeof callback !== "function") {
            throw INVALID_CALLBACK_EXCEPTION;
        }
        this._interval = setInterval(() => {
            callback(this._buildDate(new Date(now())));
        }, this._intervalTime);
    }

    _buildDate(date) {
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return `${h}:${this._checkTime(m)}:${this._checkTime(s)}`;
    }

    _checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }

    dispose() {
        if (this._interval) {
            clearInterval(this._interval);
            this.initIniterval();
        }
    }

}


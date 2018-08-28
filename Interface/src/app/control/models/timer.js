
class ControlTimer {
    constructor() {
        this.active = true;
        this.minutes = 0;
        this.seconds = 0;
        this.counting = false;
    }

    getMinutes() {
        return this.minutes;
    }

    getSeconds() {
        return this.seconds;
    }

    getStatus() {
        return this.active;
    }

    getCounting() {
        return this.counting;
    }

    getTime() {
        return {
            minutes: this.minutes,
            seconds: this.seconds,
            formatted: `${this.formatTimeValue(this.minutes)}:${this.formatTimeValue(this.seconds)}`
        }
    }

    formatTimeValue(value) {
        if (value < 10) {
            return `0${value}`;
        } else {
            return `${value}`;
        }
    }

    setMinutes(minutes) {
        this.minutes = minutes;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    setStatus(status) {
        this.active = status;
    }

    setCounting(counting) {
        this.counting = counting;
    }

    getTimerObject() {
        return {
            status: this.active,
            counting: this.counting,
            minutes: this.minutes,
            seconds: this.seconds,
            formattedTime: `${this.formatTimeValue(this.minutes)}:${this.formatTimeValue(this.seconds)}`
        }

    }
}

export default ControlTimer;
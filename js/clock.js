class Clock {

    constructor(){
        if (this.constructor === Clock) {
            throw new Error("Clock is an abstract class");
        }
    }

    currentHour(){
        throw new Error("Clock is an abstract class");
    }
}

module.exports = {Clock}
const { Clock } = require("./clock");

class SystemClock extends Clock {
  currentHour () {
    const date = new Date()
    return date.getHours()
  }
}

class Greeter {
  constructor (clock) {
    this.clock = clock;
  }

  greet () {
    const currentHour = this.clock.currentHour()
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning'
    }
    if (currentHour >= 12 && currentHour <= 19) {
      return 'Good afternoon'
    }
    if (currentHour => 20 || currentHour < 6) {
      return 'Good night'
    }
  }
}

module.exports = { Greeter, SystemClock }

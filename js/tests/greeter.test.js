const test = require('tape');
const { Clock } = require('../clock');
const Greeter = require('../greeter').Greeter

class FakeClock extends Clock {
  hour;
  constructor(hour) {
    super();
    this.hour = hour;
  }

  currentHour() {
    return this.hour;
  }

  setHour(hour) {
    this.hour = hour;
  }
}

test('should say "good night" at midnight', (t) => {
  const clock = new FakeClock(0);
  const greeter = new Greeter(clock);
  t.equal(greeter.greet(), 'Good night');
  t.end()
})

test('should never return undefined', (t) => {
  const clock = new FakeClock(0);
  const greeter = new Greeter(clock);
  for (let i = 0; i < 24; i++) {
    clock.setHour(i);
    t.notEqual(greeter.greet(), undefined);
  }
  t.end()
})

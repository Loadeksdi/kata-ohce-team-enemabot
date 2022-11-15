const { SystemClock } = require('./greeter');
const { ConsoleInteractor } = require('./ui');

const Greeter = require('./greeter').Greeter
const UI = require('./ui').UI

const main = () => {
  const clock = new SystemClock();
  const greeter = new Greeter(clock);
  const greetings = greeter.greet();
  console.log(greetings);

  const interactor = new ConsoleInteractor();
  const ui = new UI(interactor);
  ui.mainLoop();
}

main();

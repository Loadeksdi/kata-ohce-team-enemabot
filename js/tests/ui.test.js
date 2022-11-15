const test = require('tape')
const { Interactor, AbstractUi } = require('../interactor')

class FakeInteractor extends Interactor{
  input;
  messages = [];

  constructor(){
    super();
  }

  readInput(input){
    this.input = input;
  }
  printMessage(message){
    this.messages.push(message);
  }
}

class FakeUI extends AbstractUi{

  constructor(interactor){
    super(interactor);
  }

  mainLoop(commands){
    commands.forEach(command => {
      if (!this.handleInputLogic(command)) {
        return;
      }
    });
  }
}

test('main loop', (t) => {
  const interactor = new FakeInteractor();
  const ui = new FakeUI(interactor);
  ui.mainLoop(['hello', 'oto', 'quit']);
  t.deepEqual(interactor.messages, ['olleh', 'oto', 'That was a palindrome!']);
  t.end()
})

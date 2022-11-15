const { Interactor, AbstractUi } = require('./interactor')

const prompt = require('prompt-sync')()

class ConsoleInteractor extends Interactor {

  readInput() {
    return prompt('');
  }

  printMessage(message) {
    console.log(message)
  }
}

class UI extends AbstractUi {
  constructor(interactor) {
    super(interactor);
  }

  mainLoop() {
    while (true) {
      const input = this.interactor.readInput();
      if (!this.handleInputLogic(input)) {
        break;
      }
    }
  }

}

module.exports = { UI, ConsoleInteractor }

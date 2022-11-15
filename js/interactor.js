const reverse = require('./ohce').reverse

class AbstractUi {

    constructor(interactor) {
        this.interactor = interactor;
    }

    mainLoop() {
        throw new Error('mainLoop() is an abstract method');
    }

    handleInputLogic(input) {
        if (input === 'quit') {
          return false;
        }
        const reversed = reverse(input)
        this.interactor.printMessage(reversed)
        if (input === reversed) {
          this.interactor.printMessage('That was a palindrome!')
        }
        return true;
    }
}

class Interactor {

    constructor() {
        if (this.constructor === Interactor) {
            throw new Error('Interactor is an abstract class');
        }
    }

    readInput() {
        throw new Error('Interactor is an abstract class');
    }
    printMessage(message) {
        throw new Error('Interactor is an abstract class');
    }
}

module.exports = { AbstractUi, Interactor };
const greeting = 'just hi.'

class Person {
  constructor() {
    this.name = 'Coolman'
  }

  sayHi() {
    console.log(`${greeting}`)
  }

  sayName() {
    console.log(`My name is ${this.name}`)
  }
}
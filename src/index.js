const greeting = 'just hi.'

const [methodSayHi, methodSayName] = ['sayHi', 'sayName']

class Person {
  constructor() {
    this.name = 'Coolman'
  }

  [methodSayHi]() {
    console.log(`${greeting}`)
  }

  [methodSayName]() {
    console.log(`My name is ${this.name}`)
  }
}

const man = new Person()
man.sayHi()
man[methodSayName]()
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

const arr = [1, 2, 3]

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (arr.includes(2)) {
      resolve(true)
    } else {
      reject()
    }
  }, 1000)
})

const asyncFunc = async function() {
  const answer = await promise.then(res => res)
  console.log(answer)
}
asyncFunc()
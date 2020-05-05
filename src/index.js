const greeting = 'just hi.'

const [methodSayHi, methodSayName] = ['sayHi', 'sayName']
class Person {
  constructor() {
    this.name = 'Cool Man'
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
      resolve('included')
    } else {
      reject('not included')
    }
  }, 1000)
})

const asyncFunc = async function() {
  const answer = await promise.then(res => res, err => err)
  console.log(answer)
}
asyncFunc()
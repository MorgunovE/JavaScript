// Interface segregation principle

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} can walk`)
//   }
//
//   swim() {
//     console.log(`${this.name} can swim`)
//   }
//
//   fly() {
//     console.log(`${this.name} can fly`)
//   }
// }
//
// class Dog extends Animal {
//   fly() {
//     return null
//   }
// }
//
// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }
//
// class Whale extends Animal {
//   fly() {
//     return null
//   }
//
//   walk() {
//
//   }
// }
//
// const dog = new Dog('Rex')
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('eagle_Ron')
// eagle.walk()
// eagle.swim()
// eagle.fly()
//
// const whale = new Whale('whale_Sam')
// whale.fly()
// whale.swim()
// whale.walk()
// ================================
class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`)
  }
}
const flyer = {
  fly() {
    console.log(`${this.name} can fly`)
  }
}
const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  }
}

class Dog extends Animal{
}

class Eagle extends Animal{
}

class Whale extends Animal{
}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex')
dog.walk()
dog.swim()
// dog.fly()

const eagle = new Eagle('eagle_Ron')
eagle.walk()
// eagle.swim()
eagle.fly()

const whale = new Whale('whale_Sam')
// whale.fly()
whale.swim()
// whale.walk()
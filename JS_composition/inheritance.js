class Programmer {
  constructor(name) {
    this.name = name
  }
  
  code() {
    console.log(`${this.name} is codding....`)
  }
}

class Fronend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app....`)
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on Node JS....`)
  }
}

const programmer = new Programmer('Programmer')
programmer.code()
const frondend = new Fronend('Fronend')
frondend.code()
frondend.angular()
const backend = new Backend('Max')
backend.code()
backend.nodejs()

class Fullstack extends Fronend {
  nodejs() {
    console.log(`${this.name} is programming on Node JS....`)
  }
}
class Person {
  birthYear = 1993
  get #age(){
    return this.#getYear() - this.birthYear
  }
  logAge(){
    console.log(this.#age)
  }
  #getYear(){
    return new Date().getFullYear()
  }
}
const person = new Person()
console.log(person.age); //?
console.log(person.logAge()); //?
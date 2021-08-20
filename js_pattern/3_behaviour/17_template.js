class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  
  responsibility() {
  }
  
  work() {
    return `${this.name} doing ${this.responsibility()}`
  }
  
  getPaid() {
    return `${this.name} has salary ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }
  
  responsibility() {
    return 'developing program'
  }
}
class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }
  
  responsibility() {
    return 'testing program'
  }
}
const dev = new Developer('Evgen', 1000000)
console.log(dev.getPaid());
console.log(dev.work());
const tester = new Tester('Max', 30000)
console.log(tester.getPaid());
console.log(tester.work());
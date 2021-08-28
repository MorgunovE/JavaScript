function createCalcFunction(n) {
  return function () {
    console.log(1000 * n)
  }
}

const calc = createCalcFunction(42)
// console.log(calc)
// calc()

function createIncrementor(n) {
  return function (num) {
    return n + num
  }
}
const addOne = createIncrementor(1)
const addTen = createIncrementor(10)
// console.log(addOne(10))
// console.log(addOne(41))
// console.log(addTen(10))
// console.log(addTen(41))

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}
const comUrl = urlGenerator('com')
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
const ruUrl = urlGenerator('ru')
// console.log(ruUrl('google'))
// console.log(ruUrl('netflix'))

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args)
  }
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}`)
}
const person1 = {name: 'Max', age:22}
const person2 = {name: 'Lex', age:35}
bind(person1, logPerson)()
bind(person2, logPerson)()
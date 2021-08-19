const cityField = 'city'
const job = "Fronend"
const person = {
  age: 26,
  name: 'Irina',
  job,
  [cityField + Date.now()]: 'Piter',
  "country-live": "Russia",
  print: () => 'Person',
  toString: function() {
    return Object.keys(this)
      .filter(key => key !== 'toString')
      .map(key => this[key])
      .join(' ')
  }
}
// console.log(person)
// console.log(person.print())
// console.log(person.toString())

const first = {a: 1}
const second = {b: 2}
// console.log(Object.is(20,10))
// console.log(Object.is(20,20))
// console.log(Object.assign({},first, {
//   c:2,
//   d:3
// }))
const obj = Object.assign({},first, {
  c:2,
  d:3
})
// console.log(first)
console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
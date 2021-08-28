const myNumber = 42
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// localStorage.clear()
const object = {
  name: 'Max',
  age: 20
}
localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Power'
// console.log(person)
window.onstorage = () => {}
window.addEventListener('storage', event => {
  console.log(event)
})

const num = 42
// let result
// if(num >20){
//   result = 'More than 20'
// }else{
//   result = "Less than 20"
// }
const result = num > 20 ? "More than 20" : "Less than 20"
// console.log(result);

let val
let val2
// if(val){
//   val2 = val
// }else{
//   val2 = "some value"
// }
val2 = val || 'Some value'
// console.log(val2);

// let x
// let y
// let z =42
let x, y, z = 42

let isSame = true
if(isSame === true) {
}
if(isSame) {
}

if(isSame !== true) {
}
if(!isSame) {
}

const names = ['1', '2', '3']
// for(let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }
// for(let name of names) {
//   console.log(name)
// }
// for(let index in names) {
//   console.log(index);
// }
// names.forEach(function(el, index, array) {
//   console.log(`names[${index}] = ${el}`)
// })
// function logArrayItems(el, index, array){
//   console.log(`names[${index}] = ${el}`)
// }
// names.forEach(logArrayItems)

// let port
// if(process.env.PORT) {
//   port = process.env.PORT
// } else {
//   port = 4200
// }
const port = process.env.PORT || 4200

// for(let i = 0; i < 1000000; i++) {
// }
// for(let i = 0; i < 10e6; i++) {
// }

const a = 1, b = 2
const myObjs = {a, b}

// setTimeout(function() {
//   console.log('after 2 sec')
// }, 2000)
// setTimeout(() => console.log('after 2 sec'), 2000)
//
// function tripple(num) {
//   return num * 3
// }
//
// const trippleNew = num => num * 3

// function rgb(r, g, b) {
//   if(r === undefined) {
//     r = 0
//   }
//   if(g === undefined) {
//     g = 255
//   }
//   return `rgb(${r}, ${g}, ${b})`
// }

const rgb = (r = 0, g = 255, b) => `rgb(${r}, ${g}, ${b})`

function createUrl(base, domain) {
  return 'http:// ' + base + '.' + domain
}

function createUrlNew(base, domain) {
  return `http://${base}.${domain}`
}

// const alert = window.alert
// const confirm = window.confirm
// const prompt = window.prompt

// const {alert,confirm,prompt} = window

const arr = [1, 2, 3]
const nums = [4, 5, 6].concat(arr)
const cloned = nums.concat()

const numsNew = [4, ...arr, 5, 6]
const clonedNew = [...numsNew]
// console.log(numsNew)
// console.log(clonedNew)

// console.log(Math.floor(9.7) === 9);
// console.log(~~9.7 === 9);

// console.log(Math.pow(2,3))
// console.log(Math.pow(2,4))
// console.log(Math.pow(4,3))
//
// console.log(2**3)
// console.log(2**4)
// console.log(4**3)

const int = parseInt('42')
const float = parseFloat('42.42')

const intNew = +'42'
const floatNew = +'42.42'

if([1, 2, 3].indexOf(3) > -1) {
}
if(~[1, 2, 3].indexOf(3)) {
}
if(!~[1, 2, 3].indexOf(3)) {
}
if([1, 2, 3].includes(3)) {
}

const car = {
  model: "Ford",
  year: 2019,
  color: "red",
}
// console.log(Object.entries(car));
// console.log(Object.keys(car));
// console.log(Object.values(car));
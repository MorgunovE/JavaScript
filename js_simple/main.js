// const person = new Object({
//   name: "Max",
//   age: 25,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   logInfo: function(job, phone) {
//     console.group(`${this.name} info:`)
//     console.log(`Name is ${this.name}`)
//     console.log(`Age is ${this.age}`)
//     console.log(`job is ${job}`)
//     console.log(`phone is ${phone}`)
//     console.groupEnd()
//   },
//   greet: function() {
//     console.log('Greet')
//   }
// });
// console.log(person)
// Object.prototype.sayHello = function() {
//   console.log("hello")
// }
// const lena = Object.create(person)
// lena.name = "Elena"
//
// function hello() {
//   console.log('Hello', this)
// }

// const elena = {
//   name: "Elena",
//   age: 23
// }
// const fnElenaInfoLog = person.logInfo.bind(elena,'Frontend', '8-932-555-55-55')
// person.logInfo.call(elena,'Frontend', '8-932-555-55-55')
// person.logInfo.apply(elena,['Frontend', '8-932-555-55-55'])
// fnElenaInfoLog()

// const array = [1, 2, 3, 4, 5]

// function multiBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }

// console.log(multiBy(array, 5))
// Array.prototype.multyBy = function(n) {
//   // console.log('multiBy',this)
//   return this.map(function(i) {
//     return i * n
//   })
// }

// console.log(array.multyBy(2))
// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }
//
// const calc = createCalcFunction(43)

// calc()
// function createIncremental(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncremental(1)
// const addTen = createIncremental(10)

// console.log(addOne(10))
// console.log(addOne(41))
// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(ruUrl('yandex'))
// console.log(ruUrl('vk'))

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const person1 = {name: "Max", age: 25, job: "Frontend"}
// const person2 = {name: "Katia", age: 21, job: "SMM"}

// bind(person1, logPerson)()
// bind(person2, logPerson)()

// function bind(context, fn) {
//   return function(...args) {
//     fn.apply(context, args)
//   }
// }

// console.log('Start 1')
// console.log('Start 2')

// function timeout2sec() {
//   console.log('timeout2sec')
// }

// window.setTimeout(function() {
//   console.log('after 2000ms')
// }, 2000)
// window.setTimeout(timeout2sec, 2000)
// console.log('end')

// console.log('Request data ....')
// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data....')
//     const backendData = {
//       sever: 'aws',
//       port: 2000,
//       status: "working",
//     }
//     resolve(backendData)
//   }, 2000)
// })
// p.then(data => {
//   // console.log('Promise resolve', data)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//       // reject(data)
//     }, 2000)
//   })
//   // const p2 = new Promise((resolve, reject)=>{
//   //   setTimeout(() => {
//   //     data.modified = true
//   //     resolve(data)
//   //   },2000)
//   // })
//   // p2.then(clientData=>{
//   //   console.log('Data received', clientData)
//   // })
// })
//   .then(clientData => {
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then(data => {
//     console.log('Modified', data)
//   })
//   .catch(err => console.error('Error: ', err))
//   .finally(() => {
//     console.log('Finally')
//   })
// setTimeout(() => {
//   console.log('Preparing data....')
//   const backendData = {
//     sever: 'aws',
//     port: 2000,
//     status: "working",
//   }
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)
// const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))
// sleep(2000).then(() => console.log('Afert 2 sec'))
// sleep(3000).then(() => console.log('Afert 3 sec'))
// Promise.all([sleep(2000), sleep(5000)])
//   .then(() => {
//     console.log('All promises')
//   })
// Promise.race([sleep(2000), sleep(5000)])
//   .then(() => {
//     console.log('Race promises')
//   })
// const person = Object.create({
//   calculateAge() {
//     console.log('Age: ', new Date().getFullYear() - this.birthYear)
//   }
// }, {
//   name: {
//     value: "Max",
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   },
//   birthYear: {
//     value: 2000
//   },
//   age: {
//     get() {
//       return new Date().getFullYear() - this.birthYear
//     },
//     set(value) {
//       document.body.style.background = "red"
//       console.log('Set age ', value)
//     }
//   }
// })
// // person.name = "Power"
// // console.log(person)
// // for(let key in person) {
// //   console.log('Key', key, person[key])
// // }
// for(let key in person) {
//   if(person.hasOwnProperty(key)) {
//     console.log('Key', key, person[key])
//   }
// }
// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// }
// class Animal {
//   static type = "ANIMAL"
//
//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }
//
//   voice() {
//     console.log('Im animal')
//   }
// }
//
// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })
// class Cat extends Animal {
//   static type = "CAT"
//
//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }
//
//   voice() {
//     super.voice()
//     console.log('Im cat')
//   }
//
//   get ageInfo() {
//     return this.age * 7
//   }
//
//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }
//
// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: "black"
// })
//
// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }
//
//   hide() {
//     this.$el.style.display = 'none'
//   }
//
//   show() {
//     this.$el.style.display = 'block';
//   }
// }
//
// class Box extends Component {
//   constructor(options) {
//     super(options.selector)
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.background = options.color
//   }
// }
//
// const box1 = new Box({
//   selector: '#box1',
//   size: 100,
//   color: 'red'
// })
// const box2 = new Box({
//   selector: '#box2',
//   size: 120,
//   color: 'blue'
// })
//
// class Circle extends Box {
//   constructor(options) {
//     super(options)
//     this.$el.style.borderRadius = '50%'
//   }
// }
//
// const c = new Circle({
//   selector: "#circle",
//   size: 90,
//   color: 'green'
// })
// const delay = ms => {
//   return new Promise(r => setTimeout(() => r(), ms))
// }
// delay(2000)
//   .then(() => console.log('2 sec'))
//
// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//   console.log('Fetch todo start....')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }
//
// fetchTodos()
//   .then(data => {
//     console.log('Data: ', data)
//   })
//   .catch(error => console.error(error))
// async function fetchAsyncTodos() {
//   console.log('Fetch todo start....')
//   try {
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data: ', data)
//   } catch(error) {
//     console.error(error)
//   } finally {
//     console.log('finally')
//   }
// }
//
// fetchAsyncTodos()
// const person = {
//   name: "Max",
//   age: 25,
//   job: "fullstack"
// }
// const op = new Proxy(person, {
//   get(target, prop) {
//     console.log(`Getting prop ${prop}`)
//     if( !(prop in target)) {
//       return prop.split('_')
//         .map(p => target[p])
//         .join(' ')
//     }
//     return target[prop]
//   },
//   set(target, prop, value) {
//     if(prop in target) {
//       target[prop] = value
//     } else {
//       throw new Error(`No ${prop} field in target`)
//     }
//   },
//   has(target, prop) {
//     return ['age', 'name', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting... ', prop)
//     delete target[prop]
//     return true
//   }
// })
//
// const log = text => `Log: ${text}`
// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Calling fn...')
//     return target.apply(thisArg, args)
//       .toUpperCase()
//   }
// })
//
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }
//
// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log('Construct...')
//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Getting prop "${prop}"`)
//         return t[prop]
//       }
//     })
//   }
// })
// const p = new PersonProxy('Maxim', 30)

// const withDefaultValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
//   })
// }
// const position = withDefaultValue({
//     x: 24,
//     y: 42
//   },
//   0)
// console.log(position)
// const withHiddenProps = (target, prefix = '_') => {
//   return new Proxy(target, {
//     has: (obj, prop) => (prop in obj) && ( !prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj)
//       .filter(p => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
//   })
// }
// const data = withHiddenProps({
//   name: "Max",
//   age: 25,
//   _uid: '12341231',
// })
// const userData = [
//   {id: 11, name: "max", job: "Fullstack", age: 25},
//   {id: 22, name: "Elena", job: "Student", age: 23},
//   {id: 33, name: "Pavel", job: "Frontend", age: 24},
//   {id: 44, name: "Vasia", job: "Teacher", age: 22},
// ]
// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach(item => (index[item.id] = item))
//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch(prop) {
//           case 'push':
//             return item => {
//               index[item.id] = item
//               arr[prop].call(arr, item)
//             }
//           case 'findById':
//             return id => index[id]
//           default:
//             return arr[prop]
//         }
//       }
//     })
//   }
// })
// const users = new IndexedArray([
//   {id: 11, name: "max", job: "Fullstack", age: 25},
//   {id: 22, name: "Elena", job: "Student", age: 23},
//   {id: 33, name: "Pavel", job: "Frontend", age: 24},
//   {id: 44, name: "Vasia", job: "Teacher", age: 22},
// ])

// function * strGenerator() {
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }
//
// const str = strGenerator()

// function * numberGen(n = 10) {
//   for(let i = 0; i < n; i++) {
//     yield i
//   }
// }
//
// const num = numberGen(7)
//
// const iterator = {
//   // gen(n = 10) {
//   [Symbol.iterator](n = 10) {
//     let i = 0
//     return {
//       next() {
//         if(i < n) {
//           return {value: ++i, done: false}
//         } else {
//           return {value: undefined, done: true}
//         }
//       }
//     }
//   }
// }
// for(let k of [1, 1, 2, 3, 5, 8, 13]) {
//   console.log(k)
// }
// function * iter(n = 10) {
//   for(let i = 0; i < n; i++) {
//     yield i
//   }
// }

// for(let k of iter(6)) {
//   console.log(k)
// }
// for(let k of iterator) {
//   console.log(k)
// }

// const people = [
//   {name: "Max", age: 25, budget: 40000},
//   {name: "Elena", age: 17, budget: 3400},
//   {name: "Igor", age: 49, budget: 50000},
//   {name: "Mike", age: 15, budget: 1800},
//   {name: "Vasia", age: 24, budget: 25000},
//   {name: "Viktor", age: 38, budget: 2300},
// ]
// for(let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }
// for(let person of people) {
//   console.log(person)
// }
// people.forEach(function(person, index, pArr) {
//   console.log(person)
//   console.log(index)
//   console.log(pArr)
// })
// people.forEach(person => console.log(person))
// const newPeople = people.map(person => person.age * 3
//   // `${person.name} (${person.age})`
//   // 'Hello'
//   // person
//   // person.name
// )
// console.log(newPeople)
// const adults = []
// for(let i = 0; i < people.length; i++) {
//   if(people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
// const adults = people.filter(person => {
//   if(person.age >= 18) {
//     return true
//   }
// })
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)
// let amount = 0
// for(let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }
// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)
// const igor = people.find(person => person.name === "Igor")
// console.log(igor)
// const igorIndex = people.findIndex(person => person.name === "Igor")
// console.log(igorIndex)
// const newPeople = people
//   .filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget
//     }
//   })
//   .reduce((total, person) => total + person.budget, 0)
// console.log(newPeople)
// const obj = {
//   name: "Max",
//   age: 25,
//   job: "fullstack"
// }
// const entries = [
//   ['name', "Max"],
//   ['age', "25"],
//   ['job', "fullstack"],
// ]
// // console.log(Object.entries(obj))
// // console.log(Object.fromEntries(entries))
// const map = new Map(entries)
// // console.log(map)
// // console.log(map.get('job'))
// map.set('newField', 43)
//   .set(obj, 'Value')
// // console.log(map)
// // console.log(map.get(obj))
// // map.delete('job')
// // console.log(map.has('job'))
// // console.log(map.size)
// // map.clear()
// // console.log(map.size)
// // for(let entry of map.entries()){
// //   console.log(entry)
// // }
// // for(let [key,value] of map){
// //   console.log(key,value)
// // }
// // for(let val of map.values()){
// //   console.log(val)
// // }
// // for(let key of map.keys()){
// //   console.log(key)
// // }
// // map.forEach((val,key,n)=>{
// //   console.log(val,key)
// // })
// // const array = [...map]
// // const array = Array.from(map)
// // const mapObj = Object.fromEntries(map.entries())
// // // console.log(array)
// // console.log(mapObj)
// const users = [
//   {name: "Max"},
//   {name: "Power"},
//   {name: "Pavel"},
// ]
// const visits = new Map()
// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//   .set(users[1], new Date(new Date().getTime() + 5000 * 60))
// function lastVisit(user){
//   return visits.get(user)
// }
// console.log(lastVisit(users[0]))

// const set = new Set([1,2,3,4,3,3,4,5,5,6,7])
// set.add(10).add(20).add(20).add(30)
// // console.log(set)
// // console.log(set.has(30))
// // console.log(set.has(42))
// // console.log(set.size)
// // console.log(set.delete(1))
// // console.log(set.size)
// // console.log(set.clear())
// // console.log(set.size)
// // console.log(set.values())
// // console.log(set.keys())
// // console.log(set.entries())
// // for(let key of set){
// //   console.log(key)
// // }
// function uniqValues(array){
//   return[...new Set(array)]
// }
// console.log(uniqValues([1,1,1,12,2,2,3,3,4,4,5,5,6,6,6,6,6,7]))

// let obj = {name:'weakmap'}
// // const arr = [obj]
// // obj = null
// // console.log(obj)
// // console.log(arr[0])
// const map = new WeakMap([
//   [obj,'obj data']
// ])
// obj = null
// // console.log(map.has(obj))
// // console.log(map)
//
// const cache = new WeakMap()
// function cacheUser(user){
//   if(!cache.has(user)){
//     cache.set(user,Date.now())
//   }
//   return cache.get(user)
// }
// let lena = {name:'Elena'}
// let alex = {name:'Alex'}
// cacheUser(lena)
// cacheUser(alex)
// lena = null
// console.log(cache.has(lena))
// console.log(cache.get(lena))
// console.log(cache.has(alex))
// console.log(cache.get(alex))

// const users = [
//   {name: "Max"},
//   {name: "Power"},
//   {name: "Pavel"},
// ]
// const visites = new WeakSet()
// visites.add(users[0]).add(users[1])
// users.splice(1,1)
// console.log(visites.has(users[0]))
// console.log(visites.has(users[1]))

// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.onload = () => {
//       if(xhr.status >= 400) {
//         reject(xhr.response)
//       } else {
//         resolve(xhr.response)
//       }
//       // console.log(xhr.response)
//     }
//     xhr.onerror = () => {
//       reject(xhr.response)
//     }
//     xhr.send(JSON.stringify(body))
//   })
// }
//
// // sendRequest('GET', requestURL)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err))
// const body = {
//   name: "Max",
//   age: 26
// }
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const xhr = new XMLHttpRequest();
//
// xhr.open('GET', requestURL)
// xhr.responseType = 'json'
// xhr.onload = () => {
//   if(xhr.status >= 400) {
//     console.error(xhr.response)
//   } else {
//     console.log(xhr.response)
//   }
//   // console.log(xhr.response)
// }
// xhr.onerror = () => {
//   console.log(xhr.response)
// }
// xhr.send()

// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-type': 'application/json'
//   }
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   })
//     .then(response => {
//       if(response.ok){
//         return response.json()
//       }
//       return response.json().then(error =>{
//         const e = new Error('Some happened')
//         e.data = error
//         throw e
//       })
//     })
// }
//
// // sendRequest('GET', requestURL)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err))
//
// const body = {
//   name: "Max",
//   age: 26
// }
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

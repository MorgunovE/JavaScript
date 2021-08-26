const axios = require('axios')
const num = 42
const num2 = num ** 2
// console.log(num2)
// const num3 = Math.ceil(Math.random() * 10)
// console.log(num3)
// new Date().toDateString()

// const locale = 'ru-Ru'
// const locale = 'en-GB'
const locale = 'ko-KR'
const options = {
  day: 'numeric',
  year: 'numeric',
  month: 'short'
}
const date = new Intl.DateTimeFormat(locale, options).format()
// console.log(date)
const fibonacci = [1, 1, 2, 3, 5, 8]
const nextFib = fibonacci.concat([13])
console.log(nextFib)
const next = [...nextFib, 21]
console.log(next)
console.log(next.every(n => typeof n === 'number'))
console.log(next.findIndex(n => n === 5))
console.log(next
  .map(num => num ** 2)
  .filter(num => num % 2 === 0)
  .reduce((acc, n) => acc + n, 0))

async function getData(){
  const {data} = await axios.get('https://reqres.in/api/users?page=2')
  return data
}

console.log(getData())

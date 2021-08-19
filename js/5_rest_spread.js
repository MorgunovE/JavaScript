function average(a,b,...args) {
  // return arr.reduce((acc, i) => acc += i, 0) / arr.length
  // return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
  return args.reduce((acc, i) => acc += i, 0) / args.length
}
// console.log(average([10,20,30,40]))
// console.log(average(10,20,30,40,50))

const array = [1,undefined,3,5,8,13]
// console.log(array)
// console.log(Math.max(...array))
// console.log(Math.min(...array))
// const fib = [1, ...array]
// console.log(fib)

// const [a,b=42,...c] = array
// console.log(a,b,c)

// const[a,,c] = array
// console.log(a,c)

const address = {
  country: "Russia",
  city: "Moskow",
  street: "Lenina",
  concat: function(){
    return `${this.country}, ${this.city}, ${this.street}`
  }
}
// const {city, ...rest} = address
// console.log(city)
// console.log(rest)
const newAddress = {...address, street: "Twerskay", code:123}
console.log(newAddress)
// const {city,country, street = "Tweskay", concat:addressConcat} = address
// console.log(addressConcat.call(address))
// console.log(addressConcat)
// console.log(street)
// console.log(address.concat())

const array = [10, 20, 30, 40]
const str = "Hello"

console.log(array[Symbol.iterator])
console.log(str[Symbol.iterator])

// const iter = array[Symbol.iterator]()
const iter = str[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

for (let item of array){
  console.log(item)
}
for (let item of str){
  console.log(item)
}

const country = {
  values:['ru','kz', 'ua','by'],
  [Symbol.iterator](){
    let i = 0
    return {
      next: () => {
        const value = this.values[i]
        i++
        return {
          done: i > this.values.length,
          value
        }
      }
    }
  }
}
for(let item of country){
  console.log(item)
}

 function *gen(num = 4){
  for(let i = 0; i<num;i++){
    try{
      yield i
    }catch(e){
      console.log('Error', e)
    }
    
  }
 }
const iters = gen(3)
console.log(iters.next())
console.log(iters.throw("My Error"))
console.log(iters.next())
console.log(iters.next())
for(let i of gen(4)){
  console.log(i)
}
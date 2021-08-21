const people = [
  {id: 1, name: "Max", age: 20},
  {id: 2, name: "Elena", age: 40},
  {id: 3, name: "Power", age: 30},
  {id: 4, name: "Pavel", age: 10},
]
// console.log(people);
// console.table(people);
console.time('timer')
const item = []
for(let i; i < 100000000000; i++) {
  item.push({el: i + 1})
}
console.timeEnd('timer')
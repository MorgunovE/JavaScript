// 120
async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)
// 158
const unused = 42

// 131
class Util {
  static id = Date.now()
}

console.log('ID: ', Util.id)
console.log(unused)

// 164
// import('lodash').then(({default:_}) => {
//   console.log('lodash', _.random(0, 42, true))
// })
import("lodash").then(({ default: _ }) => {
  console.log("lodash: ", _.random(0, 42, true));
});
// import('lodash').then(module => {
//   let _=module.default()
//   console.log('lodash', _.random(42, true))
// })
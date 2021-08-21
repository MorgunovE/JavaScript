const person = {
  name: 'Max'
}

function info(phone, email) {
  console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`)
}

// const bound = info.bind(person)
// bound()
// info.bind(person)('12345','email@maiil.ru')
// info.bind(person,'123124')('email@maiil.ru')
// info.bind(person,'123124','email@maiil.ru')()

// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest)
// }

// function bind(fn, context, ...rest) {
//   return function(...args) {
//     const uniqueId = Date.now().toString()
//     context[uniqueId] = fn
//     const result = context[uniqueId](...rest.concat(args))
//     delete context[uniqueId]
//     return result
//   }
// }
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments,2)
//   return function() {
//     const args = Array.prototype.slice.call(arguments)
//     return fn.apply(context,rest.concat(args))
//   }
// }
// function bind(fn, context, ...rest) {
//   return function(...args) {
//     // return fn.apply(context,rest.concat(args))
//     return fn.call(context, ...rest.concat(args))
//   }
// }
//
// bind(info, person)('12345', 'email@maiil.ru')
// bind(info, person, '12345')('email@maiil.ru')
// bind(info, person, '12345', 'email@maiil.ru')()
// console.log(person)

function call(fn, context, ...args) {
  const uniqueId = Date.now().toString()
  context[uniqueId] = fn
  const result = context[uniqueId](...args)
  delete context[uniqueId]
  return result
}

call(info, person, '12314', '2@mail.ru')

function apply(fn, context, args) {
  const uniqueId = Date.now().toString()
  context[uniqueId] = fn
  const result = context[uniqueId](...args)
  delete context[uniqueId]
  return result
}

apply(info, person, ['12314', '2@mail.ru'])

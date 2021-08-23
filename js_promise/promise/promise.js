// npm init -y
//npm i jest -D
// in package json "test": "jest"
function noop() {
}

class EvgenPromise {
  constructor(executor) {
    this.queue = []
    this.errorHandler = noop
    this.finallyHandler = noop
    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    } catch(e) {
      this.errorHandler(e)
    } finally {
      this.finallyHandler()
    }
  }
  
  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data)
    })
    this.finallyHandler()
  }
  
  onReject(error) {
    this.errorHandler(error)
    this.finallyHandler()
  }
  
  then(fn) {
    this.queue.push(fn)
    return this
  }
  
  catch(fn) {
    this.errorHandler = fn
    return this
  }
  
  finally(fn) {
    this.finallyHandler = fn
    return this
  }
}

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolve from promise')
//   }, 150)
// })
const promise = new EvgenPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve from promise')
    // reject('Some error')
  }, 150)
})
promise
  .then(course => course.toUpperCase())
  .then(title => console.log('Evgen promise: ', title))
  .catch(err => console.log('Error: ', err))
  .finally(() => console.log('Finally'))
module.exports = EvgenPromise
function func() {
  const person = new WeakRef({
    name: 'Max',
  })
  console.log(person.deref().name)
}

const registry = new FinalizationRegistry((value) => {
  console.log('Clearing garbage', value)
})

async function start() {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(func())
  //   }, 300)
  // })
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(func())
  //   }, 500)
  // })
  // const ref = new WeakRef({a: 42})
  const obj = {a: 42}
  // registry.register(ref,'MyWeakRef')
  registry.register(obj, 'MyWeakRef')
}

start()

// ===================
const listenersRegistry = new FinalizationRegistry(({target, wrapper, type}) => {
  target.removeEventListener(type, wrapper)
})

function addWeakListener(target, type, listener) {
  const wr = new WeakRef(listener)
  const wrapper = (event) => wr.deref()?.(event)
  listenersRegistry.register(listener, {target, wrapper, type})
  target.addEventListener(type, wrapper)
}

addWeakListener(document, 'click', event => {
  console.log(event)
})
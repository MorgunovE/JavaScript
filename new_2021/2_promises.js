function createPromise(value, delay, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error ? reject(error) : resolve(value)
    }, delay)
  })
}

const p1 = createPromise(1, 250)
const p2 = createPromise(2, 750,'Unknown error')
const p3 = createPromise(3, 350, 'Some custom error')

async function start() {
  // const res = await Promise.all([p1, p2, p3])
  try {
    // const res = await Promise.any([p1, p2, p3])
    const res = await Promise.any([p3,p2])
    res
  } catch(error) {
    console.log(error)
    console.log(error.errors)
  }
  
}

start()
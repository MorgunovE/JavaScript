const EvgenPromise = require('./promise')
const t = setTimeout
const successResult = 42
const errorResult = 'I am error'
describe('Evgen promise', () => {
  let promise
  let executorSpy
  beforeEach(() => {
    executorSpy = jest.fn(resolve => t(() => resolve(successResult), 150))
    promise = new EvgenPromise(executorSpy)
  })
  test('should exist and to be typeof function', () => {
    expect(EvgenPromise).toBeDefined()
    expect(typeof EvgenPromise).toBe('function')
  })
  test('should have methods: then, catch, finally', () => {
    expect(promise.then).toBeDefined()
    expect(promise.catch).toBeDefined()
    // expect(promise.finally).toBeDefined()
    expect(promise.finally).not.toBeUndefined()
  })
  test('should call executor function', () => {
    expect(executorSpy).toHaveBeenCalled()
  })
  test('should get data in then and chain them', async() => {
    const result = await promise.then(num => num).then(num => num * 2)
    expect(result).toBe(successResult * 2)
  })
  test('should catch error', () => {
    const errorExecutor = (_, reject) => t(() => reject(errorResult), 150)
    const errorPromise = new EvgenPromise(errorExecutor)
    return new Promise(resolve => {
      errorPromise.catch(error => {
        expect(error).toBe(errorResult)
        resolve()
      })
    })
  })
  test('should call finally method', async() => {
    const finallySpy = jest.fn(() => {
    })
    await promise.finally(finallySpy)
    expect(finallySpy).toHaveBeenCalled()
  })
})
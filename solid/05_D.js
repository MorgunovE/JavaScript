// Dependency inversion principle
class Fetch {
  request(url) {
    // return fetch(url).then(response => response.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from localStorage'
    // return localStorage.getItem('key')
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }
  
  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }
  
  clientGet(key) {
    return this.localStorage.get('key')
  }
}

class Database {
  constructor(client) {
    this.client = client
    // this.fetch = new Fetch()
    // this.localStorage = new LocalStorage()
  }
  
  getData(key) {
    return this.client.clientGet(key)
    // return this.fetch.request('vk.com')
    // return this.localStorage.get('LS key')
  }
}

// const db = new Database()
const dbFetch = new Database(new FetchClient())
const dbLocalStorage = new Database(new LocalStorageClient())
// console.log(db.getData())
console.log(dbFetch.getData('random'))
console.log(dbLocalStorage.getData('random'))
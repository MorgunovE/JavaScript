const car = {
  wheels: 4,
  init() {
    console.log(`I have ${this.wheels} wheels, my master ${this.owner}`)
  }
}
const carWithOwner = Object.create(car, {
  owner: {
    value: 'Max'
  }
})
carWithOwner.init()
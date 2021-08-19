console.log('I am from module.js')
const privateKey = 'private'
export const SECRET_KEY = 42
export default class Person{
  constructor(name){
    this.name = name;
  }
}
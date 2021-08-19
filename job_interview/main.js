// console.log('test');
// const person = {
//   surname: "Stark",
//   know:function(what,name){
//     console.log(`You know ${what} about, ${name} ${this.surname}`)
//   }
// }
// const jhon = {surname:'Snow'}
// person.know('all','Bran')
// person.know.call(jhon,'not','jhon')
// person.know.apply(jhon,['not','jhon'])
// person.know.call(jhon,...['not','jhon'])
// const bound = person.know.bind(jhon,'not','jhon')
// bound()
// function Cat(color){
//   this.color = color
//   console.log('This',this)
//   ;(()=>console.log('Arrow this', this))()
// }
// new Cat('red')
// function Cat(name,color){
//   this.nane= name
//   this.color= color
// }
// Cat.prototype.voice = function(){
//   console.log(`Cat ${this.nane} says mya`)
// }
// const cat = new Cat('Cat','white')
// cat.voice()

// const person = {
//   name: 'Max',
//   age: 30,
// }
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptors(person, 'name'));
// console.log(Object.entries(person));
// Object.fromEntries(Object.entries(person))
// for(const [key,value] of Object.entries(person)){
//   // console.log(key,value)
//   console.log(` ${JSON.stringify(key)} ${JSON.stringify(value)}`)
// }
// const start = "        Hello "
// const end = 'this is new   '
// console.log(start.trimStart() + end.trimEnd());
// console.log((start + end).trim());
// console.log('vk'.padStart(6, 'www.'));
// console.log('vk'.padEnd(6, '.com'));

// function tag(strings,name,age) {
//   console.log(strings)
//   const [s1,s2,s3] = strings
//   console.log(name,age)
//   const ageStr = age > 42 ? 'grandest':'youngest'
//   return `${s1}${name}${s2}${ageStr}${s3}`
// }
//
// const person = {
//   name: 'Max',
//   age: 30,
// }
// const output = tag`person has name ${person.name} and  ${person.age} in family`
// console.log(output);

// const nested = ['a','b',['c','d'],['e',['f','g']]]
// console.log(nested)
// console.log(nested.flat())
// console.log(nested.flat(2))
// console.log(nested.flat().flat())

// const techs = ['red blue','green','black','white and yellow']
// console.log(techs)
// console.log(techs.map(tech => tech.split(' ')))
// console.log(techs.map(tech => tech.split(' ')).flat())
// console.log(techs.flatMap(tech => tech.split(' ')))

// class Person{
//   static type = "HUMAN"
//   static #area = "EARTH"
//   name='user'
//   #year = 1987
//   constructor(name){
//     this.name = name
//   }
//   static printArea(){
//     return Person.#area === 'EARTH'?'earth':'Mars'
//   }
//   get age(){
//     return new Date().getFullYear() - this.#year;
//   }
//   set age(age){
//     if(age>0){
//       this.#year = new Date().getFullYear() -age
//     }
//   }
// }
// const person = new Person('Max')
// console.log(person.name);
// console.log(person.age);
// person.age=26
// console.log(person.age);
// console.log(Person.type);
// console.log(Person.printArea());

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(9007199254740991231312)
// console.log(typeof 10)
// console.log(typeof 10n)
// console.log(9007199254740991231312n)
// console.log(-9007199254740991231312n)
// console.log(9007199254740991231312n - 1231231231n)

// console.log(parseInt(10n)-4)
// console.log(10n-BigInt(4))
// console.log(5n/2n)

// (async () => {
//   const module = await import('./module.js')
//   console.log(module)
//   console.log(module.SECRET_KEY)
//   const Person = module.default
//   const person = new Person('Max')
//   console.log(person)
// })()

// const p1 = Promise.resolve(1)
// const p2 = Promise.reject('my error')
// const p3 = Promise.resolve(3)

// ;(async() => {
//   const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err))
//   console.log(result);
// })();
// ;(async() => {
//   const result = await Promise.allSettled([p1, p2, p3])
//   console.log(result);
// })()

// const values = {
//   undefined: undefined,
//   null: null,
//   false: false,
//   zero: 0,
//   empty: '',
// }
// console.log(values.undefined || 'default undefined')
// console.log(values.undefined ?? 'default undefined')
// console.log(values.null || 'default null')
// console.log(values.null ?? 'default null')
// console.log(values.false || 'default false')
// console.log(values.false ?? 'default false')
// console.log(values.zero || 'default zero')
// console.log(values.zero ?? 'default zero')
// console.log(values.empty || 'default empty')
// console.log(values.empty ?? 'default empty')

// const bill1 = {
//   bank: {
//     name: 'My bank',
//     amount: {
//       value: 1000,
//       currency: 'RUB',
//     }
//   }
// }

// const bill2={
//   bank: {}
// }

// function getBillValue(bill){
//   // return bill.bank.amount.value
//   // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)?bill.bank.amount.value:undefined;
//   return bill?.bank?.amount?.value
// }
// console.log(getBillValue(bill1))
// console.log(getBillValue(bill2))
// console.log(document.querySelector('h1').textContent);
// console.log(document.querySelector('h2')?.textContent);
function adder(a,b) {return a+b}
adder(10,12)
console.log(adder(10,12))
let c = [9,2,5,5,7]
console.log(c.reduce(adder, 0))
let a = [1,2]
let d = c.concat(a,'end')
console.log(d)
c.push(8)
console.log(c)
c.pop()
console.log(c)
c.join('-->')
console.log(c)
let hey = [1,12,32,24,534,123]
console.log(hey.sort())
function compare(a,b) {return a-b}
console.log(compare(10, 11))
console.log(hey.sort(compare))
let t = [1,2]
t['some'] = 45
console.log(t)
console.log(t.length)
//regExp
/x[eaoy]n/
/[A-Z]/


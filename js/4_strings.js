// const title = 'Hello'
// const isVisible = () => Math.random() > 0.5
// const template = `
// ${isVisible() ? `<p>Visible</p>`:''}
// <h1 id='demo' style="color: red">${title}</h1>
// `
// console.log(template)

const str = "hello"

console.log(str.startsWith('he'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.endsWith('e'))

console.log(str.includes('llo'))
console.log(str.repeat(3))

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())
console.log(str.padStart(10, '1234'))
console.log(str.padEnd(10, '1234'))
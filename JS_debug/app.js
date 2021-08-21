document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.querySelector('#num1')
  const num2 = document.querySelector('#num2')
  const addBtn = document.querySelector('#add')
  const subBtn = document.querySelector('#sub')
  const output = document.querySelector('#output')
  
  function getInputValues() {
    const value1 = +num1.value
    const value2 = parseInt(num2.value)
    return [value1, value2]
  }
  
  // console.log(addBtn)
  addBtn.addEventListener('click', addHandler)
  
  function addHandler() {
    const values = getInputValues()
    // console.log(values)
    const result = values[0] + values[1]
    // console.log('Result: ', result)
    // console.log(values[0], values[1])
    displayResult(result)
  }
  
  subBtn.addEventListener('click', subHandler)
  
  function subHandler() {
    const values = getInputValues()
    const result = values[0] - values[1]
    displayResult(result)
  }
  
  function displayResult(result) {
    output.closest('.card').style.display = 'block'
    output.innerHTML = `Result ${result}`
    console.trace()
  }
  setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },5000)
})

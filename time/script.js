const decimal = time => moment().startOf('d').add(time, 'h')
const interval = ({start, end}) => {
  const formatTime = 'h:mm A'
  return `${decimal(start).format(formatTime)} - ${decimal(end).format(formatTime)}`
}
const filter = item => !!item
const day = d => moment(d, 'dddd').format('ddd')
const format = ({time, names}) => {
  if(names.length === 1) {
    return `${day(names[0])}: ${time}`
  }
  return `${day(names[0])} - ${day(names[names.length - 1])} :${time}`
}
const toHTML = item => `<li>${item}</li>`
const append = (html, index) => document.querySelector(`#box${index + 1} ul`).innerHTML = html
const toIntervals = ({order, days}) => {
  let key = 0
  let prev
  return order.reduce((group, day) => {
    // console.log(day)
    if(!days[day]) {
      key++
      return group
    }
    const time = interval(days[day])
    // console.log('time', time)
    if(prev !== time) {
      key++
      prev = time
    }
    if(!group[key]) {
      group[key] = {names: [], time}
    }
    group[key].names.push(day)
    return group
  }, [])
}

const convert = src => {
  // console.log(src)
  return toIntervals(src)
    .filter(filter)
    .map(format)
    .map(toHTML)
    .join(' ')
  // console.log(html)
  // append(html, `#box${index + 1} ul`)
}

[source, source2, source3]
  .map(convert)
  .forEach(append)
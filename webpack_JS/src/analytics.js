// 6
function createAnalytics() {
  let counter = 0
  let destroyed = false //30
  // console.log('text') //30-3
  const listener = () => counter++
  document.addEventListener('click', listener)
  // 6-1
  return {
    destroy() {
      document.removeEventListener('click', listener)
      destroyed = true //30-1
    },
    getClicks() {
      if(destroyed) { //30-2
        // 22
        return `Analytics is destroyed. Total clicks = ${counter}`
      }
      return counter
    }
  }
}

// 6-2
window.analytics = createAnalytics()
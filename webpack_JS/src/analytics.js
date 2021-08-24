// 6
function createAnalytics() {
  let counter = 0
  let isDestroyed = false
  const listener = () => counter++
  document.addEventListener('click', listener)
  // 6-1
  return {
    destroy() {
      document.removeEventListener('click', listener)
      isDestroyed = true
    },
    getClicks() {
      if(isDestroyed) {
        return 'Analytics is destroyed'
      }
      return counter
    }
  }
}

// 6-2
window.analytics = createAnalytics()
// 70
import * as $ from 'jquery'

// 6
function createAnalytics(): object { //137-1
  let counter = 0
  let destroyed: boolean = false //30 and 137-2
  // console.log('text') //30-3
  const listener = (): number => counter++ //137-3
  // 70-1
  $(document).on('click', listener)
  // 6-1
  return {
    destroy() {
      // 70-2
      $(document).off('click', listener)
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
// window.analytics = createAnalytics()
window['analytics'] = createAnalytics() //137
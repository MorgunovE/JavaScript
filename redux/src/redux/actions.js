// 15
import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types';

// 15-1
export function increment() {
  return {
    type: INCREMENT
  }
}

// 15-2
export function decrement() {
  return {
    type: DECREMENT
  }
}

// 15-3
export function asyncIncrement() {
  // 21
  return function (dispatch) {
    // 41
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch(increment()) // 21-1
      // 41-2
      dispatch(enableButtons())
    },2000)
  }
  // return {
  //   type: ASYNC_INCREMENT
  // }
}
// 33
export function changeTheme(newTheme) { // 35
  return {
    type: CHANGE_THEME,
    // 35-1
    payload: newTheme
  }
}

// 38
export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}
// 38-1
export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}




// import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types'
//
// export function increment() {
//   return {
//     type: INCREMENT
//   }
// }
//
// export function decrement() {
//   return {
//     type: DECREMENT
//   }
// }
//
// export function enableButtons() {
//   return {
//     type: ENABLE_BUTTONS
//   }
// }
//
// export function disableButtons() {
//   return {
//     type: DISABLE_BUTTONS
//   }
// }
//
// export function changeTheme(newTheme) {
//   return {
//     type: CHANGE_THEME,
//     payload: newTheme
//   }
// }
//
//
// export function asyncIncrement() {
//   return function(dispatch) {
//     dispatch(disableButtons())
//     setTimeout(() => {
//       dispatch(increment())
//       dispatch(enableButtons())
//     }, 1500)
//   }
// }

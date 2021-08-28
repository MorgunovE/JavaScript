// 7
import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types" // 13-1 and 22-2
import {combineReducers} from 'redux'

function counterReducer(state = 0, action) { // 27 and 29
  if(action.type === INCREMENT) { // 13
    return state + 1
  } else if (action.type === DECREMENT ) { // 13-2
    return state - 1
  }
  // 22-3
  // } else if (action.type === ASYNC_INCREMENT) { // 17
  //   // 22
  //   // setTimeout(()=>{
  //   //   return state + 1
  //   // },2000)
  //
  //   // 22-1
  //   return state + 1
  // }
  return state
}
// 29-1
const initialThemeState = {
  value: 'light',
  // 39-1
  disabled: false
}
// 27-1
function themeReducer(state = initialThemeState, action) { // 29-2
  // 32
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload} // 36
      // 39
    case ENABLE_BUTTONS:
      return {...state, disabled: false}
      // 39-2
    case DISABLE_BUTTONS:
      return {...state, disabled: true}
    default: return state
  }
  // return state
}
export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})
// import {combineReducers} from 'redux'
// import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types'
//
// function counterReducer(state = 0, action) {
//   if (action.type === INCREMENT) {
//     return state + 1
//   } else if (action.type === DECREMENT) {
//     return state - 1
//   }
//
//   return state
// }
//
// const initialThemeState = {
//   value: 'light',
//   disabled: false
// }
//
// function themeReducer(state = initialThemeState, action) {
//   switch (action.type) {
//     case CHANGE_THEME:
//       return {...state, value: action.payload}
//     case ENABLE_BUTTONS:
//       return {...state, disabled: false}
//     case DISABLE_BUTTONS:
//       return {...state, disabled: true}
//     default: return state
//   }
// }
//
// export const counterReducer = combineReducers({
//   counter: counterReducer,
//   theme: themeReducer
// })

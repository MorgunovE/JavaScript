// 4
import './styles.css'
// import {createStore} from "./createStore"; // 11
import {applyMiddleware, createStore, compose} from "redux" // 11-1 and 45
import thunk from 'redux-thunk' // 20
import logger from 'redux-logger' // 26
import { composeWithDevTools } from 'redux-devtools-extension' // 48
import {rootReducer} from "./redux/rootReducer"
// import {DECREMENT, INCREMENT} from "./redux/types"; // 14-1
import {asyncIncrement, changeTheme, decrement, increment} from './redux/actions' //16-1

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// 23
// function logger(state) {
//   return function(next) {
//     return function(action) {
//       console.log('Previous state: ',state.getState())
//       console.log('action: ',action)
//       const newState = next(action)
//       console.log('New state: ',newState)
//       // return next(action)
//       return newState
//     }
//   }
// }

// 48
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)
// 8
// const store = createStore(
//   rootReducer,
//   // 42, // 28
//   // 45
//   compose(
//     applyMiddleware(thunk, logger), // 23-1
//     // 45-1
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// ) // 20-1
// window.store = store
// const store = createStore(counterReducer, {
//   counter: 0
// })

addBtn.addEventListener('click', () => {
  // 8-1
  store.dispatch(increment()) // 14 and 16
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})
subBtn.addEventListener('click', () => {
  // 8-2
  store.dispatch(decrement()) // 14-2 and 16-2
})

themeBtn.addEventListener('click', () => {
  // 34-2
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
  // 34
  store.dispatch(changeTheme(newTheme))
})
// 8-3
store.subscribe(() => {
  const state = store.getState()
  // console.log(state)
  counter.textContent = state.counter // 30
  // 34-1
  document.body.className = state.theme.value;
  // 40
  [addBtn, subBtn, themeBtn, asyncBtn]
    .forEach(btn => btn.disabled = state.theme.disabled )
})
// 8-4
store.dispatch({type: 'INIT_APPLICATION'})

// import {applyMiddleware, createStore, compose} from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import {counterReducer} from './redux/counterReducer'
// import {asyncIncrement, changeTheme, decrement, increment} from './redux/actions'
// import './styles.css'
//
// const counter = document.getElementById('counter')
// const addBtn = document.getElementById('add')
// const subBtn = document.getElementById('sub')
// const asyncBtn = document.getElementById('async')
// const themeBtn = document.getElementById('theme')
//
// // function logger(state) {
// //   return function(next) {
// //     return function(action) {
// //       console.log('Prev State', state.getState())
// //       console.log('Action', action)
// //       const newState = next(action)
// //       console.log('New State', newState)
// //       return newState
// //     }
// //   }
// // }
//
// // const store = createStore(
// //   counterReducer,
// //   compose(
// //     applyMiddleware(thunk, logger),
// //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // )
//
// const store = createStore(
//   counterReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk, logger)
//   )
// )
//
// addBtn.addEventListener('click', () => {
//   store.dispatch(increment())
// })
//
// subBtn.addEventListener('click', () => {
//   store.dispatch(decrement())
// })
//
// asyncBtn.addEventListener('click', () => {
//   store.dispatch(asyncIncrement())
// })
//
// themeBtn.addEventListener('click', () => {
//   const newTheme = document.body.classList.contains('light')
//     ? 'dark'
//     : 'light'
//   store.dispatch(changeTheme(newTheme))
// })
//
//
// store.subscribe(() => {
//   const state = store.getState()
//
//   counter.textContent = state.counter
//   document.body.className = state.theme.value;
//
//   [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
//     btn.disabled = state.theme.disabled
//   })
// })
//
// store.dispatch({ type: 'INIT_APPLICATION' })

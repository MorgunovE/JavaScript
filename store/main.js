var links, updateState, contentEl, navEl, state, updateButtons;
contentEl = document.querySelector('.content');
navEl = document.querySelector('.nav')
links = {
  main: 'This is the <strong>main</strong> page',
  about: 'This is the <strong>about</strong> page',
  downloads: 'This is the <strong>downloads</strong> page',
}
updateState = function (state) {
  if (!state) return;
  // let content = links[location.hash.slice(1)]
  // console.log(state.page.slice(1))
  // console.log(links[state])
  contentEl.innerHTML = links[state.page.slice(1)]
  updateButtons(state)
}
updateButtons = function (state) {
  [].slice.call(navEl.querySelector('.a'))
    .forEach(function (e) {
      state.page === e.getAttribute('href')
        ? e.parentNode.classList.add('active')
        : e.parentNode.classList.remove('active')
    })
}
window.addEventListener('popstate', function (e) {
  updateState(e.state)
})
// window.addEventListener('hashchange', updateState)
// window.addEventListener('load', updateState)
navEl.addEventListener('click', function (e) {
  if (e.target.tagName !== 'A') return;
  state = {
    page: e.target.getAttribute('href')
  }
  history.pushState(state, '', state.page)
  updateState(state)
  e.preventDefault();
})
const iframe = document.getElementById('target-page')
const searchBar = document.querySelectorAll('.search-bar')
const searchButton = document.querySelectorAll('.search-button')

iframe.src = 'http://sailthru.com'

searchButton[0].addEventListener('click', () => {
  iframe.src = searchBar[0].value
})

// iframe.addEventListener('onmouseover', (e) => {
//   console.log('HELLO')
//   console.log(e.target)
// })

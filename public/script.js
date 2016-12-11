let iframe = document.getElementById('target-page')
const searchBar = document.querySelectorAll('.search-bar')[0]
const searchButton = document.querySelectorAll('.search-button')[0]

iframe.src = 'http://localhost:3000/sailthru.com'

searchBar.addEventListener('keypress', (e) => {
  if (e.keyCode) {
    iframe.src = `http://localhost:3000/${searchBar.value}`
  }
})
console.log(iframe)
// document.querySelectorAll('aside')[0].addEventListener('onmouseover', (e) => {
//   console.log(`ONMOUSEOVER`)
// })

let nonIframeElements = document.querySelectorAll('aside, header')

for (let nonIframeElement of nonIframeElements) {
  nonIframeElement.addEventListener('mouseover', (e) => {
    let hoverElement = iframe.contentWindow.document.querySelectorAll('.is-hover')[0]
    if (hoverElement) {
      hoverElement.classList.remove('is-hover')
    }
  })
}

// iframe.addEventListener('onmouseover', (e) => {
//   console.log('HELLO')
//   console.log(e.target)
// })

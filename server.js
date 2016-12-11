const express = require('express')
const request = require('request')

const port = 3000

let app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/:webpage', (req, res) => {
  console.log(`Webpage: ${req.params.webpage}`)
  request(`https://${req.params.webpage}`, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let newBody = [
      body.slice(0, body.indexOf('</head>')),
      `<style>
      .is-hover {
        background-image: none;
        background-color: rgba(35, 175, 209, .4) !important;
        cursor: pointer;
      }
      </style>`,
      body.slice(body.indexOf('</head>'), body.indexOf('</body>')),
      `<script>
        let body = document.querySelectorAll('body')[0]
        body.addEventListener('mouseover', e => {
          let element = e.target
          let hoverElements = document.querySelectorAll('.is-hover')

          for(let hoverElement of hoverElements) {
            hoverElement.classList.remove('is-hover')
          }
          element.classList.add('is-hover')
        })

        body.addEventListener('click', e => {
          let element = e.target
          let spmPreviewElements = document.querySelectorAll('.spm-preview-target')

          for(let spmPreviewElement of spmPreviewElements) {
            spmPreviewElement.classList.remove('spm-preview-target')
          }
          element.classList.add('spm-preview-target')
          let classes = element.classList
          console.log(classes);
          let pageElement = document.querySelectorAll('input[name=page-element]')[0]
          console.log(pageElement)
          // pageElement.value = classes
        })
      </script>`,
      body.slice(body.indexOf('</body>'))
    ].join('');
    res.send(newBody)
    // console.log(body) // Show the HTML for the Google homepage.
  }
})


})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

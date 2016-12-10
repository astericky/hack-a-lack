const express = require('express')

const port = 3000

let app = express()


app.use(express.static(`${__dirname}/public`))
app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

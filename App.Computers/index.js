
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Computers')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

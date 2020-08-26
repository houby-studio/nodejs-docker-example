
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

// Variables
const computersApp = 'http://localhost:3002/'
const usersApp = 'http://localhost:3001/'

// app.get('/', (req, res) => {
//   let response = '<h1>DashBoard</h1>'
//   axios.get(computersApp).then(result => {
//     console.log('Computer data fetched successfully.')
//   }).catch(error => {
//     console.log('Computer data fetch failed with error: ' + error)
//   }).then(computer => {
//     response += `<p>${computer}</p>`
//     axios.get(usersApp).then(result => {
//       console.log('User data fetched successfully.')
//     }).catch(error => {
//       console.log('Computer data fetch failed with error: ' + error)
//     }).then(user => {
//       response += `<p>${user}</p>`
//       res.send(response)
//     })
//     })
// })

// app.get('/', (req, res) => {
//   axios.all([
//     axios.get(computersApp),
//     axios.get(usersApp)
//   ]).then(responseArray => {
//     console.log(responseArray[0].data)
//     console.log(responseArray[1].data)
//   })
// })

app.get('/', (req, res) => {
  axios({
    method: 'get',
    url: `http://${process.env.COMPUTERNAME}:3000/test`
  })
    .then(function (response) {
      console.log(response)
      res.send('Hello from root')
    });
})

app.get('/test', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

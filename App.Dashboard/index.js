
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

// Module Computers and Users are currently working on same machine
// TODO: Do it correctly for kubernetes cluster
const computersApp = `http://${process.env.COMPUTERNAME}.${process.env.USERDNSDOMAIN}:3002/`
const usersApp = `http://${process.env.COMPUTERNAME}.${process.env.USERDNSDOMAIN}:3001/`

// Create axios httpClient instance and set timeout to prevent long requests when other components are not responding
const httpClient = axios.create();
httpClient.defaults.timeout = 1000;

// Root path will fetch data from Computers and Users and respond with simple HTML page
app.get('/', (req, res) => {
  let response = '<h1>DashBoard</h1>'
  axios.all([
    httpClient.get(computersApp),
    httpClient.get(usersApp)
  ]).then(responseArray => {
    response += `<p>${responseArray[0].data}</p><p>${responseArray[1].data}</p>`
    res.send(response)
  }).catch(error => {
    response += `<p>Failed to fetch data</p><p>${error}</p>`
    res.send(response)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

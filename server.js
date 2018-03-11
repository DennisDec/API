// import express and create a server
const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

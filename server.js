// import express and create a server
const express = require('express')
const app = express()

// import mongoose
const mongoose = require('mongoose')

// connect to a mongo database
mongoose.connect('mongodb://testmongodb01:testmongodb01test@ds111299.mlab.com:11299/node_api_test')

// check mongo connection
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("DB connection alive")
})

// set port
const port = process.env.PORT || 8080

// listen on the port set before
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

// EXPRESS SERVER
/**************************************************************************************************/
// import express and create a server
const express = require('express')
const app = express()

// MONGO DATABASE
/**************************************************************************************************/
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

// API-ROUTES
/**************************************************************************************************/
// create our router
var router = express.Router()

// middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Progress...')
	next()
})

// test the api-route
router.get('/', function(req, res) {
	res.json({ message: 'Welcome to our api!' })
})

// prefix all routes with /api
app.use('/api', router)

// START SERVER
/**************************************************************************************************/
// set port
const port = process.env.PORT || 8080

// listen on the port set before
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

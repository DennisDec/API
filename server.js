// EXPRESS SERVER
/**************************************************************************************************/
// import express and create a server
const express = require('express')
const app = express()

// PARSE MIDDLEWARE
/**************************************************************************************************/
// import body-parser
const bodyParser = require('body-parser')

// use body-parser to parse middleware to JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

// import the schema for the api objects and create /api/users route
var User = require('./mongo/user')
router.route('/users')

// create a user by a POST-method (accessed at POST http://localhost:8080/users)
	.post(function(req, res) {
		var user = new User()		           // create a new instance of the User model
		user.name = req.query.name         // set the users name (comes from the request)
		user.save(function(err) {
			if (err)
				res.send(err)
			res.json({ message: 'User created!' })
		})
	})

	// get all usersby a GET-method (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res) {
		User.find(function(err, users) {   // search for every User
			if (err)
				res.send(err)
			res.json(users)
		})
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

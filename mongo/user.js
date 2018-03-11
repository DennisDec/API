// import mongoose
const mongoose = require('mongoose')

// create new schema for the api objects
var Schema = mongoose.Schema
var UserSchema   = new Schema({
	name: String
})

// export the new schema
module.exports = mongoose.model('User', UserSchema)

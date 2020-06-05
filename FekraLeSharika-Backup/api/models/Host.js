const mongoose = require('mongoose');

const hostSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {
		type: String, 
		required: true, 
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},// unique doesnt add validation, only enhances search time
	password: {type: String, required: true},
	hostImage: {type: String, required: true},
	phoneNumber: {type: Number, required: true},//may need to change this to int ---------------------->
	
	venmo: {type: Boolean, required: true},
	bankAccount: {type: Boolean, required: true},// link it with Plaid
	autoApprove: {type: Boolean, required: true}




});


module.exports = mongoose.model('Host', hostSchema);
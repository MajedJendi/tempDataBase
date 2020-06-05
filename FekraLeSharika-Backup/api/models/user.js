const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {
		type: String, 
		required: true, 
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},// unique doesnt add validation, only enhances search time
	password: {type: String, required: false},
	phoneNumber: {type: Number, required: false}//may need to change this to int ---------------------->


});


module.exports = mongoose.model('User', userSchema);
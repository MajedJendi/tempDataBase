const mongoose = require('mongoose');

const parkingSpotSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	hourlyRate: {type: Number, required: true},
	dailyMaxRate: {type: Number, required: true},
	weeklyRate: {type: Number, required: true},
	monthlyRate: {type: Number, required: true},

	covered: {type: Boolean, required: true},
	camera: {type: Boolean, required: true},
	gated: {type: Boolean, required: true},
	guarded: {type: Boolean, required: true},
	charging: {type: Boolean, required: true},
	Type: {type: String, required: true},// Either driveWay, garage, parkingLot, 
	size: {type: String, required: true},// Either small, midSize, large, oversized
	about: {type: String, required: true},
	instructions: {type: String, required: true},

	instantBooking: {type: Boolean, required: false},
	//Maybe add lit, I dont think its necessary
	
	//parkingSpotImage: {type: String, required: true},// How do I make this an array of images
	images : {
	    type: Map,
	    of: String
	 }
	
	
	residential: {type: Boolean, required: true},
	business: {type: Boolean, required: true},
	multiUnit: {type: Boolean, required: true},
	unitNum: {type: Boolean, required: false},
	
	spacesAvailable: {type: Number, required: true},
	is24HRS: {type: Boolean, required: true},
	sameDayRes: {type: Boolean, required: true}

});

module.exports = mongoose.model('parkingSpot', parkingSpotSchema);
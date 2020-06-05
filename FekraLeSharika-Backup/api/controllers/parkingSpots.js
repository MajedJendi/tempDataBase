const parkingSpot = require('../models/parkingSpot');
const mongoose = require('mongoose');


exports.create_parkingSpot = (req, res, next) => {
	console.log(req.file);
	const parkingSpot = new parkingSpot({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
		parkingSpotImage: req.file.path
	});
	//save and print the message coming
	parkingSpot
		.save()
		.then( result =>
		{
			console.log(result);
			res.status(200).json({
				message: 'Created a parkingSpot successfully',
				createdProduct: {
					name: result.name,
					price: result.price,
					_id: result.id,
					request: {
						type: 'GET',
						url: 'http://localhost:3000/parkingSpots/' + result._id
					}
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});	
}


exports.get_all_parkingSpots = (req, res, next) => {
	parkingSpot.find()
		.select('name price parkingSpotImage _id ')// specifying what data exactly you want to see about a parkingSpot
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				parkingSpots: docs.map(doc => {
					return {
						name: doc.name,
						price: doc.price,
						parkingSpotImage: doc.parkingSpotImage,
						_id: doc._id,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/parkingSpots/' + doc._id
						}
					};
				})
			};
			res.status(200).json(response);
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({error: err});
		});
}

exports.get_specific_parkingSpot = (req, res, next) => {
	const id = req.params.parkingSpotId;
	parkingSpot.findById(id)
		.select('name price _id parkingSpotImage')
		.exec()
		.then(doc => {
			console.log()
			if(doc) {
				res.status(200).json({
					parkingSpot: doc,
					request: {
						type: 'GET',
						message: 'GET all parkingSpots here',
						url: 'http://localhost:3000/parkingSpots/'
					}
				});
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({error: err});
		});
}


exports.edit_parkingSpot = (req, res, next) => {
	const id = req.params.parkingSpotId;
	const updateOps = {};
	//checking which fields got changed
	// looping through all the ops of the request body
	for (const ops of req.body) {
		 updateOps[ops.propName] = ops.value;
	}
	Product.update({_id: id}, {$set: updateOps})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Product Updated',
				request: {
					type: 'GET',
					message: 'Checkout the updated parkingSpots here',
					url: 'http://localhost:3000/parkingSpots/' + id
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}

exports.delete_parkingSpot = (req, res, next) => {
	const id = req.params.parkingSpotId;
	parkingSpot.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'parkingSpot deleted',
				url: 'http://localhost:3000/parkingSpots/',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}


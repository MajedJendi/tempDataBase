const Product = require('../models/product');
const mongoose = require('mongoose');


exports.create_product = (req, res, next) => {
	console.log(req.file);
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
		productImage: req.file.path
	});
	//save and print the message coming
	product
		.save()
		.then( result =>
		{
			console.log(result);
			res.status(200).json({
				message: 'Created a product successfully',
				createdProduct: {
					name: result.name,
					price: result.price,
					_id: result.id,
					request: {
						type: 'GET',
						url: 'http://localhost:3000/products/' + result._id
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


exports.get_all_products = (req, res, next) => {
	
	console.log('at products conroller');

	Product.find()
		.select('name price productImage _id')// specifying what data exactly you want to see about a product
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				products: docs.map(doc => {
					return {
						name: doc.name,
						price: doc.price,
						productImage: doc.productImage,
						_id: doc._id,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/products/' + doc._id
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

exports.get_specific_product = (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id)
		.select('name price _id productImage')
		.exec()
		.then(doc => {
			console.log()
			if(doc) {
				res.status(200).json({
					product: doc,
					request: {
						type: 'GET',
						message: 'GET all products here',
						url: 'http://localhost:3000/products/'
					}
				});
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({error: err});
		});
}


exports.edit_product = (req, res, next) => {
	const id = req.params.productId;
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
					message: 'Checkout the updated product here',
					url: 'http://localhost:3000/products/' + id
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

exports.delete_product = (req, res, next) => {
	const id = req.params.productId;
	Product.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Product deleted',
				url: 'http://localhost:3000/products/',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}


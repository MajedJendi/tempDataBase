const Order = require('../models/order');
const Product = require('../models/product');

//exports.WhateverFieldNameYouWish
exports.orders_get_all = (req, res, next) => {
	Order.find()
	//.select('name price _id')// specifying what data exactly you want to see about a product
	.exec()
	.then(docs => {
		const response = {
			count: docs.length,
			orders: docs.map(doc => {
				return {
					_id: doc._id,
					product: doc.product,
					quantity: doc.quantity,
					request: {
						type: 'GET',
						message: 'View the details of this specific order here',
						url: 'http://localhost:3000/orders/' + doc._id
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

exports.create_an_order = (req, res, next) => {
	Product.findById(req.body.productId)
	.then( product => {
		if(!product) {
			return res.status(404).json({
				message: "Product not found"
			});
		}
		const order = new Order({
			_id: mongoose.Types.ObjectId(),
			product: req.body.productId,
			quantity: req.body.quantity,
			userId: doc.userId// continue here
		});
		return order.save();
	})
	.then( result => {
		console.log(result);
		res.status(200).json({
			message: 'Order stored',
			createdOrder: {
				_id: result.id,
				product: result.product,
				quantity: result.quantity
			},
			request: {
				type: 'GET',
				message: 'Check all your updated order list in this link',
				url: 'http://localhost:3000/orders/' + result._id
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

exports.get_a_specific_order = (req, res, next) => {
	console.log('here is your order');
	const id = req.params.orderId;
	Order.findById(id)
		//.select('product quantity _id')
		.exec()
		.then(order => {
			if(!order) {
				return res.status(404).json({
					message: "Order not found"
				});
			}
			res.status(200).json({
				order: order,
				request: {
					type: 'GET',
					message: 'View all your orders here',
					url: 'http://localhost:3000/orders/'
				}
			});
			
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({error: err});
		});
}

exports.delete_order = (req, res, next) => {
	const id = req.params.orderId;
	Order.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Order deleted, view the updated order list here',
				url: 'http://localhost:3000/orders/',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}


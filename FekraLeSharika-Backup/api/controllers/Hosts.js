const Host = require('../models/host');
const mongoose = require('mongoose');
	

 exports.host_signup = (req, res, next) => {
	
	// Making sure we assign the password after the hashing succeeds
		
		Host.find({email: req.body.email})
		.exec()
		.then(host => {
			if(host.length >= 1) {
				return res.status(409).json({
					message: "This email already exists"
				});
			} else {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
		
					if(err) {
						return res.status(500).json({
							error: err
						});		
					} else {
						const host = new Host({
							_id: new mongoose.Types.ObjectId(),
							email: req.body.email,
							//10 is a seed that adds random strings to the password
							password: hash
						});
						host
							.save()
							.then(result => {
								console.log(result);
								res.status(201).json({
									message: 'Host created successufly!'
								});
							})
							.catch(err => {
								console.log(err);
								res.status(500).json({
									error: err
								});
							});					
					}
				})
			}
		});
}
 
exports.host_login = (req, res, next) => {
		
		// Making sure we assign the password after the hashing succeeds
		Host.find({email: req.body.email})
		.exec()
		.then(host => {
			if(host.length < 1) {
				return res.status(401).json({
					message: "Auth failed"
				});
			} 
			bcrypt.compare(req.body.password, host[0].password, (err, result) => {

				if(!result || err) {
					return res.status(401).json({
						message: "Auth failed"
					});		
				} else {
					const token = jwt.sign({
							email: host[0].email,
							hostId: host[0]._id
						}, 
						process.env.JWT_KEY,
						{
							expiresIn: "1h"
						}
					);
					return res.status(200).json({
						message: "Auth successful",
						token : token
					});
				}
			})
			
		});
}



exports.host_delete = (req, res, next) => {
	const id = req.params.hostId;
	Host.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Host deleted',
				url: 'http://localhost:3000/hosts/',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
}
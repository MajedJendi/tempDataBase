//	 	console.log(req.body.email);
//	 	
//		User.find({email: req.body.email})
//		.exec()
//		.then(user => {
//			if(user.length >= 1) {
//				return res.status(409).json({
//					message: "This email already exists"
//				});
//			} else {
//				
//				User.find({phone: req.body.phone})
//				.exec()
//				.then(user => {
//					if(user.length >= 1) {
//						return res.status(408).json({
//							message: "This phone already exists"
//						});
//					} else {
//						
//						bcrypt.hash(req.body.password, 10, (err, hash) => {
//				
//							if(err) {
//								return res.status(500).json({
//									error: err
//								});		
//							} else {
//								// Adding through fire base
//						
//	
//								
//								const user = new User({
//									_id: new mongoose.Types.ObjectId(),
//									email: req.body.email,
//									//10 is a seed that adds random strings to the password
//									password: hash
//								});
//								user
//									.save()
//									.then(result => {
//										console.log(result);
//										res.status(201).json({
//											message: 'User created successufly!'
//										});
//									})
//									.catch(err => {
//										console.log(err);
//										res.status(500).json({
//											error: err
//										});
//									});					
//							}
//						})
//					}
//				})
//			}	
//		});


	
//		// Making sure we assign the password after the hashing succeeds
//		User.find({email: req.body.email})
//		.exec()
//		.then(user => {
//			if(user.length < 1) {
//				return res.status(401).json({
//					message: "Auth failed, here"
//				});
//			} 
//			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//				
//				if(!result || err) {
//					return res.status(401).json({
//						
//						message: "Auth failed, wrong password"
//					});		
//				} else {
//					const token = jwt.sign({
//							email: user[0].email,
//							userId: user[0]._id
//						}, 
//						process.env.JWT_KEY,
//						{
//							expiresIn: "1h"
//						}
//					);
//					return res.status(200).json({
//						message: "Auth successful",
//						token : token
//					});
//				}
//			})
			
//		});
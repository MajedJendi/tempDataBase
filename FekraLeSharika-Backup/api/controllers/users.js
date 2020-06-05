const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { parse } = require('querystring');
const nodemailer = require("nodemailer");
const PassThrough = require('stream').PassThrough;


const companyEmail = 'majed.jendi@gmail.com';
const companyEmailPassword = 'ZEYAD1958';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: companyEmail,//how do I keep this as secret?
	  pass: companyEmailPassword,//how do I keep this as secret?
	},
});
const fs = require('fs');

const aws_access_key_id = "AKIA6BGTFVX3EAMMACWL";
const aws_secret_access_key = "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";
var AWS = require('aws-sdk');
AWS.config.update({region : 'us-east-2', accessKeyId: aws_access_key_id, secretAccessKey: aws_secret_access_key})


 exports.get_specific_user = (req, res, next) => {
	 	console.log
		const id = req.params.userId;
		User.findById(id)
			.select('email _id')
			.exec()
			.then(doc => {
				console.log()
				if(doc) {
					res.status(200).json({
						user: doc,
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

 
 
 
 exports.get_all_users = (req, res, next) => {
	 
	console.log('at Users conroller');

	User.find()
		.select('email _id password')// specifying what data exactly you want to see about a product
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				users: docs.map(doc => {
					return {
						//name: doc.name,
						email: doc.email,
						_id: doc._id,
						password: doc.password,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/users/' + doc._id
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

 
 exports.user_logout = (req, res, next) => {

	console.log("*******Here at logout");
	return res.status(200).json({
		message: "Successfully logged out"
	});
	//  var user = firebase.auth().onAuthStateChanged;
	 	 
	//  if (user) {
	// 	 firebase.auth().signOut().then(function() {
	// 		  console.log('Signed Out');
	// 			return res.status(200).json({
	// 				message: "Success logout"
	// 			});
	// 		}, function(error) {
	// 		  console.error('Sign Out Error', error);
	// 		});
		 
		
	//  } else {
	//    // No user is signed in.
	// 		return res.status(409).json({
	// 			message: "This user is not signed in"
	// 		});
	//  }
 }
 

  exports.user_signup = (req, res, next) => {

	console.log("******at user signup*****");
	console.log(req.body.email);
	var emailExists = true;
	var s3 = new AWS.S3();
	var params = {Bucket: 'user-sign-up/users', Key: req.body.email};
	s3.headObject(params).on('success', function(response) {
		console.log("Key was", response.request.params.Key);

	}).on('error', function(error){
		emailExists = false;
		console.log("doesnt exist");
		 //error return a object with status code 404
	}).send(function() {
		if(!emailExists) {
			var bucketName = 'user-sign-up/users';
			// Create params for putObject call
			console.log(req.body.password);

			bcrypt.hash(req.body.password, 10, async function(err, hash) {
				// Store hash in database
				req.body.password = hash;
				console.log(JSON.stringify(req.body));
				var objectParams = {Bucket: bucketName, Key: req.body.email, Body: JSON.stringify(req.body)};
				// Create object upload promise

				const getParams = {
					Bucket: 'user-sign-up',
					Key: '270HW1Sol.pdf'
				};

				s3.getObject(getParams, async function(err, data) {
					if (err){
						console.error(err, err.stack);
						return res.status(400).send({success:false,err:err});
					} else {

						console.log("-----got the pdf file------");
						let info = await transporter.sendMail({
						from: '"' + companyEmail + '" <' + companyEmail + '>', // sender address
						to: req.body.email, // list of receivers
						subject: "The Chai of  wins the prize👻", // Subject line
						text: "of the worst in the world", // plain text body
						html: `<b>Hello from ${req.body.email} world?</b>`,
						attachments: [
							{
								filename: '270HW1Sol.pdf',
								contentType: 'application/pdf',
								content: data.Body.toString('base64'),
								encoding: 'base64'
							}
						]
						});	
						return res.send(data.Body);
					}
				});

				var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
				uploadPromise.then(function(data) {
					console.log("Successfully uploaded data to " + bucketName + "/" + req.body.email);
					return res.status(200).json({
						message: "Successfully registered the user"
					});
				}).catch(
					function(err) {
						console.error(err, err.stack);
						return res.status(600).json({
							message: "Please verify your email first before logging in"
						});
				});
			});
		}
	});
}
 

// const token = jwt.sign({
// 	email: user[0].email,
// 	userId: user[0]._id
// }, 
// process.env.JWT_KEY,
// {
// 	expiresIn: "1h"
// }
// );
// return res.status(200).json({
// message: "Auth successful",
// token : token
// });


exports.user_login = (req, res, next) => {
	var s3 = new AWS.S3();
	var getParams = {
		Bucket: 'user-sign-up/users',
		Key: req.body.email
	};

	s3.getObject(getParams, async function(err, data) {
		if (err){
			console.error(err, err.stack);
			return res.status(400).send({success:false,err:err});
		} else {
			console.log("Key is : " + data.Body);
			var userProfile = JSON.parse(data.Body);
			var hashedPass = userProfile.password;
			console.log("hashed pass: " + hashedPass);

			bcrypt.compare(req.body.password, hashedPass, (err, result) => {
				if(!result || err) {
					console.log("passwords dont match");
					return res.status(401).json({
						message: "Auth failed"
					});		
				} else {
					console.log("Successuful unhashing");
					const token = jwt.sign({
							email: req.body.email,
						}, 
						process.env.JWT_KEY,
						{
							expiresIn: "1h"
						}
					);
					console.log("token: " + token);
					return res.status(200).json({
						message: "Auth successful",
						token : token
					});
				}
			})
		}
	});
}



exports.user_delete = (req, res, next) => {
	
	console.log("-----------Here at delete------------");
	// admin.auth().getUserByEmail(req.body.email)
	// .then(function(userRecord){
	// 	   admin.auth().deleteUser(userRecord.uid)
	// 	  .then(function() {
	// 	    console.log('Successfully deleted user');
	// 		return res.status(200).json({
	// 			message: "Successfully deleted user"
	// 		});
	// 	  })
	// 	  .catch(function(error) {
	// 			return res.status(409).json({
	// 				message: error
	// 			});
	// 	  });
	// }).catch(function(error){
	// 	return res.status(409).json({
	// 		message: error
	// 	});
	// });

}



//admin.auth().getUserByEmail(req.body.email)
//.then(function(userRecord) {
//  // See the UserRecord reference doc for the contents of userRecord.
//  console.log("Successfully fetched user data:", userRecord.toJSON());
//  console.log("UID: " + userRecord.uid);
//  
//	admin.auth().createCustomToken(uid)
//	  .then(function(customToken) {
//	    // Send token back to client
//		  
//	  })
//	  .catch(function(error) {
//	    console.log('Error creating custom token:', error);
//	  });
//  
//})
//.catch(function(error) {
//  console.log("Error fetching user data:", error);
//});
//

	


//	admin.auth().createUser({
//		  email: req.body.email,
//		  emailVerified: false,
//		  phoneNumber: req.body.phone,
//		  password: req.body.password,// change to hash if neccessary
//		  displayName: req.body.name,
//		  disabled: false
//		})





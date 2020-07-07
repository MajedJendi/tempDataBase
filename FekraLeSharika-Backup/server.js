const http = require('http');
const express = require('express');
const next = require('next');
const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const morgan = require('morgan');
const bodyParser = require('body-parser');
const ReactDOMServer = require('react-dom');
const { parse } = require('querystring');

// const Album = require("./components/Album");

app
	.prepare()
	.then( () => {
		const server = express();
		const userRoutes = require('./api/routes/users');				
		server.listen(PORT, err => {
			if(err) throw err;
			console.log('> Ready on ${PORT}');
		});
		
		

		// mongoose.connect('mongodb+srv://jendi:01230123098@cluster0-mmqyi.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true } );

		//mongoose.Promise = global.Promise;

		
		server.use(morgan('dev'));
		server.use('/media', express.static('media'));
		server.use(bodyParser.urlencoded({extended: false}));
		server.use(bodyParser.json()); 

		

		//Handling CORS errors to give access to different servers
		// Change access to only you -> origin
		server.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "origin");
			res.header(
				"Access-Control-Allow-Headers",
				"Origin, X-requested-With, Content-Type, Accept, Authorization"
			);
			
			if(req.method == 'OPTIONS') {
				res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
				return res.status(200).json({});
			}
			next();
		});	
		

		
		
//		server.get("/index", (req, res) =>  {
//			let actualPage s= "/index";
//			let queryParams = {title: req.params.slug}
//			app.render(req, res, actualPage, queryParams);
//		});


		// server.set('views', __dirname + '/views');
		// server.set('view engine', 'js');
		// server.engine('js', require('express-react-views').createEngine());


		server.use('/users', userRoutes);


		// To be removed
		const aws_access_key_id = "AKIA6BGTFVX3EAMMACWL";
		const aws_secret_access_key = "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";
		var AWS = require('aws-sdk');
		AWS.config.update({region : 'us-east-2', accessKeyId: aws_access_key_id, secretAccessKey: aws_secret_access_key})


		// server.get('/marketing' , async function(req, res) {
		// 	var s3 = new AWS.S3();
		// 	var params = {Bucket: 'user-sign-up', Prefix: 'resources/Marketing'};
		// 	let categoryFolder = await s3.listObjectsV2(params).promise();

		// 	var posts = [];

		// 	for(var i = 1; i < categoryFolder.KeyCount; i += 3) {
		// 		var newBucket = categoryFolder.Contents[i].Key.substring(0, categoryFolder.Contents[i].Key.length - 1);
		// 		console.log("newBucket: " + newBucket);
		// 		params = {Bucket: 'user-sign-up/' + newBucket, Key: 'info.txt'};
		// 		info = await s3.getObject(params).promise();
		// 		infoJson = JSON.parse(info.Body.toString());
		// 		const imgURL = s3.getSignedUrl('getObject', {
		// 			Bucket: 'user-sign-up/resources/Marketing/Paved',
		// 			Key: 'thumbnail.png',
		// 			Expires: 142662
		// 		});
		// 		infoJson["imgURL"] = imgURL;
		// 		posts[i] = infoJson;
		// 	}
		

		


		// 	// res.render("Album", {posts: posts});
		// });

		
		server.get("*", (req, res) => {
			return handle(req, res);
		});


		// Handling all other requests that dont relate to any routes
		server.use((req, res, next) => {
			const error = new Error('We dont have this page yet');
			error.status = 404;
			next(error);
		});

		// Handles any thrown error in this application
		server.use((error, req, res, next) => {
			res.status(500);
			res.json({// returning a json as a response to the error
				error: {
					message: error.message
				}
			});
		});
		
	
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});


//server.listen(port);
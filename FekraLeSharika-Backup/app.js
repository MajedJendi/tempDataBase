//node --experimental-modules my-app.mjs


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ReactDOMServer = require('react-dom');
//const Index = require('./pages/index');

//import * as express from 'express';


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users');
//const index = require('./pages/index');


mongoose.connect('mongodb+srv://jendi:01230123098@cluster0-mmqyi.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true } );

//mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/media', express.static('media'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

//Handling CORS errors to give access to different servers
// Change access to only you -> origin
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "origin");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-requested-With, Content-Type, Accept, Authorization"
	);
	
	if(req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).jso({});
	}
	next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);



// Handling all other requests that dont relate to any routes
app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

// Handles any thrown error in this application
app.use((error, req, res, next) => {
	res.status(500);
	res.json({// returning a json as a response to the error
		error: {
			message: error.message
		}
	});
});




module.exports = app;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {	
		const token = req.body.token;
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.userData = decoded;
		console.log("Auth successfull");
		next();
	} catch(error) {
		console.log("Auth failed");
		return res.status(401).json({
			message: "Auth failed"
		});
	}
};

const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../routes/middleware/check-auth');
const parkingSpotController = require('../controllers/parkingSpots');

// filtering the uploaded pics, needs to be debugged, prevents
// BUG: all pics from being uploaded

//const daFileFilter = (req, file, cb) => {
//	if(file.mimtype === 'image/jpeg' || file.mimetype === 'image/png') {
//		cb(null, true);
//	} else {
//		cb(null, false);
//	}
//}

const upload = multer({
	  storage: multer.diskStorage({
	    destination: (req, file, cb) => {
	      cb(null, './media/')
	    },
		filename: function(req, file, cb) {
			cb(null, file.originalname);// you concatinate  Date.now() to the file name
		}
	  }),
	  limits: {
		  fileSize: 1024 * 1024 * 5 // limit to 5 MB
	  }
	 // fileFilter: daFileFilter
});

//const upload = multer({storage: storage});// specify a folder where the parsed images are stored


// create a new parkingSpot
router.post('/', checkAuth, upload.single('parkingSpotImage'), parkingSpotController.create_parkingSpot);

// sends back an array with all the parkingSpots
// Add Auth ------------------------------->
router.get('/', parkingSpotController.get_all_parkingSpots);

router.get('/:parkingSpotId', parkingSpotController.get_specific_parkingSpot);

router.patch('/:parkingSpotId', checkAuth, parkingSpotController.edit_parkingSpot);

router.delete('/:parkingSpotId', checkAuth, parkingSpotController.delete_parkingSpot);


module.exports = router;






const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../routes/middleware/check-auth');
const productController = require('../controllers/products');


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

console.log('at products router');

// create a new product
router.post('/', checkAuth, upload.single('productImage'), productController.create_product);

// sends back an array with all the products
// Add Auth ------------------------------->

router.get('/', productController.get_all_products);

router.get('/:productId', productController.get_specific_product);

router.patch('/:productId', checkAuth, productController.edit_product);

router.delete('/:productId', checkAuth, productController.delete_product);


module.exports = router;






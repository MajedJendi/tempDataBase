var express = require("express");
const router = express.Router();
var multer = require("multer");



	

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}_${+new Date()}.jpg`);
	}
});
const upload = multer({
	storage
});

const PhotosController = require('../controllers/photos');

router.get('/', PhotosController.get_photo);
router.post('/add', upload.single("photo"), PhotosController.post_photo);
router.put('/edit', upload.single("photo"), PhotosController.edit_photo);
router.delete('/delete/:id', PhotosController.delete_photo);

module.exports = router;

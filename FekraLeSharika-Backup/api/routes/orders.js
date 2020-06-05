const express = require('express');
const router = express.Router();

const checkAuth = require('../routes/middleware/check-auth');
//import controller
const OrderController = require('../controllers/orders');

router.post('/', checkAuth, OrderController.create_an_order);

router.get('/:orderId', checkAuth, OrderController.get_a_specific_order);

router.get('/', checkAuth, OrderController.orders_get_all);

router.delete('/:orderId', checkAuth, OrderController.delete_order);

//To be implemented--------------------->
router.patch('/:orderId', checkAuth, (req, res, next) => {
	res.status(200).json({
		message: 'Updated orders!'
	});
});


module.exports = router;






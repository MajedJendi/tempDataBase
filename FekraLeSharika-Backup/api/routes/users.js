const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passport = require('passport');
const checkAuth = require('../routes/middleware/check-auth');
const userController = require('../controllers/users');

router.post('/signup', userController.user_signup);
router.get('/:userId', userController.get_specific_user);
router.get('/', userController.get_all_users);
router.post('/login', userController.user_login);
router.post('/logout', checkAuth, userController.user_logout);
router.delete('/delete', checkAuth, userController.user_delete);

module.exports = router;

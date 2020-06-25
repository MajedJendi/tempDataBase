const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Host = require('../models/host');

const checkAuth = require('../routes/middleware/check-auth');

const hostController = require('../controllers/hosts');

router.post('/signup', hostController.host_signup);

router.post('/login', hostController.host_login);

router.delete('/:hostId', checkAuth, hostController.host_delete);

module.exports = router;

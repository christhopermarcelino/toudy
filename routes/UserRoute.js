const express = require('express');
const router = express.Router();

const { register, login, getUser } = require('../controller/UserController');

router.post('/register', register);
router.post('/login', login);
router.post('/get-info', getUser);

module.exports = router;

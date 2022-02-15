const express = require('express');
const router = express.Router();

const { createUser, getUser } = require('../controller/UserController');

router.post('/register', createUser);
router.post('/login', getUser);

module.exports = router;

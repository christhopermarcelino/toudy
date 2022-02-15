const express = require('express');
const router = express.Router();

const { createUser, getUser } = require('../controller/UserController');

router.post('/create', createUser);
router.post('/get-info', getUser);

module.exports = router;

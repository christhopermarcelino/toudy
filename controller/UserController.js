const jwt = require('jsonwebtoken');

const { User } = require('../models');

const createUser = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400).json({
      success: false,
      message: 'Username, password, and email are required',
    });
    return;
  }

  try {
    await User.create({ username, email, password });
    res.status(201).json({ success: true, message: 'User created' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getUser = async (req, res) => {
  const { username: user_name, password } = req.body;

  if (!user_name || !password) {
    res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
    return;
  }

  try {
    const user = await User.findOne({ where: { username: user_name } });

    if (user.password != password) {
      res.status(403).json({
        success: false,
        message: 'Username or password invalid',
      });
      return;
    }
    const { username, fullname, email, institusi } = user;

    const token = await jwt.sign(
      { username, fullname, email, institusi },
      process.env.JWT_SECRET
    );

    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createUser, getUser };

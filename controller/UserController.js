const jwt = require('jsonwebtoken');

const { User } = require('../models');

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      res.status(400).json({
        success: false,
        message: 'Username, password, and email are required',
      });
      return;
    }

    await User.create({ username, email, password });

    res.status(201).json({ success: true, message: 'User created' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username: user_name, password } = req.body;

    if (!user_name || !password) {
      res.status(400).json({
        success: false,
        message: 'Username and password are required',
      });
      return;
    }

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

const getUser = async (req, res) => {
  try {
    const auth = req.header('authorization');
    if (!auth.startsWith('Bearer ')) {
      res.status(400).json({ success: false, message: 'Token invali' });
    }
    const token = auth.split(' ')[1];

    const data = await jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { register, login, getUser };
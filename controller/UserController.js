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
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
    return;
  }

  try {
    const user = await User.findOne({ username: username });

    if (user.password != password) {
      res.status(403).json({
        success: false,
        message: 'Username or password invalid',
      });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createUser, getUser };

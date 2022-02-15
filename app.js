if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// const
const PORT = process.env.PORT || 3001;

// route
const UserRoute = require('./routes/UserRoute');

app.use('/api/user', UserRoute);

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Toudy Project' });
});

// db.sequelize
//   .sync({ force: true })
//   .then(async () => {
//     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
//   })
//   .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
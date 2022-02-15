if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

const { User } = require('./models');

// const
const PORT = process.env.PORT || 3001;

// route
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Toudy Project' });
});

db.sequelize
  .sync({ force: true })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

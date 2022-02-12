if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const db = require('./models');

// const
const PORT = process.env.PORT || 3001;

// route
app.get('/', (req, res) => {
  res.send('Toudy Project');
});

db.sequelize
  .sync({ force: true })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

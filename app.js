const express = require('express');
const app = express();

// const
const PORT = process.env.PORT || 3001;

// route
app.get('/', (req, res) => {
  res.send('Toudy Project');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

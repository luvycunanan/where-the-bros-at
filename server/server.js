const express = require('express');
const users = require('./routes/users')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/', users)

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
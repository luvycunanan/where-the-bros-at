const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/users'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));

module.exports = {
  User: require('./User')
};
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userData = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required:true
  }
})

module.exports = mongoose.model('UserData', userData);
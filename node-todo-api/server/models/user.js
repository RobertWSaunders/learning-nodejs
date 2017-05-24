const mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    require: true,
    trim: true,
    minlength: 1,
    type: String
  }
})

module.exports = {
  User
};

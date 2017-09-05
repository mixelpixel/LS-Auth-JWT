const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  // this is where we will hash the user's password
  // generate the salt and hash the password using bcrypt
});

UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  // use bcrypt to compare the potentialPassword with the user's password
};

module.exports = UserSchema;

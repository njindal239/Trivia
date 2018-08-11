const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Question = require('./question.js');

const NUM_SALT_ROUNDS = 10;

const UserSchema = mongoose.Schema({
  firstName: {type: String, required: "First Name cannot be blank!"},
  lastName: {type: String, required: "Last Name cannot be blank!"},
  age: {type: Number, min: [13, "This Trivia is only meant for individuals above 13"]},
  username: {type: String, required: "username cannot be blank!", unique: true},
  email: {type: String, required: "Email cannot be blank!", unique: true},
  password: {type: String, required: "Password cannot be blank!"},
  gameLife: {
    games_played: {type: Number, default: 0},
    questions_attempted: {type: Number, default: 0},
    questions_correct: {type: Number, default: 0},
    questions_incorrect: {type: Number, default: 0},
    net_points: {type: Number, default: 0},
    max_points: {type: Number, default: 0},
    percentage: {type: Number, default: 0}
  },
  questions: [Question.questionSchema]
});

UserSchema.pre('save', async function(next) {
  try {
    // only hash the password if it is new or has been modified.
    if (!this.isModified('password')) {
      return next();
    }
    let hash = await bcrypt.hash(this.password, NUM_SALT_ROUNDS);
    this.password = hash;
    return next();
  } catch(err) {
    return next(err);
  }
});

// Instance method on UserSchema
UserSchema.methods.comparePassword = async function (userPassword, next) {
  try {
    let isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch(err) {
    return next(err);
  }
}

module.exports = mongoose.model('User', UserSchema);

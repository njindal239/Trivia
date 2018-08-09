const mongoose = require('mongoose');

const questionSchema = {
  question: {type: String, required: true},
  correct_answer: {type: String, required: true},
  incorrect_answers: [{type: String}]
}
module.exports.questionSchema = questionSchema;

module.exports.Question = mongoose.model('Question', questionSchema);

const db = require('../models');

module.exports.addQuestion = async (req, res, next) => {
  try {
    const user = await db.User.findById(req.params.id);
    user.questions.push(req.body);
    user.save((err, user) => {
      if(err) {
        next(err);
        console.log("in this error");
      } else {
        res.status(201).json(user);
      }
    });
  } catch(err) {
    console.log("error state");
      // const err = new Error("User not found!");
      // err.status(400);
      next(err);
  }
}


module.exports.getQuestions = async (req, res, next) => {
  console.log("here");
  try {
    user = await db.User.findById(req.params.id);
    if (user.questions.length === 0) {
      let err = new Error("No questions in the favorite list!");
      err.status(400);
      console.log("another error state");
      return next(err);
    }
    return res.json(user.questions);
  } catch(err) {
    console.log("in error state");
    return next(err);
  }
}

const db = require('../models');

module.exports.addQuestion = async (req, res, next) => {
  try {
    console.log("here");
    const user = await db.User.findById(req.params.id);
    console.log(req.body);
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

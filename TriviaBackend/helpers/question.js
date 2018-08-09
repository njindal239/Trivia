const db = require('../models');

module.exports.addQuestion = async (req, res, next) => {
  try {
    const user = await db.User.findById(req.params.id);
    user.questions.push(req.body);
    user.save((err, user) => {
      if(err) {
        next(err);
      } else {
        res.status(201).json(user);
      }
    });
  } catch(err) {
      // const err = new Error("User not found!");
      // err.status(400);
      next(err);
  }


}

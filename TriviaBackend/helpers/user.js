const bcrypt = require('bcrypt');
const db = require('../models');
const jwt = require('jsonwebtoken');

const NUM_SALT_ROUNDS = 10;

exports.loginUser = async (req, res, next) => {
  try {
    let user = await db.User.findOne({username: req.body.username});
    let {_id, username, lastName} = user;
    let isValid = await user.comparePassword(req.body.password);
    if (isValid) {
      console.log("here");
      let token = jwt.sign({
        _id, username, lastName
      }, process.env.SECRET_KEY);
       req.session.user = user;
      return res.status(200).json(user);
    }
    else {
      return next({
        status: 400,
        message: "Password is incorrect!"
      });
    }
  } catch(err) {
    return next({
      status: 400,
      message: "Username is incorrect!"
    })
  }

}

exports.registerUser = async (req, res, next) => {
  try {
    let user = await db.User.create(req.body);
    let {_id, username, lastName} = user;
    // jwt.sign: 1st argument is payload, 2nd is SECRET_KEY
    let token = jwt.sign({
      _id, username, lastName
    }, process.env.SECRET_KEY);
    return res.status(201).json(user);

  } catch(err) {
    if (err.code === 11000) {   //err code is 11000 if a validation fails
      err.message = "Sorry, your username and/or email is taken!";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
}

exports.updateUserGameLife = async (req, res, next) => {
  const {max_points, correct_answers, incorrect_answers, points} = req.body;
  const numQuestions = max_points / 10;
  try {
    let user = await db.User.findOne({_id: req.params.id});
    updatedUser = await db.User.findByIdAndUpdate(req.params.id, {
      gameLife: {
        games_played: user.gameLife.games_played + 1,
        questions_attempted: user.gameLife.questions_attempted + numQuestions,
        questions_correct: user.gameLife.questions_correct + correct_answers,
        questions_incorrect: user.gameLife.questions_incorrect + incorrect_answers,
        net_points: user.gameLife.net_points + points,
        max_points: (user.gameLife.questions_attempted + numQuestions) * 10,
        percentage: ((user.gameLife.net_points + points) / ((user.gameLife.questions_attempted + numQuestions) * 10)) * 100
      }

    }, {new: true});
    return res.status(200).json(updatedUser);
  } catch(err) {
    return next({
      status: 400,
      message: err.message
    });
  }
}

exports.getUserGameLife = async (req, res, next) => {
  try {
    let user = await db.User.findById(req.params.id);
    return res.json(user.gameLife);
  } catch(err) {
    return next({
      status: 400,
      message: err.message
    })
  }
}

exports.getUsers = async (req, res, next) => {
  try {
    let users = await db.User.find({});
    return res.json(users);
  } catch(err) {
    return next({
      status: 400,
      message: err.message
    })
  }
}

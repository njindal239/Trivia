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
      let token = jwt.sign({
        _id, username, lastName
      }, process.env.SECRET_KEY);
      return res.status(200).json({_id, username, lastName, token});
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
    console.log(req.body);
    let user = await db.User.create(req.body);
    console.log(req.body);
    let {_id, username, lastName} = user;
    // jwt.sign: 1st argument is payload, 2nd is SECRET_KEY
    let token = jwt.sign({
      _id, username, lastName
    }, process.env.SECRET_KEY);
    return res.status(201).json({_id, username, lastName, token});

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

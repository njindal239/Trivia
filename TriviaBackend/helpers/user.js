const bcrypt = require('bcrypt');
const db = require('../models');

const NUM_SALT_ROUNDS = 10;

exports.loginUser = async (req, res) => {
  const user = await findUser(req.body.username);
  if (!user) {
    return res.json("No user with given username found!");
  }
  const isValid = await validateUserPassword(req.body.password, user.password);
  if (isValid) {
    req.session.user = user;
    res.json('Successfully logged in!!');
  } else {
    res.json("Incorrect password");
  }
}

exports.registerUser = async (req, res) => {
  let {firstName, lastName, age, username, email} = req.body;
  let password = await bcryptHash(req.body.password);
  let user = {firstName, lastName, age, username, email, password};
  console.log("password is: " + password);
  db.User.create(user)
  .then(user => {
    console.log("User successfully registered!");
    res.status(201).json(user);
  }).catch(err => {
    console.log("Error occurred while registering the user!!");
    console.log(err);
  });

}

const findUser = username => {
  return db.User.findOne({username})
  .then(user => user)
  .catch(err => console.log(err));
}

const validateUserPassword = (password, hash) => {
  return bcrypt.compare(password, hash)
  .then(res => (res ? true : false))
  .catch(err => console.log(err));
}

const bcryptHash = password => {
  return bcrypt.hash(password, NUM_SALT_ROUNDS)
  .then(hash => hash)
  .catch(err => console.log(err));
}

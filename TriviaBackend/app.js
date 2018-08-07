const app = require('express')();
const bodyParser = require('body-parser');
const helpers = require('./helpers/user.js');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "this user has been logged in",
  saveUninitialized: false,
  resave: false
}));


app.route('/login')
  .post(helpers.loginUser);

app.route('/register')
  .post(helpers.registerUser);


app.listen(3001, () => {
  console.log("Listening to port 3001");
});

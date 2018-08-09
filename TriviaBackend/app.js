require('dotenv').config();   // loads all the environment variables
const app = require('express')();
const bodyParser = require('body-parser');
const helpers = require('./helpers/user.js');
const session = require('express-session');
const errorHandler = require('./helpers/error.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(session({
  secret: "this user has been logged in",
  saveUninitialized: false,
  resave: false
}));


app.route('/login')
  .post(helpers.loginUser);

app.route('/register')
  .post(helpers.registerUser);

app.route('/users/:id')
	.put(helpers.updateUserGameLife)


app.use((req, res, next) => {
  let err = new Error("Not Found!");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(3001, () => {
  console.log("Listening to port 3001");
});

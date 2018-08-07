const app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/login', (req, res) => {

});

app.post('/register', (req, res) => {
  
});


app.listen(3001, () => {
  console.log("Listening to port 3001");
});

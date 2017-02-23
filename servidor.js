var express = require("express");
var app = express();
var path = require("path");

app.ser('port', (process.env.PORT || 5000))

//view engine setup
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
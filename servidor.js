var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

//view engine setup
app.set('views', __dirname + '/gh-pages');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/gh-pages'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
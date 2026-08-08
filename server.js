var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send('Express is working on IISNode!');
});
app.listen(process.env.PORT);
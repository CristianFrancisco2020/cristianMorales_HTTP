var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var form = require('fs').readFileSync("formulario.html");
const path = require('path');
require('./app/routes/customer.routes.js')(app);

// Create a Server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})

app.get('/index', function (req, res){
    res.sendFile(path.join(__dirname+'/formulario.html'));
     console.log("--->SERVER INICIADO");
   
})

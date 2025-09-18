var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    const fname = req.body.firstName; // matches form field
    const lname = req.body.lastName;  // matches form field

    const response = {
        firstName: fname,
        lastName: lname
    };

    console.log(response);

    res.send(`
        <h1>Your First Name is ${fname}</h1>
        <h1>Your Last Name is ${lname}</h1>
        <h3>JSON Response:</h3>
        <pre>${JSON.stringify(response)} hehehe</pre>
    `);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});

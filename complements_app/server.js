// complements server 

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3330;
var complementsNextId = 1; 
var complements = [];

app.use(bodyParser.json());


app.get('/', function (req, res) {
	res.send('Complement API Root');
});

// GET /complements
app.get('/complements', function(req, res){
    res.json(complements);
});

// GET /complements/:id
app.get('/complements/:id', function(req, res){
    // itterate over todo's array find the match 
    var complementId = parseInt(req.params.id, 10);
    var matchedComplement;
    complements.forEach(function(complement){
        if (complementId === complement.id){
            matchedComplement = complement;
            console.log(complement.description);
        }
    });
    
    if (matchedComplement) {
        res.json(matchedComplement);
    } else {
        res.status(404).send();
    }
    //res.send('Asking for todo with id of ' + req.params.id);
});

//POST /complements
app.post('/complements', function(req, res){
    var body = req.body;
    // add id field 
    body.id = complementsNextId;
    complementsNextId ++;
    // push body into array 
    complements.push(body);
    console.log('Description ' + body.description);
    console.log('ID: ' + body.id)
    res.json(body);
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
// complements server 

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3330;

var complements = [{
    id: 1,
    description: 'You look beautiful',
    completed: false
}, {
    id: 2,
    description: 'Miss you',
    completed: false
},{
    id: 3,
    description: 'Kises',
    completed: true
}];

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

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
var express = require('express')
var app = express()

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/analysis', function(req,res){
   res.render('analysis'); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Web started');
});
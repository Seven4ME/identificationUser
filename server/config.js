const express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'),function(){
    console.log('Express is started on port'+ ' ' + app.get('port'));
});
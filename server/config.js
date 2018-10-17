const express = require('express');
const index = require('../index.js');
const department = require('../jsonData/costumerDepartment.json');

var app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
    if(department.costumer == 1){
        res.send('sip must redirect call to support');
    }else if(department.costumer == 0){
        res.send('sip must redirect call to collection');
    }
})

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


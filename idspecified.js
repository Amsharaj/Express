const express = require("express")
var app= express();


app.get('/',function(req,res){
    res.send('This is Get URL')
})


// app.get('/:id',function(req,res){
//     res.send('This is you specified is '+req.params.id)
// })


// app.get('/things/:name/:id',function(req,res){
//     res.send('id: '+req.params.id+' and name: '+req.params.name)
// })

app.get('/things/:id([0-9]{5})',function(req,res){
    res.send('ID : '+req.params.id)
})

app.get("*",function(req,res){
    res.send('Sorry, this ia an invalid URL.')
})

 app.listen(8000)
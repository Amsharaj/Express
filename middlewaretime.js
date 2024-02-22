const express = require('express');
const app = express();


app.use('/things',function(req, res, next)  {
  console.log('Request for things received at '+Date.now());
  next();
});

app.get('/things',function(req,res){
    res.send("THINGS")
})

app.listen(8000)
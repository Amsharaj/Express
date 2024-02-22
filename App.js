const express = require('express');
const app = express();
const pug=require('pug')

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render(
        'index',
        {title: "PUG with express",message:"!---Hello A.AMSHARAJ---!"}
    )
})

app.listen(8000)
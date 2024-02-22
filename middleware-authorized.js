const express=require("express")
const app=express()


// const middlewarefunction=function(req,res,next){
//     const random=(min,max)=>Math.floor(Math.random()*(max-min)+min)
//     const isAuthenticated=random(0,2)
//     if(isAuthenticated)
//     next()
//     else res.send("User is not Authorized")

// }


const middlewarefunction=async function(req,res,next){
    const random=(min,max)=>Math.floor(Math.random()*(max-min)+min)
    await setTimeout(()=>{
    const isAuthenticated=random(0,2)
    if(isAuthenticated)
    next()
    else res.send("User is not Authorized")
},5000)

}

app.get('/',middlewarefunction,(req,res)=>{
    console.log("Inside the / route")
    res.send('Route hit')
})


app.get('/no-middleware',(req,res)=>{
    console.log("Inside the /no-middleware route")
    res.send('Route hit')
}) 

app.listen(3000,()=>{
    console.log("server started")
})
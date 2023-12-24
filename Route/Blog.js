const express=require("express")
const path=require("path")
const Router=express.Router();



Router.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    // res.send('This is working fine..!!!')
    res.render('home')
})

module.exports=Router
const express=require('express');
const bodyparser= require("body-parser");
const {checkSignupFormate}=require('../middleware/checkSignupFormate')
const {doesEmailExist}=require('../middleware/doesEmailExist')
const {login,logout,signup,forgatepwd}=require('../function/authentication')
const authentication=express.Router();

authentication.use(bodyparser.urlencoded({extended:true}));
authentication.use(express.static("public"));
authentication.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html");
})

authentication.post('/login',login)
authentication.get('/logout',logout)

authentication.get("/signup",function(req,res){
    res.sendFile(__dirname+"/signup.html");
   
})

authentication.post('/signup',checkSignupFormate,doesEmailExist,signup)
authentication.post('/forgatepwd',forgatepwd)
module.exports={authentication}
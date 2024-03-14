const { User } = require("../models/User");

const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");


//jwt use to validate user
var jwt = require('jsonwebtoken');

const login=async (req,res)=>{
    const password = req.body.Lname;
   
    const email = req.body.email;
    const users=await User.find({email});
    if(users.length==0)
    {
        return res.status(504).send("user not found")
    }
    let hashpwd=users[0].password;
    let response=await bcrypt.compare(password,hashpwd)
    if(response==true){
        let data={id:users[0].id}
        let signature="xyz"
        let token=jwt.sign(data,signature)
        return res.status(200).send({
            status: true,
            token,
            user: {
                id: users[0].id,
                email: users[0].email,
                name: users[0].name
            },
            message: "Login success"
        });
    }
    return res.status(504).send({status:false,message:"login failed"})
   // return res.status(200).send({status:true,token,message:"login success"});
        //return res.status(200).send({...req.body,status:"login sucess"});
    }
   
    
    
    
const logout=async (req,res)=>{
    res.status(200).send("logout");
}
const signup=async (req,res)=>{
  
    const name = req.body.Fname;
    const password = req.body.Lname;
   
    const email = req.body.email;

    //generate bcrypt default salt
    let salt=await bcrypt.genSalt()
    //generating hashpassword
    let hashPassword=await bcrypt.hash(password,salt);

    const user = new User({name,email,password: hashPassword});
    user.save();
    
    let data={id:user.id}
    let signature="xyz"
    let token=jwt.sign(data,signature)
    res.redirect('/v1/login');
   // res.status(200).send({status:true,token});
   
}
const forgatepwd=(req,res)=>{
    res.status(200).send("forgatepwd");
}
module.exports={login,logout,signup,forgatepwd}
//jwt use to validate user
var jwt = require('jsonwebtoken');

const checkToken=async (req,res,next)=>{
    console.log("hello i am checkToken")
      let signature="xyz"
      const token=req.header('token');
      let data=jwt.verify(token,signature)
      console.log(data)
      req.id=data.id
      next()
}

module.exports={checkToken}
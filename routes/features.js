const express=require('express');
const {like,comment,unlike,deletepost,
    createpost,updatepost,searchpost,
    updatecomment,deletecomment,showuserdata,
    modifyuserdata,savedpost}=require('../function/features')
const features=express.Router();
const {checkToken}=require("../middleware/checkToken")

features.post('/like',checkToken,like)
features.post('/comment',checkToken,comment)
features.post('/unlike',checkToken,unlike)
features.post('/deletepost',checkToken,deletepost)
features.post('/createpost',checkToken,createpost)
features.post('/updatepost',checkToken,updatepost)
features.post('/searchpost',checkToken,searchpost)
features.post('/updatecomment',checkToken, updatecomment)
features.post('/deletecomment',checkToken,deletecomment)
features.post('/showuserdata',checkToken,showuserdata)
features.post('/modifyuserdata',checkToken,modifyuserdata)
features.post('/savedpost',checkToken,savedpost)

module.exports={features}
//mongoose connection
const mongoose = require("mongoose");

const connectToMongo=()=>{
         mongoose.connect('mongodb://127.0.0.1:27017/twit')
         .then(()=>{
            console.log("connected to mongo sucsesfully")
        })
        .catch(()=>{
            console.log("connected to mongo failed")
        }) 

}

module.exports={connectToMongo}
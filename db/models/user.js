const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creating userSchema
const UserSchema = new Schema({
   
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
       required : true
    },
    dob : {
       type : Date,
       required : true
    },
    phoneNumber : {
       type : Number, 
       required : true
        
    }
})

const User = mongoose.model('users', UserSchema)
module.exports = User;

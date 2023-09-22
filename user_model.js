const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    passsword:String,
    googleId:String,
    secret:String
});

module.exports = User = mongoose.model('new_user',userSchema);
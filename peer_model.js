const mongoose = require("mongoose");

const peerSchema = mongoose.Schema({
    u_id:String,
    fname:String,
    lname:String,
    age:Number,
    phone:String,
    city:String,
    state:String,
    zip:Number,
    description:String,
    image_up:String,
});

module.exports = Peer = mongoose.model('new_peer',peerSchema);
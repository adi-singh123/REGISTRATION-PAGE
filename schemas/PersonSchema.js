const {Schema} =  require('mongoose');

const PersonSchema  =new Schema({
  Name:String,
  Email:String,
  Password:Number,
  Gender:String,
  Terms:String
})

module.exports = {PersonSchema};
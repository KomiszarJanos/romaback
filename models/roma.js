const mongoose = require ('mongoose');
const Romascheema = new mongoose.Schema (
    {
    id:{type:Number, required:true},
    name:{type:String, required:true},
    desc:{type:String, required:true},
    picture:{type:String, required:true},
    day:{type:String, required:true},
    link:{type:String, required:true}
    }
)

module.exports=mongoose.model('roma',Romascheema);
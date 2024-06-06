const mongoose =require("mongoose")

const schema=new mongoose.Schema({
  number:  {
        type:Number,
        required:true,
        min:1,
        max:100
    },
    program:{
        type:String,
        required:true,
        enum:['javascript','python','ios','android']
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        require:true
    }
})

module.exports=mongoose.model("generation",schema)
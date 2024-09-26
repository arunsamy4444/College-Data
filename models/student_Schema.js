const mongoose = require('mongoose')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    }
})

const Students = mongoose.model('Students',studentSchema)
module.exports = Students
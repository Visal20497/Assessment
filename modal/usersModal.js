let mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Boolean,
        default:false
    },
    answer:{
        type:String,
        require:true
    }

},{timestamps:true})

module.exports= mongoose.model("users",userSchema);
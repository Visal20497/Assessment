let mongoose=require('mongoose')

// MongoDb Database Connection
let DbConnection=async()=>{
    try{
        let connection=await mongoose.connect('mongodb://127.0.0.1:27017/Assessment')
        console.log("Mongodb connnected!")
    }
    catch(error){
        console.log("Something wrong while connected to Mongodb")
    }
}

module.exports={DbConnection}
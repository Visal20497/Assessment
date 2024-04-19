let express=require('express')
let morgan=require('morgan')
let cors=require('cors')
const authRoute=require('./route/authRoute.js')
const {DbConnection } = require('./Config/Db')
let PORT=8090
let MODE="dev"
let app=express()
app.use(express.json())

//this is for your morgan
app.use(morgan('dev'))

//this is for database
DbConnection()
//this is for the cors
app.use(cors())

//auth Route 
app.use('/api/v1',authRoute)
app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT} in ${MODE} mode`)
})

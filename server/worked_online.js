import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import {MongoClient} from 'mongodb'
import cors from 'cors'

const app = express()
// app.use(bodyParser.json({limit:'30mb',extended:true}))

// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
// app.use(cors())

const CONNECTION_URL = 'mongodb://localhost:27017'
const PORT = process.env.PORT || 5000

// mongoose.connect(CONNECTION_URL,(err)=>{
//     if(!err) console.log('db connected');
//     else console.log('db error')
// })
// app.listen(5000,()=>{console.log('listen on 500')})

mongoose.connect(CONNECTION_URL,
{   useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log(`Server running on port ${PORT}`)
).catch((error)=>console.log(error))

// MongoClient.connect(CONNECTION_URL,(err,db)=>{
//     console.log('connected to database ')
//     db.close() 
// })
 
// mongoose.connect(CONNECTION_URL,(err,db)=>{
//     console.log('connected to mongoose database ')
//     db.close() 
// }) 
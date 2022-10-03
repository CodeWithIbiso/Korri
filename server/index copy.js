import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose' 
import cors from 'cors'
import propertyRoutes from './routes/properties.js'
import userRoutes from './routes/user.js' 
import dotenv from 'dotenv'

// const CONNECTION_URL = 'mongodb+srv://dennie:dennie@cluster0.kfsfa.mongodb.net/?retryWrites=true&w=majority'
const app = express()
dotenv.config()
const CONNECTION_URL = process.env.CONNECTION_URL// 'mongodb+srv://dennie:5zjBuRCunQsoa2kn@cluster0.kfsfa.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT //|| 8000
 
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
.catch((error)=>console.log("error",error)) ;
 
// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
// .catch((error)=>console.log("error",PORT,error)) ;
// Are we not going to close connection to database after every request?


app.use(bodyParser.json({limit:'50mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
 
app.use(cors())

// insert routes below 

app.use('/',propertyRoutes)
app.use('/user',userRoutes)

// mongoose.set('useFindAndModify', false);
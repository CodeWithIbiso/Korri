import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose' 
import cors from 'cors'
import propertyRoutes from './routes/properties.js'
import userRoutes from './routes/user.js' 


const CONNECTION_URL = 'mongodb://localhost:27017/base'
const PORT = process.env.PORT || 5000
const app = express()

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
.catch((error)=>console.log(error)) ;
// Are we not going to close connection to database after every request?


app.use(bodyParser.json({limit:'50mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
 
app.use(cors())

// insert routes below 

app.use('/',propertyRoutes)
app.use('/user',userRoutes)

// mongoose.set('useFindAndModify', false);
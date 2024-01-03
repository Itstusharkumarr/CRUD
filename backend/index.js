import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authroutes.js'
import dbconnect from './config/dbConnect.js'
import cors from 'cors'


//create sever
const server = express()
//configuration
dotenv.config()
//access port no.
const port = process.env.PORT || 6010
//converting json object
server.use(express.json())
//db connection
dbconnect()
//cors error handle
server.use(cors())
//routing
server.use('/app/v1/',authRoutes)



server.listen(port,console.log(`server is running on port no. http://localhost:${port}`))
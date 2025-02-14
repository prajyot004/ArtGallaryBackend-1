const express = require("express");
const cors = require("cors")
const cookieParser = require('cookie-parser')
require("dotenv").config()
const connectDB = require('./config/db')
const router = require("./routes")

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }))
app.use('/api', router)


const PORT = 3000 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log("connected to db")
        console.log("Server is running")
    })
})




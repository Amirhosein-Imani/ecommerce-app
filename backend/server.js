import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// app config

const app = express()
const port = process.env.PORT || 4000

// middlewares

app.use(express.json())
app.use(cors())

// API endpoints

app.get('/' , (req , res) => {

    res.send("API Working")

})

app.listen(port , () => console.log('Server Started On PORT : ' + port))
import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/connectDB.js'
import projectApi from './apis/project.api.js'
import contactApi from './apis/contact.api.js'
dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors({
    origin: true,
    credentials: true
}))

app.use("/api/project", projectApi)
app.use("/api/contact", contactApi)

app.get('/', (req, res) => {
    res.status(200).json({ "message": "Request is OK" })
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("App is listening at", PORT)
})
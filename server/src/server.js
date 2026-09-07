import express from "express"
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import "dotenv/config";
import authMiddleware from "./middleware/authMiddleware.js";
import cors from "cors"


const app = express()


const PORT = 5000 || process.env.PORT


app.use(cors())
app.use(express.json())

app.use('/auth' , authRoutes)
app.use('/todos' , authMiddleware , todoRoutes)

app.get('/' , (req , res) => {
    res.status(200).json({message : "Working route "})
})

app.listen(PORT , ()=> {
    console.log(`Server started on port ${PORT}`)
})
import express from "express"
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()


const PORT = 5000 || process.env.PORT



app.use(express.json())

app.use('/auth' , authRoutes)
app.use('/todos' , todoRoutes)

app.get('/' , (req , res) => {
    res.status(200).json({message : "Working route "})
})

app.listen(PORT , ()=> {
    console.log(`Server started on port ${PORT}`)
})
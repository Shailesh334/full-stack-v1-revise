import express from "express"


const router = express.Router()


// Get all todos
router.get('/' , (req , res) => {
    console.log(req.userId)
})

// Create a new todo
router.post('/' , (req , res) => {})

// Fetch a single todo
router.post('/:id' , (req , res) => {})

// Update a  todo
router.put('/:id' , (req , res) => {})

// Delete a todo
router.delete('/:id' , (req , res) => {})

export default router;
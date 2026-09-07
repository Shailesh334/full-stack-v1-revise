import express from "express";
import db from "../db.js";

const router = express.Router();

// Get all todos
router.get("/", (req, res) => {

  try {
    const getTodos = db.prepare(`
        SELECT * FROM todos WHERE user_ID = ? 
    `);

    const response = getTodos.all(req.userId);

    res.json({ response });

  } catch (err) {
    console.log(err.message);
    res.status(503).json({ message: err.message });
  }
});

// Create a new todo
router.post("/", (req, res) => {
    const {task} = req.body;

    const insertTodo = db.prepare(`
        INSERT INTO todos (user_id , task) VALUES (? , ?)
    `)
    const result = insertTodo.run(req.userId , task)

    res.json({id : result.lastInsertRowid , task , completed : 0})

});


// Update a  todo
router.put("/:id", (req, res) => {
    const {id} = req.params
    const {completed} = req.body

    const updateTodo = db.prepare(`
        UPDATE todos SET completed = ? WHERE user_id = ? AND id = ? 
    `)
    
    const result = updateTodo.run(completed , req.userId , id)

     if (result.changes === 0) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }    

    res.json({message : "Todo updated"})
});

// Delete a todo
router.delete("/:id", (req, res) => {
    const {id} = req.params

    const deleteTodo = db.prepare(`
        DELETE FROM todos WHERE id = ? 
    `)

    deleteTodo.run(id)

    res.json({message : "Todo deleted"})
});

export default router;

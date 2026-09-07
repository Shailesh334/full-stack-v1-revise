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

// Fetch a single todo
router.post("/:id", (req, res) => {});

// Update a  todo
router.put("/:id", (req, res) => {});

// Delete a todo
router.delete("/:id", (req, res) => {});

export default router;

import express from "express"
import bcrypt from "bcrypt"
import db from "../db.js"
import jwt from "jsonwebtoken"


const router = express.Router()



router.post('/register' , (req , res) => {

    const {username , password} = req.body
    
    // create hashed password
    const hashPassWord = bcrypt.hashSync(password , 8);

    try{
        // Store user into db
     const query = db.prepare(`
        INSERT INTO users (username , password) VALUES (? , ?)
        `)
    
    const result = query.run(username , hashPassWord);

    // create token
    const token = jwt.sign({id : result.lastInsertRowid} , process.env.JWT_SECRET , {expiresIn : '24h'})
    
    // send token
    res.json({token}) 

    }catch(err){
        console.log(err.message);
        res.status(502).json({message : err.message})
    }
  

    
})


router.post('/login' , (req , res) => {})


export default router;
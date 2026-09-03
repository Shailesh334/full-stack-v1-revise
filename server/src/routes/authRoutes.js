import express from "express"


const router = express.Router()



router.post('/register' , (req , res) => {

    const {username , password} = req.body
    console.log(req.body)
    res.json({
        username : username,
        password : password
    })

})


router.post('/login' , (req , res) => {})


export default router;
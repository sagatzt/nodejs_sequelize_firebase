const express = require('express')
const rtLogin = express.Router()
const fbFunctions = require('../modules/firebase')


rtLogin.post('/signup',(req,res)=>{
    console.log(req.body)
    fbFunctions.signup(req.body.email,req.body.password)
        .then(user=>{
            res.json(user)
        })
    
})


module.exports=rtLogin
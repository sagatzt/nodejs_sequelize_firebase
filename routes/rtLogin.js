const express = require('express')
const rtLogin = express.Router()
const fbFunctions = require('../modules/firebase')


rtLogin.post('/signup',(req,res)=>{
    fbFunctions.signup(req.body.email,req.body.password)
        .then(user=>res.json(user)) 
})

rtLogin.post('/signin',(req,res)=>{
    fbFunctions.signin(req.body.email,req.body.password)
        .then(user=>res.json(user))
})

rtLogin.get('/signout',(req,res)=>{
    fbFunctions.signout()
        .then(datos=>res.json(datos))
})

rtLogin.get('/get-current-user',(req,res)=>{
    fbFunctions.getCurrentUser()
        .then(user=>res.json(user))
})

module.exports=rtLogin
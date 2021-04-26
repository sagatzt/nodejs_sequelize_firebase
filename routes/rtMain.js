const express = require('express')
const rtMain = express.Router()
const daoUser=require('../dao/daoUser')
//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.json({response:'ok'})
})

rtMain.post('/create',(req,res)=>{
    console.log(req.body)
    daoUser.create(req.body).then(data=>{
        res.json(data)
    })
})

rtMain.get('/findAll',(req,res)=>{
    daoUser.findAll().then(data=>{
        res.json(data)
    })
})

rtMain.get('/findByEmail',(req,res)=>{
    console.log(req.query.email)
    daoUser.findByEmail(req.query.email).then(data=>{
        res.json(data)
    })
})

rtMain.get('/findAllArticles',(req,res)=>{
    daoUser.findAllArticles().then(data=>{
        res.json(data)
    })
})

module.exports=rtMain
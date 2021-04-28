require('dotenv').config()
const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
const rtLogin = require('./routes/rtLogin')

//middlewares
app.use(express.json())

//enrutador principal
app.use('/',rtMain)
app.use('/login',rtLogin)

 
//arrancamos el servidor:
app.listen(8080,(err)=>{
    console.log('Server run on port 8080')
})
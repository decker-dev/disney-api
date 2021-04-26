const express = require('express')
const app = express()
app.use(express.json());
const models =require("./database/database")

app.get('/',(req, res) => {
    res.send ('hola')
})

app.listen(3000,()=> {
    console.log('server ON')
})
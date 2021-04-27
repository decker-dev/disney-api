import app from './app';
//import config from '../config'
require('dotenv').config()

app.listen(process.env.PORT)
console.log('server on',process.env.PORT)
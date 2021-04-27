import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
const app = express()
app.set('pkg',pkg)

app.use(express.json());
app.use(morgan('dev'));
const models =require("./database/database")

app.get('/',(req, res) => {
    res.json({
        name:app.get('pkg').name,
        author:app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
})

export default app
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const students = require('./routers/students')

const port = 4321

const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

app.use('/students', students)

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando en el localhost:${port}`)
})
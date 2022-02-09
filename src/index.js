import database from './src/models'


const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send(database)
})


const PORT = 3000

app.listen(PORT);

console.log(`Server started at http://localhost:${PORT}`)


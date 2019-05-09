const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/zipcodes', (req,res )=>{
    res.send('zipcodes rocks')
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
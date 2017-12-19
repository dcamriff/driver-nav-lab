const express = require('express')
const app = express()
const add = require('./controllers/add.js')

const hbs = require('hbs')
app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.send("works")
})
app.use('/math', add)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Application is listening on port ${PORT}`)
})
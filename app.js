const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')


//app
const app = express()

//mongoose
mongoose.connect('mongodb://localhost/mongoose-proyect')

//public files
app.use(express.static('public'))

//hbs
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//routes
const userRoutes = require('./routes/users')

app.use('/', userRoutes)



app.listen(3000, () => {
    console.log('App running on port 3000')
})
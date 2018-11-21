const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/new', (req, res) => {
    User.create({ name: 'Carlos', age: 30, email: 'charlsdev@gmail.com' })
        .then(r => {
            console.log(r)
            res.redirect('/users')
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
})

router.get('/users', (req, res) => {
    User.find({})
        .then(users => {
            console.log(users)
            res.render('users', { users })
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router
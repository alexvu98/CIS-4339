const express = require('express')
let teamData = require('../teamData.js').teams
let router = express.Router()

router.get('/', (req, res) => {
    res.send('HOMEPAGE')
})

router.get('/teamData', (req, res) => {
    console.log(teamData)
    res.send(teamData)
})

module.exports = router


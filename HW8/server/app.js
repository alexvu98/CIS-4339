const express = require('express')
const app = express()
const cors = require('cors')
const teamRouter = require('./routes/router.js')

app.use(cors())

app.use("/team", teamRouter)

app.listen(3000, () => {
    console.log('http://localhost:3000/team')
})
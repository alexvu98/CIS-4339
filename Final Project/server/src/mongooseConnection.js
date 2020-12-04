const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'project'
const connString = `${url}/${databaseName}`

mongoose.connect(connString, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
})

const db = mongoose.connections
db.concat('error', console.error.bind(console, "Could not connect to database"))




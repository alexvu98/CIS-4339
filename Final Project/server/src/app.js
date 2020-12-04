const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('./mongooseConnection')

const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// middleware routers
app.use('/posts', postRouter);
app.use('/users', userRouter);

// error handling for all non-existent routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    // forwards error
    next(error);
})

// handles all other errors 
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    });
});

// server 
app.listen(3000, () => {
    console.log('http://localhost:3000/')
})
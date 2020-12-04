const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('request')
const {db} = require('./model/quake')
const Quake = require('./model/quake')
const app = express()
require('./mongooseConnection')

app.use(express.static('resources'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    db.collection('octoberquakes').find({}).toArray().then((quakeResult) => {
        res.render('index', {quakeResult: quakeResult})
    }).catch((error) => {
        res.status(500).send(error)  
    })
})

app.get('/newQuake', (req, res) => {
    res.render('newQuake')
})

app.post('/addQuake', async (req, res) => {
    try{
        const quake = new Quake(req.body)
        await quake.save()
        res.render('result', {quake: quake})
    } catch (error){
        res.status(500).send(error)
    }
})

app.get('/goHome', (req, res) => {
    res.redirect('../')
})

app.get('/delete/:id', (req, res) => {
    var id = new mongoose.mongo.ObjectID(req.params.id)
    db.collection('octoberquakes').deleteOne({_id: id})
    res.redirect('../')
})

app.listen(8080, () => {
    console.log('http://localhost:8080/')
})
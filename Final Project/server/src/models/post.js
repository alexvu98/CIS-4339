const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    author: { type: String, required: true, unique: false},
    title: { type: String, required: true},
    edition: { type: String, required: false},
    price: { type: Number, required: true},
    contactInfo: {type: String, required: true},
    condition: { type: String, required: false},
    isbn: { type: String, required: true},
    datePosted: { type: Date, default: Date.now} 
})

const Post = mongoose.model('posts', postSchema)
module.exports = Post;

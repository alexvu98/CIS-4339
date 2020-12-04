const express = require('express');
const router = express.Router();
const Post = require('../models/post')

// Get all data in posts collection
router.get('/', async (req, res, next) => {
   try{
        const posts = await Post.find();
        res.json(posts)
   } catch(err){
       res.json({
           message: err
       })
   }
});

// Handles adding new post to database
router.post('/', async (req, res) => {
    const post = new Post(req.body)
    try{
        const newPost = await post.save()
        res.json(newPost)
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// Get data about a specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// Update a post
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: {
                author: req.body.author,
                title: req.body.title, 
                edition: req.body.edition, 
                price: req.body.price, 
                contactInfo: req.body.contactInfo, 
                condition: req.body.condition, 
                isbn: req.body.isbn
            }}
        )
        res.json(updatedPost)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

// Delete specific post
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.deleteOne({_id: req.params.postId})
        res.json(removedPost)
    } catch (err) {
        res.json({
            message: err
        })
    }
});

module.exports = router; 
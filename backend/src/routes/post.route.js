const express=require('express')
const router=express.Router()
const authenticate = require('../middleware/authenticate')
const Post = require('../models/post.model')

router.post("/create", authenticate, async (req,res)=>{
    try{
        const newPost=new Post(req.body)
        const savedPost=await newPost.save()
        
        res.status(200).json(savedPost)
    }
    catch(err){        
        res.status(500).json(err)
    }
     
})

router.get("/", async (req,res)=>{    
    try{
        const posts=await Post.find()
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
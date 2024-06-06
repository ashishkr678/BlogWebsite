const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,        
    },
    category:{
        type:String,
        required:false,        
    },
    author:{
        type:String,
        required:true,
    },
    published_date:{
        type:String,
        required:true,  
    },
    reading_time:{
        type:String,
        required:false,  
    },
    content:{
        type:String,
        required:true,  
    },
    
})

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
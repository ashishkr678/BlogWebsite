const mongoose = require("mongoose")
require('dotenv').config()

const mangodbUrl = "mongodb+srv://ashishsharma0t:j3ly1BJ4yG3v77pM@blogapi.tymk07d.mongodb.net/?retryWrites=true&w=majority&appName=blogapi"

const connectDb = () => {
    return mongoose.connect(mangodbUrl);
}

module.exports={connectDb}

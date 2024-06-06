const mongoose = require("mongoose")

const mangodbUrl = "mongodb://localhost:27017/blog-website"

const connectDb = () => {
    return mongoose.connect(mangodbUrl);
}

module.exports={connectDb}
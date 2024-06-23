const mongoose = require("mongoose")
require('dotenv').config({path: 'src/.env'})

const connectDb = () => {
    return mongoose.connect(`${process.env.MONGO_URI}`);
}

module.exports={connectDb}
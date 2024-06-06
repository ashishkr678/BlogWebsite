const express = require("express")

const cors = require("cors")
const { connectDb } = require("./config/db");

const app = express()
const PORT = 5700;
app.listen(PORT, async() => {
    await connectDb();
    console.log("E-Commerce api listing on PORT : ",PORT);
})

app.use(express.json())
app.use(cors());


app.get("/",(req,res) => {
    return res.status(200).send({message : "welcome to StudyNotion",status:true})
})

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

const postRouter = require("./routes/post.route.js");
app.use("/api/posts", postRouter);


module.exports = app;

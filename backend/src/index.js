const express = require("express")

const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors(
    origin: "https://blog-pearl-kappa.vercel.app"
));

app.get("/",(req,res) => {
    return res.status(200).send({message : "welcome to StudyNotion",status:true})
})

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

const postRouter = require("./routes/post.route.js");
app.use("/api/posts", postRouter);


module.exports = app;

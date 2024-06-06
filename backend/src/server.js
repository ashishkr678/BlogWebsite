const app = require(".");
const { connectDb } = require("./config/db");
const path = require("path");

app.get("/",(req,res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
})

const PORT = 5700;
app.listen(PORT, async() => {
    await connectDb();
    console.log("E-Commerce api listing on PORT : ",PORT);
})
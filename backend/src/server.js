const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 5700;
app.listen(PORT, async() => {
    await connectDb();
    console.log("E-Commerce api listing on PORT : ",PORT);
})

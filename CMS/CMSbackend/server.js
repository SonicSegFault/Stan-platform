const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const connectdb = require("./config/cmsdb");
connectdb();

const cors = require("cors");
const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOption));

//Setting up for static serve of uploads
app.use("/uploads", express.static("uploads"));

const router = require("./routes/uploadRoutes");
app.use("/upload", router);

app.listen(process.env.PORT1, () => {
    console.log(`Server running on PORT:${process.env.PORT1}`);
});
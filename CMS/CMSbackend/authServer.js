const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const connectdb = require("./config/cmsdb");
connectdb();

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);


app.listen(process.env.PORT, () => {
    console.log(`AuthServer running on PORT:${process.env.PORT}`);
})



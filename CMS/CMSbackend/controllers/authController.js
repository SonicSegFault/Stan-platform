const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const AdminUser = require("../model/adminusersSchema");
const jwt = require("jsonwebtoken");
const ValidRefreshtokens = require("../model/vaildRefreshtokensSchema");

//des login
//path POST auth/login
//access Public
const postLogin = asyncHandler(async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).json({ message: "Incomplete information" });
    }

    const adminUser = await AdminUser.findOne({username});
    if(adminUser && await bcrypt.compare(password, adminUser.password)){
        //generating accesstoken and reftoken
        const accessToken = await jwt.sign(
            {username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "100m"}
        );

        const refreshToken = await jwt.sign(
            {username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: "30d"}
        );

        //Saving the refreshToken in db, after deleting the exiting refresh if there is any
        if(await ValidRefreshtokens.findOne({username})){
            await ValidRefreshtokens.deleteMany({username});
        }

        await ValidRefreshtokens.create(
            {username: username, refreshToken: refreshToken}
        )

        // setting refreshtoken to send as http only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({accessToken: accessToken});
    } else {
        res.status(401).json("Invalid username or password");
    }
})

//des register
//path POST auth/register
//access Public
const postRegister = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({ message: "Incomplete information" });
    }

    const Hashedpassword = await bcrypt.hash(password, 10); 

    const user = await AdminUser.create({username, email, password: Hashedpassword});

    if(user){
        res.status(201).json({message: "AdminUser Created"});
    }else {
        res.status(500).json({message: "Something went wrong"});
    }
})

//des refresh
//path POST auth/refresh
//access Private
const postRefresh = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    console.log("Token being sent:", refreshToken);
    console.log("Received Auth Header:", req.headers.authorization);

    if (!refreshToken) {
        return res.status(400).json({ message: "Bad Request: No refresh token provided" });
    }

    //checking if the refreshtoken exists in the db
    if (await ValidRefreshtokens.findOne({refreshToken})){
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
            if(err) {res.status(403).json({message: "FORBIDDEN: User has no access"})}
            else {
                //creating a new accesstoken
                const accessToken = jwt.sign(
                    {username: payload.username},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: "10m"}
                )
    
                res.status(201).json({accessToken: accessToken});
            }
        })
    } else {
        res.status(401).json({message: "Session Expired"});
    }
})

//des logout
//path POST auth/logout
//access Private
const postLogout = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(403).json({message: "Already Loggedout"})
    }
    await ValidRefreshtokens.deleteMany({refreshToken});

    res.clearCookie("refreshToken", { 
        httpOnly: true, 
        secure: true, 
        sameSite: "strict" 
    });  

    return res.status(200).json({message: "Logged out"})
})

module.exports = {
    postLogin,
    postRegister,
    postRefresh,
    postLogout
}
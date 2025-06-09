const jwt = require("jsonwebtoken");

const verifyAT = (req, res, next) => {
    const authtoken = req.headers.authorization;
    let token;

    if(authtoken && authtoken.startsWith("Bearer")){
        token = authtoken.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err) return res.status(401).json({message: "No access"});
            else {
                req.user = payload;
                next();
            }
        })
    } else {
        console.log("No token provided");
        res.status(401).json({ message: "Unauthorized: No token provided" });
    }
}

module.exports = verifyAT
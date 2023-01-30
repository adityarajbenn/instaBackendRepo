const jwt = require("jsonwebtoken");
const config = require("config");

module.export = function (req,res,next){
    const token = req.header("Auth Token");

    if (!token) return res.status(401).send("No Token found");

    try{
        const decoded = jwt.verify(token, config.get("jwtKey"));
        req.user = decoded;
        next()
    } catch(err){
        res.status(402).send("Invalid token");
    }
}
const jwt= require("jsonwebtoken")
require("dotenv").config()

const authentication=(req,res,next)=>{
    let token = req.headers.authorization;
    if(!token){
        res.send({"msg":"please log in"})
        return
    }
    const decode= jwt.verify(token,process.env.adminkey);
    if(!decode){
        res.send({"msg":"please log in"})
        return
    }
    const userID = decode.userID;
    const userRole = decode.userRole;

    req.body.userID=userID;
    req.body.userRole = userRole;
    next()   
}

module.exports={
    authentication
}
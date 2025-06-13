const JWT = require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    try {
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token , process.env.JWT_SECRET, (err, decode)=>{
            if(err){
                return res.status(401).
                send({message: "Token is not valid"});
            }
            else{
                req.body.userId = decode.userId;
                next(); 
            }
            
        })
    } catch (error) {
        return res.status(500)
        .send({
            message: "Server Error",
            error: error.message
        })
    }
}
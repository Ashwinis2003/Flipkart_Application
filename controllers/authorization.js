const jwt = require('jsonwebtoken')
const authorization =(req,res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).send('Access Denied')
    }
    jwt.verify(token,'ashwini123',(err,user) => {
        if(err){
            return res.send(403).send('Invalid Token')
        }
        res.user=user;
        console.log(user,"user")
        next()
})
}
module.exports=authorization;
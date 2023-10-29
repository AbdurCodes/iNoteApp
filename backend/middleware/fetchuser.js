// a middleware to decode user from a JWT 

const jwt = require('jsonwebtoken');

JWT_SECRET = "thisisabdur$raining";

const fetchuser = (req, res, next) => {
    // get the user from the jwt token
    const token = req.header('auth-token');
    // console.log(token)
    // if token is not found at all
    if(!token){
        return res.status(401).send({msg: "no token found"})
    }

    try {
        // Verify the token
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data)
        console.log(data._id)
        // add id to request oject
        req.user = data._id;     
        next();    

   // in case token is not valid 
    } catch (error) {
        return res.status(401).send({msg: "token is invalid"})
    }
}

module.exports = fetchuser;
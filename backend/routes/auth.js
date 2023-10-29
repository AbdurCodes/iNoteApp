const express = require("express");
const { body, validationResult } = require('express-validator');
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

JWT_SECRET = "thisisabdur$raining"



// Create user using POST "/api/auth/createuser" : No Login Required
router.post("/createuser", [
    body('name', 'Name must be at least 3 chars long').isLength({ min: 3 }),
    body('email', 'Not a valid email').isEmail(),
    body('password', 'password must be at least 8 chars long').isLength({ min: 8 }),
    ], 
    async (req, res) => {
        // Validate incoming input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // checks if user with same email already exists in the db
            let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({error: `A user with this email already exists.`});
        } 

        // hashing password before storing into db
        const saltAdded = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, saltAdded);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            // password: req.body.password (normal password stored in db)
            password: hashedPassword // (hashed password stored in db)
        });

        // send back token upon successful creation of new user
        const payload = {
            user: {
                id: user._id
            }
        };
        jwt.sign(payload, JWT_SECRET, { expiresIn: "5 days"},
        (err, token) =>{
            if(err) throw err;
            res.json({token}) // === token: token (ES6)
            // console.log(token)
            })
        
        // to decode a JWT
        // const decodedJWT = jwt.verify(token, JWT_SECRET);
        // The decodedJWT variable will now contain the payload from the JWT


        return res.status(200).json({msg: `A user is created successfully`});

        } catch (error) {
            console.error(error.message);
            res.status(500).json({error: `some error occured on server`});
        };


        // .then(user => res.json(user))
        // .catch(err => {
        //     console.log(err);
        //     res.json({error: 'duplicate values for email are unacceptable', message: err.message});
        // })
    
    // const user = User(req.body);
    // user.save();
    // res.json({
    //     message: "Successfully added the user"
    // });
    // console.log(req.body);
    // console.log("Successfully added the user");
})





  




// log-in user using POST "/api/auth/login"
router.post("/login", [
    body("email").isEmail(),
    body("password").exists()
], async (req, res) => {
    try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error('Invalid inputs from you');
    }

    let {email, password} = req.body;

        let user = await User.findOne({email});
        if(!user){
            throw new Error('Incorrect credentials.')
        }

        let validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            throw new Error('Incorrect credentials.');
        }

        let token = jwt.sign({_id: user._id}, JWT_SECRET);

        return res.header('Authorization', token).send({token});

    } catch (e) {
        return res.status(401).send({msg: e.message});
    };
                

})
                




// logging out user



module.exports = router;
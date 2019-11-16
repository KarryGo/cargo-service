const express = require("express");
const User = require("../repos/users_model");

const router = express.Router()

router.post("/signup", (req, res) => {
    const payload = req.body;
    let user = new User({
        businessName: payload.businessName,
        emailAddress: payload.emailAddress,
        password: payload.password
    });
    
    user.save((err, u) => {
        if(err){
            console.log(err);
            res.json({
                userMsg: "Sign up failed",
                devMsg: err
            });
        }else{
            res.json({
                data: u.toJSON(),
                userMsg: "Account created successfully"
            });
        }
    });

});

router.post("/signin", (req, res) => {
    
});

module.exports = router;
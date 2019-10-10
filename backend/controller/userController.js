const Modules = require("../model/userModel");
const jwt = require('jsonwebtoken');

exports.signup =  (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password:  req.body.password
    }
    console.log(user)
    Modules.findOne({name: user.name}).then(result => {
		if (result)
			return res.send({message: "User with the same name exists"}).status(409);
		Modules(user).save().then(resuser => {
			res.send({message:"Signup is successful"}).status(200);
		})
	})

}

exports.signin = (req, res) => {
    const user = {
        name: req.body.name,
        password:  req.body.password
    }
    Modules.findOne({name: user.name, password: user.password}).then(result => {
        if (result)
            jwt.sign({user}, 'seccretkey', (err, token) => {
                res.json({token});

            }).catch(err => {
                
            })
    })
}


exports.getAll = async (req, res) => {
    const result = await Modules.find();
    if(result) return res.send(result); 
}
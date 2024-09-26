const User = require('../models/user_Schema');

exports.createUser = async (req,res) => {
    const { name, email, password } = req.body;
    // console.log(name, email, password);
    

    try {
        const newUser = new User({ name, email, password });
        const user = await newUser.save();
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email, password});
        if(!user) return res.status(404).json({message: 'User not found'});

    
    const isPasswordValid = await user.email== email && user.password== password;
    
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({message: 'Login successful'});
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to login' });
}

}

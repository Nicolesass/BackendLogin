const User = require("../models/user");


const test = (req, res) => {
    res.json('test success')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.status(400).json({msg: 'Please enter your name'})
        };
        // Check email 
        const exist = await User.findOne({email})
        if (exist) {
            return res.status(400).json({msg: 'Email already exists'})
        };
        // Check if password is okay
        if (!password || password.length < 6) {
            return res.status(400).json({msg: 'Password must be at least 6 characters long'})
        }
        // Create new user
        const User = await User.create({
            name,
            email,
            password
        })
        return res.json(User)
    } catch (error) {
        console.log(error)
}}

module.exports = {
    test
    registerUser
};
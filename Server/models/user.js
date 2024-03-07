const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: Sting,
    email: {
        type: String,
        unique: true
    },
    password: String
    
})

const UserModal = mongoose.model('user', userSchema)

module.exports = UserModal;
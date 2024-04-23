const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const adminSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    contactnumber: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    confirmPassword: {
        type:String,
        required:true,
    },
})


adminSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12)
    }
    next();
})

const Admin = mongoose.model('user', adminSchema);

module.exports = Admin;
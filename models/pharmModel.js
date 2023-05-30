const mongoose = require('mongoose');

const pharmSchema = mongoose.Schema({
    username:{type: String, required: true},
    password:{type:String, required: true},
    user:{type:String, required:true},
    isAdmin:{type: Boolean, default:false}
})

module.exports = mongoose.model('Pharmacist', pharmSchema);
/* admin can:
    create user
    view all patients 
    delete user
    clear patient record 
*/
const admin = require('../models/adminModel')

exports.signupUser = async(req, res)=>{
    const {username, password} = req.body;
}

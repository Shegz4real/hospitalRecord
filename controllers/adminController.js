/* admin can:
    create user
    view all patients 
    delete user
    clear patient record 
*/
const Admin = require('../models/adminModel');
const Doc = require('../models/docModel');
const Lab = require('../models/labModel');
const Pharm = require('../models/pharmModel');
const Records = require('../models/recordModel');



exports.signupUser = async(req, res)=>{
    
    console.log(req.body.user)

    try{
        if( req.body.user == "doctor"){
            const doc = new Doc(req.body);
            await doc.save();
            res.redirect('/dashboard')
    
        } else if(req.body.user == "pharm"){
            const pharm = new Pharm(req.body);
            console.log(pharm);s
            await pharm.save();
            res.redirect('/dashboard');

        } else if(req.body.user == "lab"){
            const lab = new Lab(req.body);
            await lab.save();
            res.redirect('/dashboard');

        }else{
            res.send("invalid user");
        }
    
    }catch(err){
        console.log(err);
    }
   
}

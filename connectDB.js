const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/hospitalRecord';

mongoose.set('strictQuery', true);
const connectDB = async()=>{

    try{
        await mongoose.connect(url, {
            useUnifiedTopology : true,
            useNewUrlParser:true
        });
    }catch(err){
        console.log(err)
    }
}
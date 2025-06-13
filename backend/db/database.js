const mongoose = require('mongoose');

const connectDatabase =async()=>{
    try {
        console.log("database is connecting ...");
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log("database is connected successfully !");    
        
    } catch (error) {
        console.log("error in connecting to database",error.message);
        
    }
}
module.exports = connectDatabase;
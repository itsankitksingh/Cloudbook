const mongoose = require('mongoose');
//const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";
const mongoURI = "mongodb+srv://itsankitksingh:Ankit028@cluster1.nojszdg.mongodb.net/Cloudbook";
const connectToMongo=()=>{
  mongoose.connect(mongoURI);
  console.log("connected to mongo");
}
module.exports = connectToMongo;


 
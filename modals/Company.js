const mongoose=require('mongoose');

const CompanySchema= new mongoose.Schema({
     companyName:String,
     representativeName:String,
     Contact:Number,
     title:String,
     duration:Number,
     startingMonth:String,
     skills:String,
     amount:Number,
     positions:Number,
     workMode:String,
     about:String
})

module.exports= mongoose.model('company',CompanySchema);


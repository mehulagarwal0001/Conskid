const mongoose=require('mongoose');

const StudentSchema= new mongoose.Schema({
     studentName:String,
     email:String,
     Contact:Number,
     topSkills:String,
     interested:String,
     startingMonth:String,
     skills:[{type:String}],
     exprience:Boolean,
     certificate: [{
        type: String,
   
    }],
    projectDetail:[{
        type:String
    }],
    githubLink:[{
        type:String
    }]
})

module.exports= mongoose.model('student',StudentSchema);


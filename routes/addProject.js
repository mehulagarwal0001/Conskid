const router =require('express').Router();

const Student= require('../modals/Student');
const Company = require('../modals/Company');


let path_of_photos =   (array) => {
          
    let val=[];
    let i=1;
     array.forEach(element => {
        var path_name= '/images/' +Date.now() + `_${i}`+ element.name;
        val.push(path_name);
        i++;
     });
    return val ;
}

let move_to_public = (array1,array2)=>{


 for (let index = 0; index < array1.length; index++) {
      
    array1[index].mv('public/'+array2[index],(err)=>{
        if(err){
            return false;
           // return res.status(500).json({status:"failed"});
        }
    })
    
 }
return true;
}

// To add a new Project 
router.post('/addStudent',
 async (req,res)=>{

  try {
    
 
let project = req.body;
//console.log(req.body);
if(req.files){
if(  req.files.certificate && Array.isArray(req.files.certificate) == false ) req.files.certificate =[req.files.certificate];

//    console.log(req.files.photos); 
console.log(req.files.certificate);
     if(req.files.certificate ){ project.certificate= await path_of_photos(req.files.certificate);

if( await move_to_public(req.files.certificate,project.certificate) == false) {
   return  res.status(500).json({status:"failed"});
}
}

}
//console.log(project);
const saving_project= await new Student(project);
const saved_project= await saving_project.save();

return res.send(saved_project);

//  return res.send("HEllo");

} catch (error) {
    return res.status(500).json({error:error});
}

})

 // Getting all Projects 
router.get('/allStudent',async (req,res)=>{
  try {
    let project = await Student.find();

    return res.json(project);

  } catch (error) {
     return res.status(500).json({error:error});
  }
    
})




// To add a new Project 
router.post('/addCompany',
 async (req,res)=>{

  try {
    
 
let project = req.body;
console.log(req.body);
 
console.log(project);
const saving_project= await new Company(project);
const saved_project= await saving_project.save();

return res.send(saved_project);

//  return res.send("HEllo");

} catch (error) {
    return res.status(500).json({error:error});
}

})





module.exports = router;
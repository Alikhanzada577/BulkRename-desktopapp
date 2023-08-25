const fs = require('fs');
const path =require('path');
const replaceThis="ali"
const replaceWith="ahmed"
const preview = false
const folder=__dirname

try {
  const data = fs.readdir(folder,(err,data)=>{

   
    for(let index = 0 ;index < data.length;index++){
      const item = data[index];
      let oldFile =path.join(folder,item)
      let newFile =path.join(folder , item.replaceAll(replaceThis,replaceWith))
      
      if(!preview){
     
    fs.rename(oldFile,newFile,()=>{
      console.log("rename success")
    })
  }else{
    if("data/" + item !== newFile) console.log(folder , item , "will be renamed to "+ newFile)
  }
  }
  });
  console.log(data);
} catch (err) {
  console.error(err);
}

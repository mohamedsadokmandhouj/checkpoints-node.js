
const fs = require("fs")

//  fs.writeFile('welcome.text','hello node',(err)=>{
//     console.log('done')
//  })
 

 fs.readFile("hello-text.text","utf-8",(err,data)=>{
    err? console.log(err):console.log(data)
 })




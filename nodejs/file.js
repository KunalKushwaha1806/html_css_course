const fs =require("fs");
fs.writeFileSync('nodejs/test.txt',"Hello Kunal");
fs.writeFile('nodejs/test.txt',"Hello World", (err)=>{});
fs.writeFileSync('nodejs/contact.txt',"Contact Kunal at:8090161159");
const result =fs.readFileSync('nodejs/contact.txt','utf-8');
console.log(result)
fs.readFile('nodejs/contact.txt','utf-8',(err,data)=>{
    if (err){
        console.log('error');
    }
    else{
        console.log(result);
    }
})
fs.appendFileSync('nodejs/test.txt',`${Date.now()}Hey\n`);
fs.cpSync("nodejs/test.txt","nodejs/copy.txt");
fs.unlinkSync('nodejs/copy.txt');
console.log(fs.statSync('nodejs/test.txt'))
fs.mkdirSync("PSIT/AIML/CYS",{recursive:true});
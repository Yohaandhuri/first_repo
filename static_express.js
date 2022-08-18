const express = require('express');
const app = express();
 

app.use("path of static folder");

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"path"));
})

app.all('*',(req,res)=>{
    res.status(404).send('error');
})

app.listen(5000,()=>{
    console.log('user is listening on 5000');
})

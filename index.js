const express =require('express');
const cors = require('cors');
const allChef = require('./data/alldata.json');
const app = express();
const port =process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Delicious food recipes server is running');
})
app.use(cors());

app.get('/alldata',(req,res)=>{
    res.send(allChef)
})


app.get('/alldata/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    // console.log(id);
    const singleChefData = allChef.find(n =>parseInt(n.chef_id) === id)
    res.send(singleChefData)


})

app.listen(port,()=>{
    console.log(`dragon api is runing on port:${port}`);
})
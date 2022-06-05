const express=require('express')
const bodyparser=require('body-parser');


const app=express();
app.use(bodyparser.urlencoded({extended:true}))
 

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+"/bmicalc.html")
})
app.post("/bmicalc",(req,res)=>
{
    Height=parseFloat(req.body.height);
    Weight=parseFloat(req.body.weight);
    bmi=parseFloat(Weight/(Height*Height))
    if(bmi<19)
    {
        res.send("<h3>your bmi is"+bmi+
        "You are under weight!" )
    }
    else if(25<=bmi && bmi<30)
    {
        res.send("<h3>your bmi is"+bmi+
        "You are good balanced weight!" ) 
    }
    else
    {
        res.send("<h3>your bmi is"+bmi+
        "You are obse!" )
    }

   
    res.end();
})


app.listen(3000,()=>
{
    console.log("server started sucessfully...");
})

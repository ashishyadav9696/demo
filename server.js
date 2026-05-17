import express from "express";
import sum from "./sum.js";
const app=express();
const PORT=8000;

app.listen(PORT, ()=>{
    console.log("server is listing on port 8000 and running successfully");
});

app.get("/home",async(req,res)=>{
    res.json({
        msg:"welcome to home page"
    })
})


app.get("/getsum/:a/:b",async(req,res)=>{
    const{a,b}=req.params;
    res.json({
        sum:sum(parseInt(a),parseInt(b))
    });
});
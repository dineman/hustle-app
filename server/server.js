import express from 'express'
import mongoose from 'mongoose'
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.listen(4000,()=>{
    console.log("listining at post 4000")
})
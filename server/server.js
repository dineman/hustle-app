import express from 'express'
import {mongoose,Schema} from 'mongoose' 
import bodyParser from 'body-parser'
import cors from 'cors'
import dontenv from 'dotenv'
import multer from 'multer'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017'

mongoose.connect(url,{
  useNewUrlParser:true,
})
.then(()=>{
  console.log('connected to database')
}).catch((err)=>{
  console.log(err)
})
const userSchema = new Schema(
  {
      name:String,
      phone:Number,
      password:String,
  },
);
const User = mongoose.model('UserInfo',userSchema)

app.post('/api', async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    await User.create({
      name,
      phone,
      password
    })
    res.send('success')
  }catch(err){
    res.send(err)
  }
  });

app.listen(4000,()=>{
    console.log("listining at post 4000")
})
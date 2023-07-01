import express from 'express'
import mongoose from 'mongoose' 
import bodyParser from 'body-parser'
import cors from 'cors'
import dontenv from 'dotenv'
import multer from 'multer'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()
app.use(bodyParser.json());


app.post('/api', async (req, res) => {
    try {
      const { name, phone, password } = req.body;


  
      res.status(200).json({ message: 'Data received successfully' });
      console.log(req.body)
    } catch (error) {
      console.error('Error receiving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(4000,()=>{
    console.log("listining at post 4000")
})
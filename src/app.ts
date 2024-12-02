import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import { dbConnect } from './config/dbConnect';
import userRoute from './routes/user/userRoute';
dotenv.config()
const app = express();
app.use(express.json())
dbConnect(app)

app.use('/api/v1/users',userRoute)

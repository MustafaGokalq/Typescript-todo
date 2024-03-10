import express, { Express } from 'express'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import todoRouter from "./routes"


dotenv.config();

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(todoRouter)

const uri : string | any = process.env.DB_URI;


export const db = async () =>{
    try {
    await mongoose.connect(uri)
    console.log("mongoose baglandı")
    
} catch (error) {
    console.log("mongose error")
}
}


db()
app.listen(PORT, () =>{
    console.log("localhost run to 3000")
})

import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config();

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use(cors({
    methods:process.env.METHODS.split(","),
    allowed: process.env.ALLOWED.split(",")
}))

app.get("/",(req,res) => {
    res.send("Hello from CARDS server")
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
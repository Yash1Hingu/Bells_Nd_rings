const express = require("express");
const {connection}= require("./conifg/db");
const {userRouter}=require("./routers/user.router");
const {adminRouter} = require("./controllers/admin.controller");
const {productRouter} = require("./routers/product.router");

let cors= require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users",userRouter);
app.use("/admins",adminRouter);
app.use("/products",productRouter);

app.get("/",(req,res)=>{

    res.send("Home page");

})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`http://localhost:${process.env.port}`)
    }
    catch(err){
        console.log(err)
    }
})
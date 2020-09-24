const express =require('express');
const app =express();
const mongoose =require('mongoose');
const morgan =require("morgan");
const cors = require('cors');
const bodyParser=require('body-parser');
const PORT=process.env.PORT||4000;
const blog =require("./routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use(morgan("dev"));

mongoose.connect("mongodb+srv://apptodo:databaseoftodo@cluster0-r1zra.mongodb.net/test?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true,
             
}).then(()=>console.log("DB is connected"))
.catch((err)=>console.log("db connection failded",err));



app.use("/",blog);

app.listen(PORT,()=>{
    console.log("server is running at 4000")
})


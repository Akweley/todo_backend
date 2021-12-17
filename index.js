const mongoose=require ("mongoose");
const express=require ('express');
const cors=require ('cors');
const {json}=require("express");

const todoRoutes=require ("./routes/todoRoutes");

const app = express();

const port = 8000;

app.use(cors());

app.use(json());

app.get("/", function(req, res){
    res.send("Welcome to homepage");
})

app.use("/todos", todoRoutes);

app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
})

const dbURI = "mongodb+srv://Akweley:EvNyZ7qsHL8qTbk@cluster0.hnnmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));
    
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter=require('./router/user_router');
const studentRouter = require("./router/student_router");
const cors = require('cors')

app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://arunsamy1234:1234567arun@cluster0.c0tpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb is connected")
  
);

app.use('/api',userRouter);
app.use('/api',studentRouter)


app.listen(5000, (req, res) => {
  console.log("port is running");
});

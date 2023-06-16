const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("DB Connected");
    
  });
  app.use("/api/user",userRoutes);
app.listen(7080 ,console.log("server started"));
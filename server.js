const express = require("express");
const app= express;
const PORT=5000;

app.use(express.json());
app.use("/time",require("./routes/timeRouter"));
app.listen(PORT,(err)=>{
    err ? console.log(err): console.log(`server is running on port ${PORT}`)
})
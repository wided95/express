const express=require("express");
const timeRouter = express.Router();

timeRouter.get("/",(req,res)=>{
    try {
        let nom = new Date();
        let hour = now.getHours();
        if(hour>8 && hour < 18){
         res.send("you are welcome ");   
        }else{
            res.send("Sorry!!!!!!!!!")
        }
        res.send(now);
    } catch (error) {
        console.log(error);
    }
})

module.exports=timeRouter;

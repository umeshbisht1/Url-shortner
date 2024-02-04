import express from "express";
import mongoose from "mongoose";
const app = express();
import urlrouter from './router/url.router.js'
import { Url } from "./model/url.model.js";
app.get("/", (req, res) => {
  res.send("umesh bist is here");
});
const PORT = 3000;
try {
  await mongoose
    .connect("mongodb://localhost:27017/shorturl")
    .then(() => {
      console.log("connected the database at mongoose  ");
    })
    .catch((error) => {
      console.log(`error occured in connecting the database ${error.message}`);
    });
} catch (error) {
  console.log("error run dev");
}
app.use(express.json())
app.use("/url",urlrouter)
app.get('/:shortid',async (req,res,next)=>{
  
  try {
    const url=await Url.findOneAndUpdate({shortid:req.params.shortid},{
      $push:{
        visitHistory:{timestamp:Date.now()}
      }
      
    });
    res.redirect(url.redirturl)
  } catch (error) {
    return res.status(404).json({message:"error occured in finding the url"})
  }
 


})
app.listen(PORT || 3000, () => {
  console.log(`port is listhening at ${PORT}`);
});

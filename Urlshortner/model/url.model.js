import mongoose from 'mongoose'
import { Schema } from 'mongoose'
const urlschema=Schema({
   shortid:{
    type:String,
    required:true,
    unique:true
   },
   redirturl:{
    type:String,
    required:true,
   },
   visitHistory:
    [{timestamp:{type:Number}}]
   
},{timestamps:true});
export const Url=mongoose.model("Url",urlschema);
import  express from 'express'
const router=express.Router()
import { shortner,count } from '../controller/url.js';
router.route("/").post(shortner);
router.route("/count/:shortid").get(count)
export default router
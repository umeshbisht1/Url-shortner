import { nanoid } from "nanoid";
import { Url } from "../model/url.model.js";
export const shortner = async (req, res, next) => {
  if (!req.body.url) return res.status(400).json({ error: "url is required" });
  const shortid = nanoid(8);

  try {
    await Url.create({
      shortid,
      redirturl: req.body.url,
      visitHistory: [],
    });
    res.status(200).json({ mesage: "shorid created", data: shortid });
  } catch (error) {
    console.log("error");
  }
};
export const count = async (req, res, next) => {
  const shortid = req.params.shortid;
  console.log(shortid);
  try {
    const result = await Url.find({ shortid:shortid });
    
    return res
      .status(200)
      .json({
        message: "deatils fetched sucessfully",
        count: result[0].visitHistory.length,
        history: result[0].visitHistory
      });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

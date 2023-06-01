import mongoose from "mongoose";
import {MONGO} from '../config.js'

export async function connectToDB() {
  try {
    await mongoose.connect(MONGO);
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
}

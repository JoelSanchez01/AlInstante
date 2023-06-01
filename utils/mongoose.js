import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect(MONGO);
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
}

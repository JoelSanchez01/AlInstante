import mongoose from "mongoose";
const dev_db_url =
  "mongodb+srv://DiegoCass:diego123@cluster0.4oc98cj.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

export async function connectToDB() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
}

import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected succesfully");
    });

    connection.on("error", (error) => {
      console.log("error encountered while connecting to mongodb");
      console.log(error);
      process.exit();
    });
  } catch (error) {
    console.log("Error Encountered");
    console.log(error);
  }
}

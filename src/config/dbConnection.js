import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("MongoDb DataBase Connected");
  } catch (error) {
    console.log(`MongoDB connection Failed:: ${error}`);
    process.exit(1);
  }
};

export default dbConnection;

const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected successfully..");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};
module.exports = connectDB;

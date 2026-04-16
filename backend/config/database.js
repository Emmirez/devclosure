import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Retry connection after 5 seconds
    console.log("Retrying connection in 5 seconds...");
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;

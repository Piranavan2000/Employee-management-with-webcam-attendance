const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sumathysathiyavannan:123@cluster0.ogtycol.mongodb.net/");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectDB;
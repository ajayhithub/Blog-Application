const mongoose = require("mongoose");
// const { MONGO_CONNECTION_URI } = require("./keys");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://aaajjy864:placewit@placewit.g7svb80.mongodb.net/?retryWrites=true&w=majority&appName=placewit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDb;

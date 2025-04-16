// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/mern-food-delivery-app').then(()=>{
//        console.log('DB connected') ;
//     })
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};


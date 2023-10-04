import mongoose from "mongoose";

export const dbConnect = async () =>{
    const connectString = process.env.NEXT_PUBLIC_MONGO_URI;
    try {
        await mongoose.connect(connectString);

        console.log("Database connected")
    } catch (error) {
        console.log(error);
        
    }
}
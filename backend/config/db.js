import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://celeirodepaz:%403108Rike%23@cluster0.eh5t4vb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
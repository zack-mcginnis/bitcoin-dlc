import mongoose from "mongoose";

export const connectDatabase = async () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
}



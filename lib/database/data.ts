import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase =async () => {
    if (cached.conn) {
        return cached.conn;
    }
};
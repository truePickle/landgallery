import mongoose from "mongoose";
let connection;
export const connectToDb = async () => {
    try {
        if(connection && mongoose.connection.readyState === 1){
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB);
        connection = db.connection;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
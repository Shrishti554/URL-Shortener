import mongoose from "mongoose";

const connectDB = async () => {
    try 
    {
    //  const conn  = await mongoose.connect(process.env.MONGO_URI,{
    //     useNewUrlParser: true ,

    //     useUnifiedTopology:true,
    //  })
     const conn  = await mongoose.connect(process.env.MONGO_URI); // ✅ clean and modern

     console.log(`MongoDb Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error ;${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
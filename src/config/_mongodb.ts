import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/arcana";

export const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);

		console.log("MongoDB database connection established successfully");
	} catch (error: any) {
		console.error(error.message);
		console.log("MongoDB connection error. Please make sure MongoDB is running.");
		process.exit(1);
	}
};

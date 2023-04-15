import mongoose from "mongoose";

// Define the schema
const StockSchema = new mongoose.Schema({
	symbol: { type: String, required: true, unique: true },
	company: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

// Define the document interface
export interface StockDocument extends mongoose.Document {
	_id: mongoose.Schema.Types.ObjectId;
	symbol: string;
	company: string;
	createdAt?: Date;
}

// Define the model interface
export type StockModel = mongoose.Model<StockDocument>;

// Export the schema and model
export const Stock = mongoose.model<StockDocument, StockModel>("stock", StockSchema);

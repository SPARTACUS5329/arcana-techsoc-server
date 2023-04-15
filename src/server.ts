import express, { Application } from "express";
import { router } from "./routes/router";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToMongoDB } from "./config/_mongodb";

const app: Application = express();
const port = 8000;

const main = async () => {
	await connectToMongoDB();

	app.use(
		cors({
			credentials: true,
			origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
		})
	);

	app.use(bodyParser.json({ limit: "50mb" }));
	app.use(
		bodyParser.urlencoded({
			limit: "50mb",
			extended: true,
			parameterLimit: 50000,
		})
	);

	app.use("/", router);

	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
};

main();

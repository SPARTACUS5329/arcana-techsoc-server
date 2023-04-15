import { Request, Response } from "express";
import fs from "fs";
import csv from "csv-parser";
import { pipeline } from "stream";
import { CSVPoint, Datapoint } from "../utils/types";

export const getSymbolData = async (req: Request, res: Response) => {
	try {
		const { symbol } = req.query;
		const records: Datapoint[] = [];

		const parsedCSV = fs
			.readFileSync(
				"/Users/kaditya/Desktop/   /Hackathon/arcana-techsoc-server/src/data/data.csv"
			)
			.toString()
			.split("\n");
		for (const row of parsedCSV) {
			const data = row.split(",");
			if (data[1] !== symbol) continue;
			records.push({
				date: data[0],
				symbol: data[1],
				price: parseFloat(data[2]),
				volume: parseInt(data[3]),
			});
		}
		return res.status(200).send(records);
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};

export const searchSymbol = async (req: Request, res: Response) => {
	try {
		const { symbol } = req.body;
		const parsedCSV = fs
			.readFileSync(
				"/Users/kaditya/Desktop/   /Hackathon/arcana-techsoc-server/src/data/list.csv"
			)
			.toString()
			.split("\n");
		for (const row of parsedCSV) {
			if (row === symbol) return res.status(200).send("SUCCESS");
		}
		return res.status(200).send("FAILED");
		res.status(200).send("SUCCESS");
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};

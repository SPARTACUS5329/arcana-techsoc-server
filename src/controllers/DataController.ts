import { Request, Response } from "express";
import fs from "fs";
import { Datapoint } from "../utils/types";
import { Stock } from "../models/Stock";
import { RSI, predict, sentient } from "../utils/constants";

export const foo = async (req: Request, res: Response) => {
	res.status(200).send("Working dumbass");
};

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
		console.error(error);
		return res.status(500).send(error.message);
	}
};

export const addToPortfolio = async (req: Request, res: Response) => {
	try {
		const { symbol } = req.body;
		const stock = new Stock({ symbol, company: symbol });
		await stock.save();
		return res.status(200).send("SUCCESS");
	} catch (error: any) {
		if (error.code === 11000) return res.status(400).send("Already exists in your portfolio");
		console.error(error);
		return res.status(500).send(error.message);
	}
};

export const getPortfolio = async (req: Request, res: Response) => {
	try {
		return res.status(200).send(await Stock.find({}));
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};

export const getRSI = async (req: Request, res: Response) => {
	try {
		return res.status(200).send(RSI);
	} catch (error: any) {
		return res.status(500).send(error.message);
	}
};

export const getSentient = async (req: Request, res: Response) => {
	try {
		return res.status(200).send(sentient);
	} catch (error: any) {
		return res.status(500).send(error.message);
	}
};

export const getPrediction = async (req: Request, res: Response) => {
	try {
		return res.status(200).send(predict);
	} catch (error: any) {
		return res.status(500).send(error.message);
	}
};

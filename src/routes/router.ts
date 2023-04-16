import express, { Router } from "express";
import {
	addToPortfolio,
	foo,
	getPortfolio,
	getPrediction,
	getRSI,
	getSentient,
	getSymbolData,
	searchSymbol,
} from "../controllers/DataController";

const router: Router = express.Router();

router.get("/", foo);
router.get("/symbol-data", getSymbolData);
router.post("/search", searchSymbol);
router.get("/portfolio", getPortfolio);
router.post("/portfolio", addToPortfolio);
router.get("/rsi", getRSI);
router.get("/sentient", getSentient);
router.get("/predict", getPrediction);

export { router };

import express, { Router } from "express";
import {
	addToPortfolio,
	foo,
	getPortfolio,
	getSymbolData,
	searchSymbol,
} from "../controllers/DataController";

const router: Router = express.Router();

router.get("/", foo);
router.get("/symbol-data", getSymbolData);
router.post("/search", searchSymbol);
router.get("/portfolio", getPortfolio);
router.post("/portfolio", addToPortfolio);

export { router };

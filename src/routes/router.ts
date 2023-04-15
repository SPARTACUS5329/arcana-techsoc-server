import express, { Router } from "express";
import { getSymbolData, searchSymbol } from "../controllers/DataController";

const router: Router = express.Router();

router.get("/symbol-data", getSymbolData);
router.post("/search", searchSymbol);

export { router };

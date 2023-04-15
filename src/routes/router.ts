import express, { Router } from "express";
import { getData } from "../controllers/DataController";

const router: Router = express.Router();

router.get("/data", getData);

export { router };

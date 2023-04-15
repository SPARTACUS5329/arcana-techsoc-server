import { Request, Response } from "express";

export const getData = async (req: Request, res: Response) => {
	try {
		console.log(req);
		return res.status(200).send("SUCCESS");
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};

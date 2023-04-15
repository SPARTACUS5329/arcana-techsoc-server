export interface CSVPoint {
	ds: string;
	symbol: string;
	close: string;
	volume: string;
}

export interface Datapoint {
	date: string; // YYYY-MM-DD
	price: number;
	volume: number;
	symbol: string;
}

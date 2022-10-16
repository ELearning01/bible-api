import { Request, Response } from "express";
import { readFileSync } from "fs";

const parseCSV = (req: Request, res: Response) => {
    const csv = readFileSync('.')
  res.json({});
};

export { parseCSV };

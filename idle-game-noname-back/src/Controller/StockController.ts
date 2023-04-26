import { Request, Response } from "express";
import { StockBusiness } from "../Business/StockBusiness";

export class StockController {
    constructor(
        private stockBusiness = new StockBusiness
    ){
        stockBusiness = this.stockBusiness
    }

    public GetStock( req: Request, res: Response) {
        try {
            const UserId = req.body.user_id

            res.status(200).send(UserId)
        } catch (error: any) {
            res.status(400).send({error: error.message})
        }
    }
}
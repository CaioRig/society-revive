import { Request, Response } from "express";
import { StockBusiness } from "../Business/StockBusiness";
import { GetStockInputDTO } from "../Model/Stock/StockModel";

export class StockController {
    constructor(
        private stockBusiness = new StockBusiness
    ) {
        stockBusiness = this.stockBusiness
    }

    public GetStock = async (req: Request, res: Response) => {
        try {
            const UserId: GetStockInputDTO = req.body.user_id

            const StockData = await this.stockBusiness.GetStock(UserId)

            res.status(200).send(StockData)
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}
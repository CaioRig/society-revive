import { StockDatabase } from "../Database/StockDatabase";

export class StockBusiness {
    constructor(
        private stockDatabase = new StockDatabase()
    ){
        stockDatabase = this.stockDatabase
    }

    public GetStock() {
        try {
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}
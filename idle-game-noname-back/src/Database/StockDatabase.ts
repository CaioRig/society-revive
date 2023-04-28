import { GetStockInputDTO } from "../Model/Stock/StockModel";
import { BaseDatabase } from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
    private TABLE_NAME = 'stock_numbers'

    public GetStock = async (UserId: GetStockInputDTO) => {
        try {
            const user_id = UserId

            const RequestResult = await StockDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({user_id})

            return RequestResult
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
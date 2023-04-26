import { BaseDatabase } from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
    public GetStock = async () => {
        try {

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
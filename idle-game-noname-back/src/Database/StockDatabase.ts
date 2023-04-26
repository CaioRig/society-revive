import { BaseDatabase } from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
    public GetResources = async () => {
        try {

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
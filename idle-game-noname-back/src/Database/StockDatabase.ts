import { GetStockInputDTO, SendStockOutputDTO } from "../Model/Stock/StockModel";
import { BaseDatabase } from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
    private TABLE_NAME = 'stock_numbers'

    public GetStock = async (UserId: GetStockInputDTO) => {
        try {
            const user_id = UserId

            const RequestResult = await StockDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({ user_id })

            return RequestResult
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public SendStock = async (newData: SendStockOutputDTO) => {
        try {
            const {
                user_id,
                resource_number,
                building_material_number,
                crafting_material_number
            } = newData

            await StockDatabase.connection(this.TABLE_NAME)
                .insert({
                    user_id,
                    resource_number,
                    building_material_number,
                    crafting_material_number
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
import { GetStockInputDTO, SendStockOutputDTO } from "../Model/Stock/StockModel";
import { BaseDatabase } from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
    private TABLE_NAME = 'stock_numbers'

    // Get user stock data based on user_id
    public getStock = async (UserId: GetStockInputDTO) => {
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

    // Checks if the user_id already exists
    public getStockUserId = async (UserId: string) => {
        try {
            const user_id = UserId

            const RequestResult = await StockDatabase.connection(this.TABLE_NAME)
                .select('user_id')
                .where({ user_id })

            return RequestResult
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    // Create a user stock data
    public sendStock = async (newData: SendStockOutputDTO) => {
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

    // Update a user stock data based on user_id
    public updateStock = async (newData: SendStockOutputDTO) => {
        try {
            const {
                user_id,
                resource_number,
                building_material_number,
                crafting_material_number
            } = newData

            await StockDatabase.connection(this.TABLE_NAME)
                .where({ user_id })
                .update({
                    resource_number,
                    building_material_number,
                    crafting_material_number
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
import { StockDatabase } from "../Database/StockDatabase";
import { MissingInput } from "../Errors/BaseError";
import {
    GetStockInputDTO,
    SendStockInputDTO,
    SendStockOutputDTO
} from "../Model/Stock/StockModel";

export class StockBusiness {
    constructor(
        private stockDatabase = new StockDatabase()
    ) {
        stockDatabase = this.stockDatabase
    }

    public GetStock = async (input: GetStockInputDTO) => {
        try {
            const UserId = input

            if (!UserId) {
                throw new MissingInput()
            }

            const RequestResult = await this.stockDatabase.GetStock(UserId)

            return RequestResult
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public SendStock = async (input: SendStockInputDTO) => {
        try {
            const { UserId,
                ResourceNumber,
                BuildingMaterialNumber,
                CraftingMaterialNumber
            } = input

            if (!UserId ||
                !ResourceNumber ||
                !BuildingMaterialNumber ||
                !CraftingMaterialNumber) {
                throw new MissingInput()
            }

            const newData: SendStockOutputDTO = {
                user_id: UserId,
                resource_number: ResourceNumber,
                building_material_number: BuildingMaterialNumber,
                crafting_material_number: CraftingMaterialNumber
            }
            const RequestResult = await this.stockDatabase.GetStockUserId(UserId)
            let message: string = ``

            if (RequestResult.length !== 0) {
                await this.stockDatabase.UpdateStock(newData)
                message = "Success! User information updated"

                return message
            } else {
                await this.stockDatabase.SendStock(newData)
                message = "Success! User information created"

                return message
            }

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
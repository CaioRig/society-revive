import { StockDatabase } from "../Database/StockDatabase";
import { MissingInput } from "../Errors/BaseError";
import { GetStockInputDTO, SendStockInputDTO } from "../Model/Stock/StockModel";

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
            }
                = input

            if (!UserId ||
                !ResourceNumber ||
                !BuildingMaterialNumber ||
                !CraftingMaterialNumber) {
                throw new MissingInput()
            }

            const RequestResult = await this.stockDatabase.SendStock(input)

            return RequestResult
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
import { Request, Response } from "express";
import { StockBusiness } from "../Business/StockBusiness";
import { GetStockInputDTO, SendStockInputDTO } from "../Model/Stock/StockModel";

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

    public SendStock = async (req: Request, res: Response) => {
        try {
            const { user_id,
                resource_number,
                building_material_number,
                crafting_material_number } = req.body

            const input: SendStockInputDTO = {
                UserId: user_id,
                ResourceNumber: resource_number,
                BuildingMaterialNumber: building_material_number,
                CraftingMaterialNumber: crafting_material_number
            }

            const message = await this.stockBusiness.SendStock(input)

            res.status(200).send(message)
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}
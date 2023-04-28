export interface GetStockInputDTO {
    user_id: string
}

export interface SendStockInputDTO {
    UserId: string,
    ResourceNumber: string,
    BuildingMaterialNumber: string,
    CraftingMaterialNumber: string
}
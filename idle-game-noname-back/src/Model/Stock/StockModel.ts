export interface GetStockInputDTO {
    user_id: string
}

export interface SendStockInputDTO {
    UserId: string,
    ResourceNumber: string,
    BuildingMaterialNumber: string,
    CraftingMaterialNumber: string
}

export interface SendStockOutputDTO {
    user_id: string,
    resource_number: string,
    building_material_number: string,
    crafting_material_number: string
}
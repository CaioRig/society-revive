import { useState } from "react";

const useStateStock = () => {
    // STOCK NUMBERS -------------------------------------
    const [resourceNumber, setResourceNumber] = useState(0)
    const [buildingMaterialNumber, setBuildingMaterialNumber] = useState(0)
    const [craftingMaterialNumber, setCraftingMaterialNumber] = useState(0)

    const globalStockData = {
        resourceNumber,
        buildingMaterialNumber,
        craftingMaterialNumber,
        setResourceNumber,
        setBuildingMaterialNumber,
        setCraftingMaterialNumber
    }

    return globalStockData;
}

export default useStateStock;
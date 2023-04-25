import { useState } from "react";

const useStateActions = () => {
    // ACTION QUANTITY -------------------------------------
    const [survivorsQty, setSurvivorsQty] = useState(0)
    const [survivorsEquipQty, setSurvivorsEquipQty] = useState(0)

    const [housingQty, setHousingQty] = useState(0)

    const [toolsQty, setToolsQty] = useState(0)

    // ACTION PRICES -------------------------------------
    const [findSurvivorPrice, setFindSurvivorPrice] = useState(50)
    const [equipSurvivorPrice, setEquipSurvivorPrice] = useState(2000)

    const [buildHousingPrice, setBuildHousingPrice] = useState(1000)

    const [toolsPrice, setToolsPrice] = useState(1500)

    // ACTION STOCK MODIFIER -------------------------------------
    // SURVIVORS
    const [survivorResourceModifier, setSurvivorResourceModifier] = useState(1)
    const [survivorBuildingModifier, setSurvivorBuildingModifier] = useState(1)

    const [equipSurvivorResourceModifier, setEquipSurvivorResourceModifier] = useState(5)
    const [equipSurvivorBuildingModifier, setEquipSurvivorBuildingModifier] = useState(1)
    const [equipSurvivorCraftingModifier, setEquipSurvivorCraftingModifier] = useState(1)

    // HOUSES
    const [housingBuildingModifier, setHousingBuildingModifier] = useState(2)
    const [housingCraftingModifier, setHousingCraftingModifier] = useState(1)

    // TOOLS
    const [toolsResourceModifier, setToolsResourceModifier] = useState(3)
    const [toolsCraftingModifier, setToolsCraftingModifier] = useState(2)

    const globalActionData = {
        ActionQty: {
            survivorsQty,
            setSurvivorsQty,
            survivorsEquipQty,
            setSurvivorsEquipQty,
            housingQty,
            setHousingQty,
            toolsQty,
            setToolsQty
        },
        ActionPrice: {
            findSurvivorPrice,
            setFindSurvivorPrice,
            equipSurvivorPrice,
            setEquipSurvivorPrice,
            buildHousingPrice,
            setBuildHousingPrice,
            toolsPrice,
            setToolsPrice
        },
        ActionModifier: {
            Survivor: {
                survivorResourceModifier,
                setSurvivorResourceModifier,
                survivorBuildingModifier,
                setSurvivorBuildingModifier,
                equipSurvivorResourceModifier,
                setEquipSurvivorResourceModifier,
                equipSurvivorBuildingModifier,
                setEquipSurvivorBuildingModifier,
                equipSurvivorCraftingModifier,
                setEquipSurvivorCraftingModifier
            },
            House: {
                housingBuildingModifier,
                setHousingBuildingModifier,
                housingCraftingModifier,
                setHousingCraftingModifier
            },
            Tools: {
                toolsResourceModifier,
                setToolsResourceModifier,
                toolsCraftingModifier,
                setToolsCraftingModifier
            }
        }
    }

    return globalActionData;
}

export default useStateActions;


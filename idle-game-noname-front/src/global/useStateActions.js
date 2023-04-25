import { useState } from "react";

const StateActions = () => {
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

    // ACTION FUNCTIONS -------------------------------------
    // FIND SURVIVORS
    const findSurvivor = () => {
        setResourseNumber(resourceNumber - findSurvivorPrice)
        setSurvivorsQty(survivorsQty + 1) // SURVIVOR QUANTITY
        setFindSurvivorPrice(findSurvivorPrice + (survivorsQty * 2) + survivorResourceModifier) // PRICE
        setResoursePerSec(resourcePerSec + survivorResourceModifier) // RESOURSE PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + survivorBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
    }

    // EQUIP SURVIVORS
    const equipSurvivor = () => {
        setResourseNumber(resourceNumber - equipSurvivorPrice)
        setSurvivorsEquipQty(survivorsEquipQty + 1) // EQUIPPED SURVIVOR QUANTITY
        setEquipSurvivorPrice(equipSurvivorPrice + (survivorsEquipQty * 3) + equipSurvivorResourceModifier) // PRICE
        setResoursePerSec(resourcePerSec + equipSurvivorResourceModifier) // RESOURSE PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + equipSurvivorBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
        setCraftingMaterialPerSec(craftingMaterialPerSec + equipSurvivorCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD HOUSING
    const buildHousing = () => {
        setBuildingMaterialNumber(buildingMaterialNumber - buildHousingPrice)
        setHousingQty(housingQty + 1) // HOUSE QUANTITY
        setBuildHousingPrice(buildHousingPrice + (housingQty * 2) + housingBuildingModifier) // PRICE
        setBuildingMaterialPerSec(buildingMaterialPerSec + housingBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
        setCraftingMaterialPerSec(craftingMaterialPerSec + housingCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD TOOLS
    const buildTools = () => {
        setCraftingMaterialNumber(craftingMaterialNumber - toolsPrice)
        setToolsQty(toolsQty + 1) // TOOLS QUANTITY
        setToolsPrice(toolsPrice + (toolsQty * 2) + toolsCraftingModifier) // PRICE
        setResoursePerSec(resourcePerSec + toolsResourceModifier) // RESOURSE PRODUCTION PER SEC
        setCraftingMaterialPerSec(craftingMaterialPerSec + toolsCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    const globalActionData = {
        Action: {
            findSurvivor,
            equipSurvivor,
            buildHousing,
            buildTools
        },
        ActionPrice: {
            findSurvivorPrice,
            equipSurvivorPrice,
            buildHousingPrice,
            toolsPrice
        },
        ActionQty: {
            survivorsQty,
            survivorsEquipQty,
            housingQty,
            toolsQty
        },
        ActionModifier: {
            Survivor: {
                survivorResourceModifier,
                survivorBuildingModifier,
                equipSurvivorResourceModifier,
                equipSurvivorBuildingModifier,
                equipSurvivorCraftingModifier
            },
            House: {
                housingBuildingModifier,
                housingCraftingModifier
            },
            Tools: {
                toolsResourceModifier,
                toolsCraftingModifier
            }
        }
    }

    return globalActionData;
}

export default StateActions;


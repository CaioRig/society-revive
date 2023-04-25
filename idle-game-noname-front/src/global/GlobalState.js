import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";
import useStateStock from "./useStateStock";
import useStateProductionPerSec from "./useStateProductionPerSec";
import useStateActions from "./useStateActions";

const GlobalState = (props) => {
    // STOCK NUMBERS
    const { resourceNumber,
        buildingMaterialNumber,
        craftingMaterialNumber,
        setResourceNumber,
        setBuildingMaterialNumber,
        setCraftingMaterialNumber } = useStateStock()

    // PRODUCTION PER SEC
    const {
        resourcePerSec,
        buildingMaterialPerSec,
        craftingMaterialPerSec,
        setResoursePerSec,
        setBuildingMaterialPerSec,
        setCraftingMaterialPerSec
    } = useStateProductionPerSec()

    // ACTION DATA
    const {
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
    } = useStateActions()

    // GATHER PER CLICK -------------------------------------
    const addNumberPerClick = () => {
        setResourceNumber(resourceNumber + 1)
    }
    // CLICK HACK FOR DEBUGGING PURPOSES
    // const debugClick = () => {
    //     setResourceNumber(resourceNumber + 100000)
    //     setBuildingMaterialNumber(buildingMaterialNumber + 100000)
    //     setCraftingMaterialNumber(craftingMaterialNumber + 100000)
    // }

    // ACTION FUNCTIONS -------------------------------------
    // FIND SURVIVORS
    const findSurvivor = () => {
        setResourceNumber(resourceNumber - findSurvivorPrice)
        setSurvivorsQty(survivorsQty + 1) // SURVIVOR QUANTITY
        setFindSurvivorPrice(findSurvivorPrice + (survivorsQty * 2) + survivorResourceModifier) // PRICE
        setResoursePerSec(resourcePerSec + survivorResourceModifier) // RESOURSE PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + survivorBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
    }

    // EQUIP SURVIVORS
    const equipSurvivor = () => {
        setResourceNumber(resourceNumber - equipSurvivorPrice)
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

    // VALUE UPDATE PER SECOND -------------------------------------
    const addResoursePerSecond = () => setResourceNumber(resourceNumber + resourcePerSec)
    const addBuildingMaterialPerSecond = () => setBuildingMaterialNumber(buildingMaterialNumber + buildingMaterialPerSec)
    const addCraftingMaterialPerSecond = () => setCraftingMaterialNumber(craftingMaterialNumber + craftingMaterialPerSec)

    const second = useGetSeconds()
    useEffect(() => {
        addResoursePerSecond()
        addBuildingMaterialPerSecond()
        addCraftingMaterialPerSecond()
    }, [second])

    const globalData = {
        Gather: {
            addNumberPerClick,
            // debugClick
        },
        PerSec: {
            resourcePerSec,
            buildingMaterialPerSec,
            craftingMaterialPerSec
        },
        Stock: {
            resourceNumber,
            buildingMaterialNumber,
            craftingMaterialNumber
        },
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

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;


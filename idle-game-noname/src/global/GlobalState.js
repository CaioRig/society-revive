import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";

const GlobalState = (props) => {
    // GATHER PER CLICK -------------------------------------
    const addNumberPerClick = () => {
        setResourseNumber(resourseNumber + 1)
    }
    const debugClick = () => {
        setResourseNumber(resourseNumber + 100000)
        setBuildingMaterialNumber(buildingMaterialNumber + 100000)
        setCraftingMaterialNumber(craftingMaterialNumber + 100000)
    }

    // STOCK NUMBERS -------------------------------------
    const [resourseNumber, setResourseNumber] = useState(0)
    const [buildingMaterialNumber, setBuildingMaterialNumber] = useState(0)
    const [craftingMaterialNumber, setCraftingMaterialNumber] = useState(0)

    // PRODUCTION PER SECOND -------------------------------------
    const [resoursePerSec, setResoursePerSec] = useState(0)
    const [buildingMaterialPerSec, setBuildingMaterialPerSec] = useState(0)
    const [craftingMaterialPerSec, setCraftingMaterialPerSec] = useState(0)

    // ACTION STOCK MODIFIER -------------------------------------
    // SURVIVORS
    const [survivorResourceModifier, setSurvivorResourceModifier] = useState(1)
    const [survivorBuildingModifier, setSurvivorBuildingModifier] = useState(1)

    const [equipSurvivorResourceModifier, setEquipSurvivorResourceModifier] = useState(5)
    const [equipSurvivorBuildingModifier, setEquipSurvivorBuildingModifier] = useState(1)
    const [equipSurvivorCraftingModifier, setEquipSurvivorCraftingModifier] = useState(1)

    // HOUSES
    const [ housingBuildingModifier, setHousingBuildingModifier ] = useState(1)
    const [ housingCraftingModifier, setHousingCraftingModifier ] = useState(1)

    // TOOLS
    const [ toolsResourceModifier, setToolsResourceModifier ] = useState(3)
    const [ toolsCraftingModifier, setToolsCraftingModifier ] = useState(1)

    // ACTION QUANTITY -------------------------------------
    const [survivorsQty, setSurvivorsQty] = useState(0)
    const [survivorsEquipQty, setSurvivorsEquipQty] = useState(0)

    const [housingQty, setHousingQty] = useState(0)

    const [toolsQty, setToolsQty] = useState(0)

    // PRICES -------------------------------------
    const [findSurvivorPrice, setFindSurvivorPrice] = useState(50)
    const [equipSurvivorPrice, setEquipSurvivorPrice] = useState(1200)

    const [buildHousingPrice, setBuildHousingPrice] = useState(1000)

    const [toolsPrice, setToolsPrice] = useState(1500)

    // ACTION FUNCTIONS -------------------------------------
    // FIND SURVIVORS
    const findSurvivor = () => {
        setResourseNumber(resourseNumber - findSurvivorPrice)
        setSurvivorsQty(survivorsQty + 1) // SURVIVOR QUANTITY
        setFindSurvivorPrice(findSurvivorPrice + (resoursePerSec * 2) + 1) // PRICE
        setResoursePerSec(resoursePerSec + survivorResourceModifier) // RESOURSE PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + survivorBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
    }

    // EQUIP SURVIVORS
    const equipSurvivor = () => {
        setCraftingMaterialNumber(craftingMaterialNumber - equipSurvivorPrice)
        setSurvivorsEquipQty(survivorsEquipQty + 1) // EQUIPPED SURVIVOR QUANTITY
        setEquipSurvivorPrice(equipSurvivorPrice + (craftingMaterialPerSec * 3) + 5) // PRICE
        setResoursePerSec(resoursePerSec + equipSurvivorResourceModifier) // RESOURSE PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + equipSurvivorBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
        setCraftingMaterialPerSec(craftingMaterialPerSec + equipSurvivorCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD HOUSING
    const buildHousing = () => {
        setBuildingMaterialNumber(buildingMaterialNumber - buildHousingPrice)
        setHousingQty(housingQty + 1) // HOUSE QUANTITY
        setBuildHousingPrice(buildHousingPrice + (craftingMaterialPerSec * 2) + 1) // PRICE
        setBuildingMaterialPerSec(buildingMaterialPerSec + housingBuildingModifier) // BUILDING MATERIAL PRODUCTION PER SECOND
        setCraftingMaterialPerSec(craftingMaterialPerSec + housingCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD TOOLS
    const buildTools = () => {
        setCraftingMaterialNumber(craftingMaterialNumber - toolsPrice)
        setToolsQty(toolsQty + 1) // TOOLS QUANTITY
        setToolsPrice(toolsPrice + (resoursePerSec * 2) + 1) // PRICE
        setResoursePerSec(resoursePerSec + toolsResourceModifier) // RESOURSE PRODUCTION PER SEC
        setCraftingMaterialPerSec(craftingMaterialPerSec + toolsCraftingModifier) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // VALUE UPDATE PER SECOND -------------------------------------
    const addResoursePerSecond = () => setResourseNumber(resourseNumber + resoursePerSec)
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
            debugClick
        },
        Stock: {
            resourseNumber,
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
import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";

const GlobalState = (props) => {
    // STOCK NUMBERS
    const [resourseNumber, setResourseNumber] = useState(0)
    const [buildingMaterialNumber, setBuildingMaterialNumber] = useState(0)
    const [craftingMaterialNumber, setCraftingMaterialNumber] = useState(0)

    // PRODUCTION PER SECOND
    const [resoursePerSec, setResoursePerSec] = useState(0)
    const [buildingMaterialPerSec, setBuildingMaterialPerSec] = useState(0)
    const [craftingMaterialPerSec, setCraftingMaterialPerSec] = useState(0)

    // ACTION QUANTITY
    const [survivorsQty, setSurvivorsQty] = useState(0)
    const [housingQty, setHousingQty] = useState(0)
    const [toolsQty, setToolsQty] = useState(0)

    // PRICES
    const [findSurvivorPrice, setFindSurvivorPrice] = useState(50)
    const [buildHousingPrice, setBuildHousingPrice] = useState(1000)
    const [toolsPrice, setToolsPrice] = useState(1500)

    // GATHER PER CLICK
    const addNumberPerClick = () => {
        setResourseNumber(resourseNumber + 1)
    }
    
    // ACTION FUNCTIONS

    // FIND SURVIVORS
    const findSurvivor = () => {
        setResourseNumber(resourseNumber - findSurvivorPrice)
        setResoursePerSec(resoursePerSec + 1) // RESOURSE PRODUCTION PER SECOND
        setSurvivorsQty(survivorsQty + 1) // SURVIVOR QUANTITY
        setFindSurvivorPrice(findSurvivorPrice + (resoursePerSec * 2)) // PRICE
        setBuildingMaterialPerSec(buildingMaterialPerSec + 1) // BUILDING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD HOUSING
    const buildHousing = () => {
        setBuildingMaterialNumber(buildingMaterialNumber - buildHousingPrice)
        setHousingQty(housingQty + 1) // HOUSE QUANTITY
        setBuildHousingPrice(buildHousingPrice + (craftingMaterialPerSec * 2)) // PRICE
        setCraftingMaterialPerSec(craftingMaterialPerSec + 1) // CRAFTING MATERIAL PRODUCTION PER SECOND
        setBuildingMaterialPerSec(buildingMaterialPerSec + 1) // BUILDING MATERIAL PRODUCTION PER SECOND
    }

    // BUILD TOOLS
    const buildTools = () => {
        setCraftingMaterialNumber(craftingMaterialNumber - toolsPrice)
        setToolsQty(toolsQty + 1) // TOOLS QUANTITY
        setToolsPrice(toolsPrice + (resoursePerSec * 2)) // PRICE
        setResoursePerSec(resoursePerSec + 2) // RESOURSE PRODUCTION PER SEC
        setCraftingMaterialPerSec(craftingMaterialPerSec + 1) // CRAFTING MATERIAL PRODUCTION PER SECOND
    }

    // VALUE UPDATE PER SECOND
    const addResoursePerSecond = () => setResourseNumber(resourseNumber + resoursePerSec)
    const addCraftingMaterialPerSecond = () => setCraftingMaterialNumber(craftingMaterialNumber + craftingMaterialPerSec)
    const addBuildingMaterialPerSecond = () => setBuildingMaterialNumber(buildingMaterialNumber + buildingMaterialPerSec)

    const second = useGetSeconds()
    useEffect(() => {
        addResoursePerSecond()
        addBuildingMaterialPerSecond()
        addCraftingMaterialPerSecond()
    }, [second])

    const globalData = {
        Game: {
            resourseNumber,
            buildingMaterialNumber,
            craftingMaterialNumber,
            findSurvivorPrice,
            buildHousingPrice,
            toolsPrice,
            survivorsQty,
            housingQty,
            toolsQty,
            addNumberPerClick,
            findSurvivor,
            buildHousing,
            buildTools
        }
    }

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
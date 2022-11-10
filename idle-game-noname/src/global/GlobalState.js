import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";

const GlobalState = (props) => {
    const [resourseNumber, setResourseNumber] = useState(0)
    const [buildingMaterialNumber, setBuildingMaterialNumber] = useState(0)
    const [craftingMaterialNumber, setCraftingMaterialNumber] = useState(0)

    const [buildingMaterialPerSec, setBuildingMaterialPerSec] = useState(0)
    const [survivorsQty, setSurvivorsQty] = useState(0)
    const [findSurvivorPrice, setFindSurvivorPrice] = useState(25)

    const [craftingMaterialPerSec, setCraftingMaterialPerSec] = useState(0)
    const [housingQty, setHousingQty] = useState(0)
    const [buildHousingPrice, setBuildHousingPrice] = useState(250)

    const second = useGetSeconds()

    const addBuildingMaterialPerSecond = () => setBuildingMaterialNumber(buildingMaterialNumber + buildingMaterialPerSec)
    const addNumberPerClick = () => {
        setResourseNumber(resourseNumber + 1)
    }

    const findSurvivor = () => {
        setResourseNumber(resourseNumber - findSurvivorPrice)
        setSurvivorsQty(survivorsQty + 1)
        setBuildingMaterialPerSec(buildingMaterialPerSec + (survivorsQty / 2))
    }

    const buildHousing = () => {
        setBuildingMaterialNumber(buildingMaterialNumber - buildHousingPrice)
        setHousingQty(housingQty + 1)
        setBuildHousingPrice(buildHousingPrice + (housingQty / 2))
    }

    useEffect(() => {
        addBuildingMaterialPerSecond()
    }, [second])

    const globalData = {
        Game: {
            resourseNumber,
            findSurvivorPrice,
            buildingMaterialNumber,
            survivorsQty,
            addNumberPerClick,
            buildHousing,
            findSurvivor,
            craftingMaterialNumber
        },
        Debugger: {
            resourseNumber,
            buildingMaterialNumber,
            second
        }
    }

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
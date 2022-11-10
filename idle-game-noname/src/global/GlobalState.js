import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";

const GlobalState = (props) => {
    const [resourseNumber, setResourseNumber] = useState(0)
    const [resoursePerSecond, setResoursePerSecond] = useState(0)
    const [clickUpdates, setClickUpdates] = useState(1)
    const second = useGetSeconds()

    const addNumberPerClick = () => setResourseNumber(resourseNumber + clickUpdates)

    const addNumberPerSecond = () => setResourseNumber(resourseNumber + resoursePerSecond)

    const upgradeGatherer = () => setClickUpdates(clickUpdates + 1)
    const upgradeGatherPerSecond = () => setResoursePerSecond(resoursePerSecond + 1)

    useEffect(() => {
        addNumberPerSecond()
    }, [second])

    const globalData = {
        resourseNumber,
        addNumberPerClick,
        addNumberPerSecond,
        upgradeGatherer,
        upgradeGatherPerSecond
    }

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
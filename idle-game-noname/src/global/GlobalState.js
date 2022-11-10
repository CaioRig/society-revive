import GlobalStateContext from "./GlobalStateContext";
import { useState, useEffect } from "react";
import useGetSeconds from "../hooks/useGetSeconds";

const GlobalState = (props) => {
    const [resourseNumber, setResourseNumber] = useState(0)

    const [resoursePerSecond, setResoursePerSecond] = useState(0)
    const [resoursePerSecondPrice, setResoursePerSecondPrice] = useState(10)

    const [clickUpdates, setClickUpdates] = useState(1)
    const [clickUpdatesPrice, setClickUpdatesPrice] = useState(10)

    const second = useGetSeconds()

    const addNumberPerClick = () => setResourseNumber(resourseNumber + clickUpdates)

    const addNumberPerSecond = () => setResourseNumber(resourseNumber + resoursePerSecond)

    const upgradeGatherer = () => {
        setClickUpdates(clickUpdates + 1)
        setResourseNumber(resourseNumber - clickUpdatesPrice)
        setClickUpdatesPrice(clickUpdatesPrice * 2)
    }
    const upgradeGatherPerSecond = () => {
        setResoursePerSecond(resoursePerSecond + 1)
        setResourseNumber(resourseNumber - resoursePerSecondPrice)
        setResoursePerSecondPrice(resoursePerSecondPrice * 2)
    }

    useEffect(() => {
        addNumberPerSecond()
    }, [second])

    const globalData = {
        Game: {
            resourseNumber,
            clickUpdatesPrice,
            resoursePerSecondPrice,
            addNumberPerClick,
            addNumberPerSecond,
            upgradeGatherer,
            upgradeGatherPerSecond
        },
        Debugger: {
            resourseNumber,
            resoursePerSecond,
            clickUpdates,
            second,
            clickUpdatesPrice
        }
    }

    return (
        <GlobalStateContext.Provider value={globalData}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
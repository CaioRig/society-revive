import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

const Debugger = () => {
    const globalData = useContext(GlobalStateContext).Debugger
    return (<>
        <p>resourseNumber: {globalData.resourseNumber}</p>
        <p>resoursePerSecond: {globalData.resoursePerSecond}</p>
        <p>clickUpdates: {globalData.clickUpdates}</p>
        <p>Second: {globalData.second}</p>
        <p>clickUpdatesPrice: {globalData.clickUpdatesPrice}</p>
    </>
    )
}

export default Debugger;
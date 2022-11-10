import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

const Debugger = () => {
    const globalData = useContext(GlobalStateContext).Debugger
    return (<>
        <p>{globalData.resourseNumber}</p>
        <p>{globalData.resoursePerSecond}</p>
        <p>{globalData.clickUpdates}</p>
        <p>{globalData.second}</p>
    </>
    )
}

export default Debugger;
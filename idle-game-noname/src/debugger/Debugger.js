import { Button } from "@mui/material";
import { useContext, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

const Debugger = () => {
    const globalData = useContext(GlobalStateContext).Debugger

    const [debuggerToggle, setDebuggerToggle] = useState(false)

    const toggleDebug = () => {
        setDebuggerToggle(!debuggerToggle)
    }

    return (<div>
        <Button onClick={toggleDebug}>Debugger</Button>
        {
            debuggerToggle === true &&
            <>
                <p>resourseNumber: {globalData.resourseNumber}</p>
                <p>resoursePerSecond: {globalData.resoursePerSecond}</p>
                <p>buildingMaterialNumber: {globalData.buildingMaterialNumber}</p>
                <p>clickUpdates: {globalData.clickUpdates}</p>
                <p>Second: {globalData.second}</p>
                <p>clickUpdatesPrice: {globalData.clickUpdatesPrice}</p>
            </>
        }
        <br />
    </div>
    )
}

export default Debugger;
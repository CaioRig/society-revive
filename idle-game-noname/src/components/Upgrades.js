import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { Button } from "@mui/material"

const Upgrades = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <>
            {
                globalData.clickUpdatesPrice > globalData.resourseNumber
                    ?
                    <Button color="error">Upgrade tools</Button>
                    :
                    <Button onClick={globalData.upgradeGatherer}>Upgrade tools</Button>
            }
            <br />
            {
                globalData.resoursePerSecondPrice > globalData.resourseNumber
                    ?
                    <Button color="error">Find survivors</Button>
                    :
                    <Button onClick={globalData.upgradeGatherPerSecond}>Find survivors</Button>
            }
        </>
    )
}

export default Upgrades;
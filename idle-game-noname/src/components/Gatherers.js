import { useContext } from "react"
import { Button } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext"

const Gatherers = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Button onClick={globalData.addNumberPerClick}>Gather resourses</Button>
    )
}

export default Gatherers;
import { useContext } from "react"
import { Box, Button } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext"
import ParkIcon from '@mui/icons-material/Park';

const Gatherers = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Box textAlign="center">
            <Button onClick={globalData.addNumberPerClick}
                variant="outlined"
                size="large"
                title="Click to gather resources"
            ><ParkIcon /> Gather resources </Button>
        </Box>
    )
}

export default Gatherers;
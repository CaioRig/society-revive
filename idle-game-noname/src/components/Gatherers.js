import { useContext } from "react"
import { Box, Button } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext"
import ForestIcon from '@mui/icons-material/Forest';

const Gatherers = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Box textAlign="center">
            <Button onClick={globalData.addNumberPerClick}
                variant="outlined"
                size="large"
                title="Click to gather resources"
            >Gather resources <ForestIcon /></Button>
        </Box>
    )
}

export default Gatherers;
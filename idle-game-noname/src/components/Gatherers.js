import { useContext } from "react"
import { Box, Button } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext"
import ParkIcon from '@mui/icons-material/Park';

const Gatherers = () => {
    const gather = useContext(GlobalStateContext).Gather

    return (
        <Box textAlign="center">
            <Button onClick={gather.addNumberPerClick}
                variant="outlined"
                size="large"
                title="Click to gather resources"
            ><ParkIcon /> Gather resources </Button>
            
            {/* <Button onClick={gather.debugClick}
                variant="outlined"
                size="large"
                title="Click to gather resources"
            ><ParkIcon /> DEBUG </Button> */}
        </Box>
    )
}

export default Gatherers;
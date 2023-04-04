import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const Survivors = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container>
            {   // FIND SURVIVORS
                <Container>
                    <p>Survivors: {globalData.survivorsQty}</p>
                    {
                        globalData.findSurvivorPrice > globalData.resourseNumber
                            ?
                            <Button color="error"
                                variant="outlined"
                                title="Not enough resources"
                            ><AccessibilityNewIcon /> Find survivors</Button>
                            :
                            <Button onClick={globalData.findSurvivor}
                                variant="outlined"
                                title={`Search for survivors: \n+1 Survivor(s)\n+0.1/s Resources\n+0.1/s Building Materials`}
                            ><AccessibilityNewIcon /> Find survivors</Button>
                    }
                    <p>Cost: {globalData.findSurvivorPrice.toFixed(1)} Resourses</p>
                </Container>
            }
        </Container>
    )
}

export default Survivors;
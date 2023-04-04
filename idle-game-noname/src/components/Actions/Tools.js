import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import ConstructionIcon from '@mui/icons-material/Construction';

const Tools = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container>
            {   // CRAFT TOOLS
                globalData.housingQty < 10
                    ?
                    <></>
                    :
                    <Container>
                        <p>Tools: {globalData.toolsQty}</p>
                        {
                            globalData.toolsPrice > globalData.craftingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title="Not enough crafting materials"
                                ><ConstructionIcon /> Craft Tools</Button>
                                :
                                <Button onClick={globalData.buildTools}
                                    variant="outlined"
                                    title={`Build Tools: \n+1 Tool(s) \n+1/s Resources \n+0.5/s Crafting Materials`}
                                ><ConstructionIcon /> Craft Tools</Button>
                        }
                        <p>Cost: {globalData.toolsPrice.toFixed(1)} Crafting Materials</p>
                    </Container>
            }
        </Container>
    )
}

export default Tools;
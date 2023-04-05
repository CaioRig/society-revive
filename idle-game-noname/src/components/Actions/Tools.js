import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import ConstructionIcon from '@mui/icons-material/Construction';
import HardwareIcon from '@mui/icons-material/Hardware';

const Tools = () => {
    const stock = useContext(GlobalStateContext).Stock
    const action = useContext(GlobalStateContext).Action
    const modifiers = useContext(GlobalStateContext).ActionModifier.Tools
    const prices = useContext(GlobalStateContext).ActionPrice
    const qty = useContext(GlobalStateContext).ActionQty

    return (
        <Container>
            {   // CRAFT TOOLS
                qty.housingQty < 5
                    ?
                    <></>
                    :
                    <Container>
                        <Typography title="Tools">
                            <HardwareIcon /> {qty.toolsQty}
                        </Typography>
                        {
                            prices.toolsPrice > stock.craftingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title={`Not enough crafting materials \n+1 Tool(s) \n+${modifiers.toolsResourceModifier}/s Resources \n+${modifiers.toolsCraftingModifier}/s Crafting Materials`}
                                ><ConstructionIcon /> Craft Tools</Button>
                                :
                                <Button onClick={action.buildTools}
                                    variant="outlined"
                                    title={`Build Tools: \n+1 Tool(s) \n+${modifiers.toolsResourceModifier}/s Resources \n+${modifiers.toolsCraftingModifier}/s Crafting Materials`}
                                ><ConstructionIcon /> Craft Tools</Button>
                        }
                        <p>Cost: {prices.toolsPrice.toFixed(0)} Crafting Materials</p>
                    </Container>
            }
        </Container>
    )
}

export default Tools;
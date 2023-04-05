import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import CottageIcon from '@mui/icons-material/Cottage';
import HomeIcon from '@mui/icons-material/Home';

const Houses = () => {
    const stock = useContext(GlobalStateContext).Stock
    const action = useContext(GlobalStateContext).Action
    const modifiers = useContext(GlobalStateContext).ActionModifier.House
    const prices = useContext(GlobalStateContext).ActionPrice
    const qty = useContext(GlobalStateContext).ActionQty

    return (
        <Container>
            { // BUILD HOUSING
                qty.survivorsQty < 5
                    ?
                    <></>
                    :
                    <Container>
                        <Typography title="Houses">
                            <HomeIcon /> {qty.housingQty}
                        </Typography>
                        {
                            prices.buildHousingPrice > stock.buildingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title={`Not enough building materials \n+1 House(s) \n+${modifiers.housingBuildingModifier}/s Building Materials \n+${modifiers.housingCraftingModifier}/s Crafting Materials`}
                                ><CottageIcon /> Build Housings</Button>
                                :
                                <Button onClick={action.buildHousing}
                                    variant="outlined"
                                    title={`Build Housing: \n+1 House(s) \n+${modifiers.housingBuildingModifier}/s Building Materials \n+${modifiers.housingCraftingModifier}/s Crafting Materials`}
                                ><CottageIcon /> Build Housings</Button>
                        }
                        <p>Cost: {prices.buildHousingPrice.toFixed(0)} Building Materials</p>
                    </Container>
            }
        </Container>
    )
}

export default Houses;
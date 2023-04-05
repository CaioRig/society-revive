import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import CottageIcon from '@mui/icons-material/Cottage';
import HomeIcon from '@mui/icons-material/Home';

const Houses = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container>
            { // BUILD HOUSING
                globalData.survivorsQty < 5
                    ?
                    <></>
                    :
                    <Container>
                        <Typography title="Houses">
                            <HomeIcon /> {globalData.housingQty}
                        </Typography>
                        {
                            globalData.buildHousingPrice > globalData.buildingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title={`Not enough building materials \n+1 House(s) \n+0.5/s Building Materials \n+0.1/s Crafting Materials`}
                                ><CottageIcon /> Build Housings</Button>
                                :
                                <Button onClick={globalData.buildHousing}
                                    variant="outlined"
                                    title={`Build Housing: \n+1 House(s) \n+0.5/s Building Materials \n+0.1/s Crafting Materials`}
                                ><CottageIcon /> Build Housings</Button>
                        }
                        <p>Cost: {globalData.buildHousingPrice.toFixed(0)} Building Materials</p>
                    </Container>
            }
        </Container>
    )
}

export default Houses;
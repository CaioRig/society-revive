import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import CottageIcon from '@mui/icons-material/Cottage';

const Houses = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container>
            { // BUILD HOUSING
                globalData.survivorsQty < 10
                    ?
                    <></>
                    :
                    <Container>
                        <p>Houses: {globalData.housingQty}</p>
                        {
                            globalData.buildHousingPrice > globalData.buildingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title="Not enough building materials"
                                ><CottageIcon /> Build Housings</Button>
                                :
                                <Button onClick={globalData.buildHousing}
                                    variant="outlined"
                                    title={`Build Housing: \n+1 House(s) \n+0.5/s Building Materials \n+0.1/s Crafting Materials`}
                                ><CottageIcon /> Build Housings</Button>
                        }
                        <p>Cost: {globalData.buildHousingPrice.toFixed(1)} Building Materials</p>
                    </Container>
            }
        </Container>
    )
}

export default Houses;
import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CottageIcon from '@mui/icons-material/Cottage';
import ConstructionIcon from '@mui/icons-material/Construction';

const Upgrades = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container
            sx={{
                display: "flex",
            }}
        >
            {/* { CLICK UPGRADES ENDS UP BEING TOO OP
             {
                globalData.clickUpdatesPrice > globalData.resourseNumber
                    ?
                    <Button color="error">Upgrade tools</Button>
                    :
                    <Button onClick={globalData.upgradeGatherer}>Upgrade tools</Button>
            }
            <p>Resource cost: {globalData.clickUpdatesPrice}</p>
            <br /> } */}
            <Container>
                <p>Survivors: {globalData.survivorsQty}</p>
                {
                    globalData.findSurvivorPrice > globalData.resourseNumber
                        ?
                        <Button color="error"
                            variant="outlined"
                            title="Not enough resources"
                        >Find survivors <AccessibilityNewIcon /></Button>
                        :
                        <Button onClick={globalData.findSurvivor}
                            variant="outlined"
                            title={`Search for survivors: \n+1 Survivor(s)\n+0.1/s Building Materials\n+0.1/s Resources`}
                        >Find survivors <AccessibilityNewIcon /></Button>
                }
                <p>Cost: {globalData.findSurvivorPrice.toFixed(1)} Resourses</p>
            </Container>

            { // BUILD HOUSING
                globalData.survivorsQty < 5
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
                                >Build Housing <CottageIcon /></Button>
                                :
                                <Button onClick={globalData.buildHousing}
                                    variant="outlined"
                                    title= {`Build Housing: \n+1 House(s) \n+0.1/s Crafting Materials`}
                                >Build Housing <CottageIcon /></Button>
                        }
                        <p>Cost: {globalData.buildHousingPrice.toFixed(1)} Building Materials</p>
                    </Container>
            }

            {   // CRAFT TOOLS
                globalData.housingQty < 5
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
                                >Craft Tools <ConstructionIcon/></Button>
                                :
                                <Button onClick={globalData.buildTools}
                                    variant="outlined"
                                    title="Build Tools"
                                >Craft Tools <ConstructionIcon/></Button>
                        }
                        <p>Cost: {globalData.toolsPrice.toFixed(1)} Crafting Materials</p>
                    </Container>
            }

        </Container>
    )
}

export default Upgrades;
import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

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
                            title="Not enough resourses"
                        >Find survivors <AccessibilityNewIcon /></Button>
                        :
                        <Button onClick={globalData.findSurvivor}
                            variant="outlined"
                            title={`Search for survivors: \n+1 Survivor(s)\n+0.1 Building Materials\n+0.1 Resourses`}
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
                        <p>Housing: {globalData.housingQty}</p>
                        {
                            globalData.buildHousingPrice > globalData.buildingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title="Not enough resourses"
                                >Build Housing</Button>
                                :
                                <Button onClick={globalData.buildHousing}
                                    variant="outlined"
                                    title="Build Housing"
                                >Build Housing</Button>
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
                                    title="Not enough resourses"
                                >Craft Tools</Button>
                                :
                                <Button onClick={globalData.buildTools}
                                    variant="outlined"
                                    title="Build Tools"
                                >Craft Tools</Button>
                        }
                        <p>Cost: {globalData.toolsPrice.toFixed(1)} Crafting Materials</p>
                    </Container>
            }

        </Container>
    )
}

export default Upgrades;
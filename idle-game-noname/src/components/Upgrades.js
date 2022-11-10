import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { Button } from "@mui/material"
import { Container } from "@mui/system"

const Upgrades = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container
            sx={{
                display: "flex"
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
                            title="Not enough resourses"
                        >Find survivors</Button>
                        :
                        <Button onClick={globalData.findSurvivor}
                            title="Search for survivors"
                        >Find survivors</Button>
                }
                <p>Cost: {globalData.findSurvivorPrice.toFixed(1)} Resourses</p>
            </Container>

            {globalData.survivorsQty < 5
                ?
                <></>
                :
                <Container>
                    <p>Housing: {globalData.survivorsQty}</p>
                    {
                        globalData.findSurvivorPrice > globalData.resourseNumber
                            ?
                            <Button color="error"
                                title="Not enough resourses"
                            >Build Housing</Button>
                            :
                            <Button onClick={globalData.buildHousing}
                                title="Search for survivors"
                            >Find survivors</Button>
                    }
                    <p>Cost: {globalData.findSurvivorPrice.toFixed(1)} Building Materials</p>
                </Container>
            }

        </Container>
    )
}

export default Upgrades;
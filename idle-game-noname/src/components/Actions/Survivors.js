import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const Survivors = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container sx={{ display: "flex" }}>
            {   // FIND SURVIVORS
                <Container>
                    <Typography title="Survivors">
                        <PersonIcon /> {globalData.survivorsQty}
                    </Typography>
                    {
                        globalData.findSurvivorPrice > globalData.resourseNumber
                            ?
                            <Button color="error"
                                variant="outlined"
                                title={`Not enough resources \n+1 Survivor(s)\n+0.1/s Resources\n+0.1/s Building Materials`}
                            ><AccessibilityNewIcon /> Find survivors</Button>
                            :
                            <Button onClick={globalData.findSurvivor}
                                variant="outlined"
                                title={`Search for survivors: \n+1 Survivor(s)\n+0.1/s Resources\n+0.1/s Building Materials`}
                            ><AccessibilityNewIcon /> Find survivors</Button>
                    }
                    <p>Cost: {globalData.findSurvivorPrice.toFixed(0)} Resources</p>
                </Container>
            }
            {   // EQUIP SURVIVORS
                globalData.toolsQty < 5
                    ?
                    <></>
                    :
                    <Container>
                        <Typography>
                            <PersonAddAlt1Icon /> {globalData.survivorsEquipQty}
                        </Typography>
                        {
                            globalData.equipSurvivorPrice > globalData.craftingMaterialNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title={`Not enough resources \n+1 Equipped Survivor(s)\n+0.1/s Resources\n+0.1/s Building Materials`}
                                ><EmojiPeopleIcon /> Equip survivors</Button>
                                :
                                <Button onClick={globalData.equipSurvivor}
                                    variant="outlined"
                                    title={`Equip survivors with tools: \n+1 Survivor(s)\n+0.1/s Resources\n+0.1/s Building Materials`}
                                ><EmojiPeopleIcon /> Equip survivors</Button>
                        }
                        <Typography>Cost: {globalData.equipSurvivorPrice.toFixed(0)} Crafting Materials</Typography>
                    </Container>
            }
        </Container>
    )
}

export default Survivors;
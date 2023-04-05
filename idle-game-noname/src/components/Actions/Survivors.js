import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const Survivors = () => {
    const stock = useContext(GlobalStateContext).Stock
    const action = useContext(GlobalStateContext).Action
    const modifiers = useContext(GlobalStateContext).ActionModifier.Survivor
    const prices = useContext(GlobalStateContext).ActionPrice
    const qty = useContext(GlobalStateContext).ActionQty

    return (
        <Container sx={{ display: "flex" }}>
            {   // FIND SURVIVORS
                <Container>
                    <Typography title="Survivors">
                        <PersonIcon /> {qty.survivorsQty}
                    </Typography>
                    {
                        prices.findSurvivorPrice > stock.resourseNumber
                            ?
                            <Button color="error"
                                variant="outlined"
                                title={`Not enough resources \n+1 Survivor(s)\n+${modifiers.survivorResourceModifier}/s Resources\n+${modifiers.survivorBuildingModifier}/s Building Materials`}
                            ><AccessibilityNewIcon /> Find survivors</Button>
                            :
                            <Button onClick={action.findSurvivor}
                                variant="outlined"
                                title={`Search for survivors: \n+1 Survivor(s)\n+${modifiers.survivorResourceModifier}/s Resources\n+${modifiers.survivorBuildingModifier}/s Building Materials`}
                            ><AccessibilityNewIcon /> Find survivors</Button>
                    }
                    <p>Cost: {prices.findSurvivorPrice.toFixed(0)} Resources</p>
                </Container>
            }
            {   // EQUIP SURVIVORS
                qty.toolsQty < 5
                    ?
                    <></>
                    :
                    <Container>
                        <Typography title="Equipped Survivors">
                            <PersonAddAlt1Icon /> {qty.survivorsEquipQty}
                        </Typography>
                        {
                            prices.equipSurvivorPrice > stock.resourseNumber
                                ?
                                <Button color="error"
                                    variant="outlined"
                                    title={`Not enough resources \n+1 Equipped Survivor(s)\n+${modifiers.equipSurvivorResourceModifier}/s Resources\n+${modifiers.equipSurvivorBuildingModifier}/s Building Materials\n+${modifiers.equipSurvivorCraftingModifier}/s Crafing Materials`}
                                ><EmojiPeopleIcon /> Equip survivors</Button>
                                :
                                <Button onClick={action.equipSurvivor}
                                    variant="outlined"
                                    title={`Equip survivors with tools: \n+1 Equiped Survivor(s)\n+${modifiers.equipSurvivorResourceModifier}/s Resources\n+${modifiers.equipSurvivorBuildingModifier}/s Building Materials\n+${modifiers.equipSurvivorCraftingModifier}/s Crafing Materials`}
                                ><EmojiPeopleIcon /> Equip survivors</Button>
                        }
                        <Typography>Cost: {prices.equipSurvivorPrice.toFixed(0)} Resources</Typography>
                    </Container>
            }
        </Container>
    )
}

export default Survivors;
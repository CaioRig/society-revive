import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Button, Typography, Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ActionCard from "./Cards";

const Survivors = () => {
    const { Stock, Action, ActionModifier, ActionQty, ActionPrice } = useContext(
        GlobalStateContext
    );
    const {
        survivorsQty,
        survivorsEquipQty,
        toolsQty,
    } = ActionQty;
    const {
        survivorResourceModifier,
        survivorBuildingModifier,
        equipSurvivorResourceModifier,
        equipSurvivorBuildingModifier,
        equipSurvivorCraftingModifier,
    } = ActionModifier.Survivor;
    const {
        findSurvivorPrice,
        equipSurvivorPrice,
    } = ActionPrice;
    const { resourceNumber } = Stock;

    const findSurvivorActionName = `Find survivors`
    const findSurvivorTitleDisabled = `Not enough resources\n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`
    const findSurvivorTitle = `Search for survivors\n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`
    const survivorStockName = `Resources`

    return (
        <Container
            sx={{
                display: "flex",
                minWidth: "20vw",
                width: "fit-content",
                margin: "20px",
            }}
        >
            {/* FIND SURVIVORS */}
            <ActionCard
                actionName={findSurvivorActionName}
                actionOnClick={Action.findSurvivor}
                actionQty={survivorsQty}
                actionPrice={findSurvivorPrice}
                stockNumber={resourceNumber}
                actionStockName={survivorStockName}
                disabledTitle={findSurvivorTitleDisabled}
                enabledTitle={findSurvivorTitle}
                actionNumberIcon={<PersonIcon />}
                actionIcon={<AccessibilityNewIcon />}
            />

            {/* EQUIP SURVIVORS */}
            {toolsQty >= 5 && (
                <Container>
                    <Typography title="Equipped Survivors">
                        <PersonAddAlt1Icon /> {survivorsEquipQty}
                    </Typography>
                    {equipSurvivorPrice > resourceNumber ? (
                        <Button
                            color="error"
                            variant="outlined"
                            title={`Not enough resources \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`}
                        >
                            <EmojiPeopleIcon /> Equip survivors
                        </Button>
                    ) : (
                        <Button
                            onClick={Action.equipSurvivor}
                            variant="outlined"
                            title={`Equip survivors with tools: \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`}
                        >
                            <EmojiPeopleIcon /> Equip survivors
                        </Button>
                    )}
                    <Typography>Cost: {equipSurvivorPrice} Resources</Typography>
                </Container>
            )}
        </Container>
    );
};

export default Survivors;
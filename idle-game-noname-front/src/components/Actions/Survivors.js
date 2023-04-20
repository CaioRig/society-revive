import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
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
    const priceStockName = `Resources`
    const survivorQtyTitle = `Survivors`

    const equipeSurvivorActionName = `Equip survivors`
    const equipSurvivorTitleDisabled = `Not enough resources \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`
    const equipSurvivorTitle = `Equip survivors with tools: \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`
    const equipSurvivorQtyTitle = `Equipped Survivors`

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
                actionStockName={priceStockName}
                disabledTitle={findSurvivorTitleDisabled}
                enabledTitle={findSurvivorTitle}
                qtyTitle={survivorQtyTitle}
                actionNumberIcon={<PersonIcon />}
                actionIcon={<AccessibilityNewIcon />}
            />

            {/* EQUIP SURVIVORS */}
            {toolsQty >= 5 && (
                <Container>
                    <ActionCard
                        actionName={equipeSurvivorActionName}
                        actionOnClick={Action.equipSurvivor}
                        actionQty={survivorsEquipQty}
                        actionPrice={equipSurvivorPrice}
                        stockNumber={resourceNumber}
                        actionStockName={priceStockName}
                        disabledTitle={equipSurvivorTitleDisabled}
                        enabledTitle={equipSurvivorTitle}
                        qtyTitle={equipSurvivorQtyTitle}
                        actionNumberIcon={<PersonAddAlt1Icon />}
                        actionIcon={<EmojiPeopleIcon />}
                    />
                </Container>
            )}
        </Container>
    );
};

export default Survivors;
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container } from "@mui/system";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ActionCard from "./ActionCard";

const EquipSurvivors = () => {
    const { Stock, Action, ActionModifier, ActionQty, ActionPrice } = useContext(
        GlobalStateContext
    );
    const {
        toolsQty,
    } = ActionQty;
    const {
        equipSurvivorResourceModifier,
        equipSurvivorBuildingModifier,
        equipSurvivorCraftingModifier,
    } = ActionModifier.Survivor;
    const {

        equipSurvivorPrice,
    } = ActionPrice;
    const { resourceNumber } = Stock;

    const priceStockName = `Resources`


    const equipeSurvivorActionName = `Equip survivors`
    const equipSurvivorTitleDisabled = `Not enough resources \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`
    const equipSurvivorTitle = `Equip survivors with tools: \n+1 Equipped Survivor(s)\n+${equipSurvivorResourceModifier}/s Resources\n+${equipSurvivorBuildingModifier}/s Building Materials\n+${equipSurvivorCraftingModifier}/s Crafting Materials`

    return (
        <Container
            sx={{
                display: "flex",
                minWidth: "20vw",
                width: "fit-content",
                margin: "20px",
            }}
        >
            {/* EQUIP SURVIVORS */}
            {toolsQty >= 5 && (
                <Container>
                    <ActionCard
                        actionName={equipeSurvivorActionName}
                        actionOnClick={Action.equipSurvivor}
                        actionPrice={equipSurvivorPrice}
                        stockNumber={resourceNumber}
                        actionStockName={priceStockName}
                        disabledTitle={equipSurvivorTitleDisabled}
                        enabledTitle={equipSurvivorTitle}
                        actionIcon={<EmojiPeopleIcon />}
                    />
                </Container>
            )}
        </Container>
    );
};

export default EquipSurvivors;
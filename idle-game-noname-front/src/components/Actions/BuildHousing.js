import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import ActionCard from "./ActionCard";
import { Container } from "@mui/system";
import CottageIcon from "@mui/icons-material/Cottage";

const BuildHousing = () => {
    const {
        Stock,
        Action,
        ActionModifier: { House: { housingBuildingModifier, housingCraftingModifier }, },
        ActionQty: { survivorsQty },
        ActionPrice: { buildHousingPrice },
    } = useContext(GlobalStateContext);

    const { buildingMaterialNumber } = Stock;
    const actionName = "Build Housing";
    const titleDisabled = `+1 House(s) \n+${housingBuildingModifier}/s Building Materials \n+${housingCraftingModifier}/s Crafting Materials`;
    const title = `+1 House(s) \n+${housingBuildingModifier}/s Building Materials \n+${housingCraftingModifier}/s Crafting Materials`;
    const stockName = "Building Materials";

    // Check if survivorsQty is less than 5, if yes, render null, else render ActionCard
    return (
        survivorsQty < 5 ? null : (
            <Container
                sx={{
                    display: "flex",
                    minWidth: "20vw",
                    width: "fit-content",
                    margin: "20px",
                }}
            >
                <ActionCard
                    actionName={actionName}
                    actionOnClick={Action.buildHousing}
                    actionPrice={buildHousingPrice}
                    stockNumber={buildingMaterialNumber}
                    actionStockName={stockName}
                    disabledTitle={titleDisabled}
                    enabledTitle={title}
                    actionIcon={<CottageIcon />}
                />
            </Container>
        )
    );
};

export default BuildHousing;
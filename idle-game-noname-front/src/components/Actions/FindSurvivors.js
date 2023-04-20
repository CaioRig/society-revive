import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container } from "@mui/system";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonIcon from "@mui/icons-material/Person";
import ActionCard from "./ActionCard";

const FindSurvivors = () => {
    const {
        Stock,
        Action,
        ActionModifier: { Survivor: { survivorResourceModifier, survivorBuildingModifier } },
        ActionQty: { survivorsQty },
        ActionPrice: { findSurvivorPrice },
    } = useContext(GlobalStateContext);

    const { resourceNumber } = Stock;
    const actionName = "Find survivors";
    const titleDisabled = `Not enough resources\n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`;
    const title = `Search for survivors\n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`;
    const stockName = "Resources";
    const qtyTitle = "Survivors";

    return (
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
                actionOnClick={Action.findSurvivor}
                actionQty={survivorsQty}
                actionPrice={findSurvivorPrice}
                stockNumber={resourceNumber}
                actionStockName={stockName}
                disabledTitle={titleDisabled}
                enabledTitle={title}
                qtyTitle={qtyTitle}
                actionNumberIcon={<PersonIcon />}
                actionIcon={<AccessibilityNewIcon />}
            />
        </Container>
    );
};

export default FindSurvivors;
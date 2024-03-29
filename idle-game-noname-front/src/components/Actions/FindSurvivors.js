import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Container } from "@mui/system";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ActionCard from "./ActionCard";

const FindSurvivors = () => {
    const {
        Stock,
        Action,
        ActionModifier: { Survivor: { survivorResourceModifier, survivorBuildingModifier } },
        ActionPrice: { findSurvivorPrice },
    } = useContext(GlobalStateContext);

    const { resourceNumber } = Stock;
    const actionName = "Find survivors";
    const titleDisabled = `+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`;
    const title = `+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`;
    const stockName = "Resources";

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
                actionPrice={findSurvivorPrice}
                stockNumber={resourceNumber}
                actionStockName={stockName}
                disabledTitle={titleDisabled}
                enabledTitle={title}
                actionIcon={<AccessibilityNewIcon />}
            />
        </Container>
    );
};

export default FindSurvivors;
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import ActionCard from "./Cards"
import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"

import CottageIcon from '@mui/icons-material/Cottage';
import HomeIcon from '@mui/icons-material/Home';

const BuildHousing = () => {
    const {
        Stock,
        Action,
        ActionModifier: { House: { housingBuildingModifier, housingCraftingModifier } },
        ActionQty: { housingQty, survivorsQty },
        ActionPrice: { buildHousingPrice },
    } = useContext(GlobalStateContext);

    const { resourceNumber } = Stock;
    const actionName = "Build Housing";
    const titleDisabled = `Not enough building materials \n+1 House(s) \n+${housingBuildingModifier}/s Building Materials \n+${housingCraftingModifier}/s Crafting Materials`;
    const title = `Build Housing: \n+1 House(s) \n+${housingBuildingModifier}/s Building Materials \n+${housingCraftingModifier}/s Crafting Materials`;
    const stockName = "Building Materials";
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
            {
                survivorsQty < 5
                    ?
                    <></>
                    :

                    <ActionCard
                        actionName={actionName}
                        actionOnClick={Action.buildHousing}
                        actionQty={housingQty}
                        actionPrice={buildHousingPrice}
                        stockNumber={resourceNumber}
                        actionStockName={stockName}
                        disabledTitle={titleDisabled}
                        enabledTitle={title}
                        qtyTitle={qtyTitle}
                        actionNumberIcon={<HomeIcon />}
                        actionIcon={<CottageIcon />}
                    />
            }
        </Container >
    );
};

export default BuildHousing;
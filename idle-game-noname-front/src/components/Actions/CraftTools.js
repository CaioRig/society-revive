import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Container } from "@mui/system"
import ActionCard from "./ActionCard"

import ConstructionIcon from '@mui/icons-material/Construction';

const CraftTools = () => {
    const {
        Stock,
        Action,
        ActionModifier: { Tools: { toolsResourceModifier, toolsCraftingModifier }, },
        ActionQty: { housingQty },
        ActionPrice: { toolsPrice },
    } = useContext(GlobalStateContext);

    const { craftingMaterialNumber } = Stock;
    const actionName = "Craft Tools";
    const titleDisabled = `+1 Tool(s) \n+${toolsResourceModifier}/s Resources \n+${toolsCraftingModifier}/s Crafting Materials`;
    const title = `+1 Tool(s) \n+${toolsResourceModifier}/s Resources \n+${toolsCraftingModifier}/s Crafting Materials`;
    const stockName = "Crafting Materials";

    return (
        housingQty < 5 ? null : (
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
                    actionOnClick={Action.buildTools}
                    actionPrice={toolsPrice}
                    stockNumber={craftingMaterialNumber}
                    actionStockName={stockName}
                    disabledTitle={titleDisabled}
                    enabledTitle={title}
                    actionIcon={<ConstructionIcon />}
                />
            </Container>
        )
    )
}

export default CraftTools;
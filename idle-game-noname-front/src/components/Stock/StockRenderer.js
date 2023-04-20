import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import StockCard from "./StockCard";
import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

const StockRenderer = () => {
    const { Stock, PerSec } = useContext(GlobalStateContext);

    return (
        <>
            <StockCard
                Stock={Stock.resourceNumber}
                PerSec={PerSec.resourcePerSec}
                Name={"Resources"}
                Img={<ForestIcon />}
            />
            <StockCard
                Stock={Stock.buildingMaterialNumber}
                PerSec={PerSec.buildingMaterialPerSec}
                Name={"Building Materials"}
                Img={<ConstructionIcon />}
            />
            <StockCard
                Stock={Stock.craftingMaterialNumber}
                PerSec={PerSec.craftingMaterialPerSec}
                Name={"Crafting Materials"}
                Img={<HandymanIcon />}
            />
        </>
    )
}

export default StockRenderer;
import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import StockCard from "./StockCard";

const StockRenderer = () => {
    const { Stock, PerSec } = useContext(GlobalStateContext);

    return (
        <div style={{ display: "flex" }}>
            <StockCard
                Stock={Stock.resourceNumber}
                PerSec={PerSec.resourcePerSec}
                Name={"Resources"}
                Img={<ForestIcon />}
            />

            {Stock.buildingMaterialNumber < 0 ?
                <></>
                :
                <StockCard
                    Stock={Stock.buildingMaterialNumber}
                    PerSec={PerSec.buildingMaterialPerSec}
                    Name={"Building Materials"}
                    Img={<ConstructionIcon />}
                />
            }
            <StockCard
                Stock={Stock.craftingMaterialNumber}
                PerSec={PerSec.craftingMaterialPerSec}
                Name={"Crafting Materials"}
                Img={<HandymanIcon />}
            />
        </div>
    )
}

export default StockRenderer;
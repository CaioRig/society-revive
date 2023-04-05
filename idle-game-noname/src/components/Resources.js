import { Typography } from "@mui/material";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

import { Container } from "@mui/system";

const Resources = () => {
    const stock = useContext(GlobalStateContext).Stock
    const perSec = useContext(GlobalStateContext).PerSec

    return (
        <Container>
            <Typography
                color={"#ffffff"}
                title={`Resources \n${perSec.resoursePerSec}/s`}
            >
                <ForestIcon /> {stock.resourseNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title={`Building Materials \n${perSec.buildingMaterialPerSec}/s`}
            >
                <ConstructionIcon /> {stock.buildingMaterialNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title={`Crafting Materials \n${perSec.craftingMaterialPerSec}/s`}
            >
                <HandymanIcon /> {stock.craftingMaterialNumber.toFixed(0)}
            </Typography>
        </Container>
    );
}

export default Resources;
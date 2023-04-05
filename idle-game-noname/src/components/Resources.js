import { Typography } from "@mui/material";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

import { Container } from "@mui/system";

const Resources = () => {
    const stock = useContext(GlobalStateContext).Stock

    return (
        <Container>
            <Typography
                color={"#ffffff"}
                title="Resources"
            >
                <ForestIcon /> {stock.resourseNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title="Building Materials"
            >
                <ConstructionIcon /> {stock.buildingMaterialNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title="Crafting Materials"
            >
                <HandymanIcon /> {stock.craftingMaterialNumber.toFixed(0)}
            </Typography>
        </Container>
    );
}

export default Resources;
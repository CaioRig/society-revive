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
        <Container sx={{
            backgroundColor: "gray",
            textAlign: "left",
            justifyContent: "space-between",
            width: "20vw",
            margin: "20px",
            borderRadius: "10px"
        }}>
            <Typography
                color={"#ffffff"}
                fontSize={"small"}
                title={`Yeah, like that`}
            >
                Mouse over for information:
            </Typography>
            <br />
            <Typography
                color={"#ffffff"}
                title={`Resources \nProduction: ${perSec.resoursePerSec}/s`}
            >
                <ForestIcon /> {stock.resourseNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title={`Building Materials \nProduction: ${perSec.buildingMaterialPerSec}/s`}
            >
                <ConstructionIcon /> {stock.buildingMaterialNumber.toFixed(0)}
            </Typography>
            <Typography
                color={"#ffffff"}
                title={`Crafting Materials \nProduction: ${perSec.craftingMaterialPerSec}/s`}
            >
                <HandymanIcon /> {stock.craftingMaterialNumber.toFixed(0)}
            </Typography>
        </Container>
    );
}

export default Resources;
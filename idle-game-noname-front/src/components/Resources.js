import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import GlobalStateContext from "../global/GlobalStateContext";
import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

const Resources = () => {
    const { Stock, PerSec } = useContext(GlobalStateContext);

    return (
        <Container
            sx={{
                backgroundColor: "gray",
                textAlign: "left",
                justifyContent: "space-between",
                minWidth: "20vw",
                width: "fit-content",
                margin: "20px",
                borderRadius: "10px"
            }}
        >
            <Typography
                color="#ffffff"
                variant="caption"
                title="Mouse over for information"
            >
                Mouse over for information:
            </Typography>
            <br />
            <Typography
                color="#ffffff"
                title={`Resources\nProduction: ${PerSec.resoursePerSec}/s`}
                titleTypographyProps={{ color: "#ffffff" }}
            >
                <ForestIcon /> {Stock.resourseNumber.toFixed(0)}
            </Typography>
            <Typography
                color="#ffffff"
                title={`Building Materials\nProduction: ${PerSec.buildingMaterialPerSec}/s`}
                titleTypographyProps={{ color: "#ffffff" }}
            >
                <ConstructionIcon /> {Stock.buildingMaterialNumber.toFixed(0)}
            </Typography>
            <Typography
                color="#ffffff"
                title={`Crafting Materials\nProduction: ${PerSec.craftingMaterialPerSec}/s`}
                titleTypographyProps={{ color: "#ffffff" }}
            >
                <HandymanIcon /> {Stock.craftingMaterialNumber.toFixed(0)}
            </Typography>
        </Container>
    );
}

export default Resources;
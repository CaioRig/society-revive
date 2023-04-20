import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext";
import ForestIcon from '@mui/icons-material/Forest';



const Resources = () => {
    const { Stock, PerSec } = useContext(GlobalStateContext);

    return (
        <>
            <Card
                sx={{
                    backgroundColor: "gray",
                    textAlign: "left",
                    justifyContent: "space-between",
                    minWidth: "20vw",
                    width: "fit-content",
                    margin: "20px",
                    borderRadius: "10px",
                }}
            >
                <CardContent>
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
                        <ForestIcon /> {Stock.resourceNumber}
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    backgroundColor: "gray",
                    textAlign: "left",
                    justifyContent: "space-between",
                    minWidth: "20vw",
                    width: "fit-content",
                    margin: "20px",
                    borderRadius: "10px",
                }}
            >
                <CardContent>
                    <Typography
                        color="#ffffff"
                        title={`Building Materials\nProduction: ${PerSec.buildingMaterialPerSec}/s`}
                        titleTypographyProps={{ color: "#ffffff" }}
                    >
                        <ConstructionIcon /> {Stock.buildingMaterialNumber}
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    backgroundColor: "gray",
                    textAlign: "left",
                    justifyContent: "space-between",
                    minWidth: "20vw",
                    width: "fit-content",
                    margin: "20px",
                    borderRadius: "10px",
                }}
            >
                <CardContent>
                    <Typography
                        color="#ffffff"
                        title={`Crafting Materials\nProduction: ${PerSec.craftingMaterialPerSec}/s`}
                        titleTypographyProps={{ color: "#ffffff" }}
                    >
                        <HandymanIcon /> {Stock.craftingMaterialNumber}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Resources;
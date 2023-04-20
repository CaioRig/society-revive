import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import GlobalStateContext from "../../global/GlobalStateContext";
import ForestIcon from '@mui/icons-material/Forest';

const StockCard = () => {
    const { Stock, PerSec } = useContext(GlobalStateContext);

    return (
        <Card
            sx={{
                backgroundColor: "gray",
                textAlign: "left",
                justifyContent: "space-between",
                width: "fit-content",
                margin: "20px",
                borderRadius: "10px",
            }}
        >
            <CardContent>
                <Typography
                    color="#ffffff"
                    title={`Resources\nProduction: ${PerSec.resourcePerSec}/s`}
                    titleTypographyProps={{ color: "#ffffff" }}
                >
                    <ForestIcon /> {Stock.resourceNumber}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StockCard;
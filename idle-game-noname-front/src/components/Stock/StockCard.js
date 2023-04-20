import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StockCard = ({ Stock, PerSec, Img, Name }) => {
    return (
        <Card
            title={`${Name}\nProduction: ${PerSec}/s`}
            sx={{
                backgroundColor: "gray",
                textAlign: "center",
                width: "fit-content",
                margin: "20px",
                borderRadius: "10px",
            }}
        >
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box mt={1}>{Img}</Box>
                    <Typography
                        color="#ffffff"
                    >
                        {Stock}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StockCard;
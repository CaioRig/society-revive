import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StockCard = ({ Stock, PerSec, Img, Name }) => {
  return (
    <Card
      title={`${Name}\nProduction: ${PerSec}/s`}
      sx={{
        backgroundColor: "gray",
        textAlign: "center",
        width: "200px", // Set a fixed width for the card
        height: "60px", // Set a fixed height for the card
        margin: "20px",
        borderRadius: "10px",
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Set flex direction to column
        justifyContent: "center", // Vertically center the content
        alignItems: "center", // Horizontally center the content
        userSelect: "none", // Prevent text selection
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box mt={1}>{Img}</Box>
          <Typography color="#ffffff">{Stock}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockCard;
import React from "react";
import Gatherers from "../components/Gatherers";
import HomeBackground from "../img/ForestBackground.png";
import { Container, Grid } from "@mui/material";
import StockRenderer from "../components/Stock/StockRenderer";
import ActionCardRenderer from "../components/Actions/ActionCardRenderer";
import ActionImgRenderer from "../components/ActionImgRenderer/ActionImgRenderer";

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${HomeBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Container maxWidth="lg" style={{ flex: "1" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StockRenderer />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ActionImgRenderer />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Gatherers />
                    </Grid>
                </Grid>
            </Container>
            <ActionCardRenderer />
        </div>
    );
};

export default Home;
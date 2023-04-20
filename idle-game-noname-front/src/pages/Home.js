import React from "react";
import Gatherers from "../components/Gatherers";
import SurvivorsRenderer from "../components/ImgRenderers";
import { Container, Grid } from "@mui/material";
import StockRenderer from "../components/Stock/StockRenderer";
import ActionCardRenderer from "../components/Actions/ActionCardRenderer";

const Home = () => {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StockRenderer />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SurvivorsRenderer />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Gatherers />
                </Grid>
            </Grid>
            <ActionCardRenderer />
        </Container>
    );
}

export default Home;
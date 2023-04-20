import React from "react";
import Gatherers from "../components/Gatherers";
import FindSurvivors from "../components/Actions/FindSurvivors";
import BuildHousing from "../components/Actions/BuildHousing";
import Tools from "../components/Actions/Tools";
import SurvivorsRenderer from "../components/ImgRenderers";
import { Container, Grid } from "@mui/material";
import StockCard from "../components/Stock/StockCard";

const Home = () => {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StockCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SurvivorsRenderer />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Gatherers />
                </Grid>
            </Grid>
            <br />
            <br />
            <FindSurvivors />
            <BuildHousing />
            <Tools />
        </Container>
    );
}

export default Home;
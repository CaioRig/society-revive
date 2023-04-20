import React from "react";
import { Box, Container, Grid } from "@mui/material";
import BuildHousing from "./BuildHousing";
import CraftTools from "./CraftTools";
import FindSurvivors from "./FindSurvivors";

const ActionCardRenderer = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FindSurvivors />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BuildHousing />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CraftTools />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ActionCardRenderer;
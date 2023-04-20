import React, { useContext } from "react";
import { Box, Button, Grid } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext";
import ParkIcon from "@mui/icons-material/Park";

const Gatherers = () => {
  const { Gather } = useContext(GlobalStateContext);

  const handleGatherClick = () => {
    Gather.addNumberPerClick();
  };

  return (
    <Box textAlign="center" mt={4}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            onClick={handleGatherClick}
            variant="outlined"
            size="large"
            startIcon={<ParkIcon />}
            title="Click to gather resources"
            aria-label="Gather resources"
            fullWidth
          >
            Gather Resources
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gatherers;
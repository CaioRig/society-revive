import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import GlobalStateContext from "../global/GlobalStateContext";
import ParkIcon from "@mui/icons-material/Park";

const Gatherers = () => {
  const { Gather } = useContext(GlobalStateContext);

  return (
    <Box textAlign="center">
      <Button
        onClick={Gather.addNumberPerClick}
        variant="outlined"
        size="large"
        startIcon={<ParkIcon />}
        title="Click to gather resources"
        aria-label="Gather resources"
      >
        Gather resources
      </Button>
    </Box>
  );
};

export default Gatherers;
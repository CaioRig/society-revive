import React, { useContext, useEffect, useState } from "react";
import SurvivorsIcon from "../img/survivorGif.gif";
import GlobalStateContext from "../global/GlobalStateContext";
import { Container, Typography } from "@mui/material";

const SurvivorsRenderer = () => {
  const survivorsQty = useContext(GlobalStateContext).ActionQty.survivorsQty;
  const [survivorArray, setSurvivorArray] = useState([]);

  useEffect(() => {
    if (survivorArray.length < survivorsQty) {
      setSurvivorArray((prevSurvivorArray) => [
        ...prevSurvivorArray,
        <img
          src={SurvivorsIcon}
          key={`Survivor${survivorsQty}`}
          alt={`Survivors`}
          title={`Survivors`}
          width="15px"
        />,
      ]);
    }
  }, [survivorsQty]);

  return (
    <Container
      sx={{
        backgroundColor: "gray",
        textAlign: "left",
        minWidth: "30vw",
        maxWidth: "30vw",
        minHeight: "5vh",
        height: "fit-content",
        width: "fit-content",
        margin: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "10px",
      }}
    >
      <Typography
        color="#ffffff"
        variant="subtitle2"
        title="Show survivors number"
        sx={{ marginBottom: "5px" }}
      >
        Survivors:
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          maxWidth: "100%",
        }}
      >
        {survivorArray}
      </div>
    </Container>
  );
};

export default SurvivorsRenderer;
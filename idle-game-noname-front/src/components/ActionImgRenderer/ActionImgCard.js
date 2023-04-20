import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

const ActionImgCard = ({ ActionQty, ActionIcon, ActionName }) => {
  const [ActionArray, setActionArray] = useState([]);

  useEffect(() => {
    if (ActionArray.length < ActionQty) {
      setActionArray([
        ...ActionArray,
        <img
          src={ActionIcon}
          key={`${ActionName}${ActionArray.length}`}
          alt={`${ActionName}`}
          title={`${ActionName}`}
          width="30px"
        />,
      ]);
    }
  }, [ActionArray.length, ActionQty, ActionIcon, ActionName]);

  return ActionQty === 0 ? (
    <></>
  ) : (
    <Container
      sx={{
        backgroundColor: "gray",
        textAlign: "left",
        width: "100%",
        maxWidth: "20vw",
        minHeight: "5vh",
        height: "fit-content",
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
        title={`Show ${ActionName} number`}
        sx={{ marginBottom: "5px" }}
      >
        {ActionName}:
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          maxWidth: "100%",
        }}
      >
        {ActionArray}
      </div>
    </Container>
  );
};

export default ActionImgCard;
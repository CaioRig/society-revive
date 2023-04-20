import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ActionCard = ({
    actionName,
    actionOnClick,
    actionPrice,
    actionQty,
    stockNumber,
    actionStockName,
    disabledTitle,
    enabledTitle,
    qtyTitle,
    actionNumberIcon,
    actionIcon
}) => {
    const isActionDisabled = actionPrice > stockNumber;

    return (
        <Card
            sx={{
                background: "grey",
                minWidth: "200px",
                maxWidth: "250px",
                margin: "10px",
                borderRadius: "10px",
                animation: `${fadeIn} 0.5s ease-in`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <CardContent>
                <Box>
                    <Typography variant="h6" title={qtyTitle}>
                        {actionNumberIcon}
                        {actionQty}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={isActionDisabled ? "error" : "primary"}
                    >
                        Cost: {actionPrice} {actionStockName}
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        mt: 1,
                        mb: 2,
                        whiteSpace: "pre-line",
                    }}
                    title={isActionDisabled ? disabledTitle : enabledTitle}
                >
                    {isActionDisabled ? disabledTitle : enabledTitle}
                </Typography>
            </CardContent>
            <Box>
                <Button
                    onClick={actionOnClick}
                    color={isActionDisabled ? "error" : "primary"}
                    variant="contained"
                    fullWidth
                    disabled={isActionDisabled}
                >
                    {actionIcon}
                    {actionName}
                </Button>
            </Box>
        </Card>
    );
};

export default ActionCard;
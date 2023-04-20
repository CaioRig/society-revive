import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

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
        <Card sx={{ background: "grey" }}>
            <CardContent>
                <Typography title={qtyTitle}>
                    {actionNumberIcon} {actionQty}
                </Typography>
                <Button
                    onClick={actionOnClick}
                    color={isActionDisabled ? "error" : "primary"}
                    variant="outlined"
                    title={isActionDisabled ? disabledTitle : enabledTitle}
                    disabled={isActionDisabled}
                >
                    {actionIcon} {actionName}
                </Button>
                <Typography>
                    Cost: {actionPrice} {actionStockName}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActionCard;
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ActionCard = ({ actionName, actionOnClick, actionPrice, actionQty, stockNumber, actionStockName, disabledTitle, enabledTitle, actionNumberIcon, actionIcon }) => {
    return (
        <Card sx={{ background: "grey" }}>
            <CardContent>
                <Typography title="Survivors">
                    {actionNumberIcon} {actionQty}
                </Typography>
                {actionPrice > stockNumber ? (
                    <Button
                        color="error"
                        variant="outlined"
                        title={disabledTitle}
                    >
                        {actionIcon} {actionName}
                    </Button>
                ) : (
                    <Button
                        onClick={actionOnClick}
                        color="primary"
                        variant="outlined"
                        title={enabledTitle}
                    >
                        {actionIcon} {actionName}
                    </Button>
                )}
                <Typography>Cost: {actionPrice} {actionStockName}</Typography>
            </CardContent>
        </Card>
    );
};

export default ActionCard;
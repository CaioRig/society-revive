import { Card, CardContent, Typography, Button } from "@mui/material"
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonIcon from "@mui/icons-material/Person";

const ActionCard = (props) => {
    const { actionOnClick, actionQty, resourceNumber, actionPrice, actionResourceModifier, actionBuildingModifier } = props

    return (
        <Card sx={{ background: "grey" }}>
            <CardContent>
                <Typography title="Survivors">
                    <PersonIcon /> {actionQty}
                </Typography>
                {actionPrice > resourceNumber ? (
                    <Button
                        color="error"
                        variant="outlined"
                        title={`Not enough resources \n+1 Survivor(s)\n+${actionResourceModifier}/s Resources\n+${actionBuildingModifier}/s Building Materials`}
                    >
                        <AccessibilityNewIcon /> Find survivors
                    </Button>
                ) : (
                    <Button
                        onClick={actionOnClick}
                        variant="outlined"
                        title={`Search for survivors: \n+1 Survivor(s)\n+${actionResourceModifier}/s Resources\n+${actionBuildingModifier}/s Building Materials`}
                    >
                        <AccessibilityNewIcon /> Find survivors
                    </Button>
                )}
                <Typography>Cost: {actionPrice} Resources</Typography>
            </CardContent>
        </Card>
    )
}

export default ActionCard;


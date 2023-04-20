<Card sx={{ background: "grey" }}>
    <CardContent>
        <Typography title="Survivors">
            <PersonIcon /> {survivorsQty}
        </Typography>
        {findSurvivorPrice > resourceNumber ? (
            <Button
                color="error"
                variant="outlined"
                title={`Not enough resources \n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`}
            >
                <AccessibilityNewIcon /> Find survivors
            </Button>
        ) : (
            <Button
                onClick={Action.findSurvivor}
                variant="outlined"
                title={`Search for survivors: \n+1 Survivor(s)\n+${survivorResourceModifier}/s Resources\n+${survivorBuildingModifier}/s Building Materials`}
            >
                <AccessibilityNewIcon /> Find survivors
            </Button>
        )}
        <Typography>Cost: {findSurvivorPrice} Resources</Typography>
    </CardContent>
</Card>
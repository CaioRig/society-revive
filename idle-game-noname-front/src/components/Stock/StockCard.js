import { Card, CardContent, Typography } from "@mui/material";

const StockCard = (props) => {
    const { Stock, PerSec, Img, Name } = props;

    return (
        <Card
            sx={{
                backgroundColor: "gray",
                textAlign: "left",
                justifyContent: "space-between",
                width: "fit-content",
                margin: "20px",
                borderRadius: "10px",
            }}
        >
            <CardContent>
                <Typography
                    color="#ffffff"
                    title={`${Name}\nProduction: ${PerSec}/s`}
                    titleTypographyProps={{ color: "#ffffff" }}
                >
                    {Img} {Stock}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StockCard;
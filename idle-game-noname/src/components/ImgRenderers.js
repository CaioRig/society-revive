import { useContext, useEffect, useState } from "react"
import SurvivorsIcon from "../img/survivorGif.gif"
import GlobalStateContext from "../global/GlobalStateContext"
import { Container, Typography } from "@mui/material"

export const SurvivorsRenderer = () => {
    const survivorsQty = useContext(GlobalStateContext).ActionQty.survivorsQty
    let [survivorArray, setSurvivorArray] = useState([])

    useEffect(() => {
        if (survivorArray.length < survivorsQty) {
            setSurvivorArray(survivorArray => [...survivorArray, <img src={SurvivorsIcon}
                key={`Survivor${survivorsQty}`}
                alt={`Survivors`}
                title={`Survivors`}
                width="15px"
            />
            ])
        }
    }, [survivorsQty])


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
                borderRadius: "10px"
            }}
        >
            <Typography
                color={"#ffffff"}
                fontSize={"small"}
                title={`Show survivors number`}>
                Survivors:
            </Typography>
            {survivorArray}
        </Container>
    )
}
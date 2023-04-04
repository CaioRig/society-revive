import { Typography } from "@mui/material";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

import ForestIcon from '@mui/icons-material/Forest';
import ConstructionIcon from '@mui/icons-material/Construction';
import HandymanIcon from '@mui/icons-material/Handyman';

import { Container } from "@mui/system";

const Resources = () => {
    const globalData = useContext(GlobalStateContext).Game

    return (
        <Container>
            <Typography title="Resources" color={"#ffffff"}>
                <ForestIcon /> {globalData.resourseNumber.toFixed(1)}
            </Typography>
            {
                globalData.buildingMaterialNumber === 0
                    ?
                    <></>
                    :
                    <Typography color={"#ffffff"}
                        title="Building Materials">
                        <ConstructionIcon /> {globalData.buildingMaterialNumber.toFixed(1)}
                    </Typography>
            }
            {
                globalData.craftingMaterialNumber === 0
                    ?
                    <></>
                    :
                    <Typography color={"#ffffff"}
                        title="Crafting Materials">
                        <HandymanIcon /> {globalData.craftingMaterialNumber.toFixed(1)}
                    </Typography>
            }
        </Container>
    );
}

export default Resources;
import { Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Gatherers from "../components/Gatherers";
import Upgrades from "../components/Upgrades";
import GlobalStateContext from "../global/GlobalStateContext";

const Home = () => {
    const navigate = useNavigate()

    const globalData = useContext(GlobalStateContext).Game

    return (
        <div>
            <Typography color={"#ffffff"}>
                Resourses: {globalData.resourseNumber.toFixed(1)}
            </Typography>
            {
                globalData.buildingMaterialNumber === 0
                ?
                <></>
                :
                <Typography color={"#ffffff"}>
                Building Materials: {globalData.buildingMaterialNumber.toFixed(1)}
            </Typography>
            }
            {
                globalData.craftingMaterialNumber === 0
                ?
                <></>
                :
                <Typography color={"#ffffff"}>
                Crafting Materials: {globalData.craftingMaterialNumber.toFixed(1)}
            </Typography>
            }
            <Gatherers />
            <br />
            <br />
            <Upgrades />
        </div>
    );
}

export default Home;
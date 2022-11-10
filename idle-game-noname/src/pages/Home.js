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
                Resourses: {globalData.resourseNumber}
            </Typography>
            <Gatherers />
            <br />
            <br />
            <Upgrades />
        </div>
    );
}

export default Home;
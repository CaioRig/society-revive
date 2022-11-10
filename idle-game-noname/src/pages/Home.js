import { Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";

const Home = () => {
    const navigate = useNavigate()

    const globalData = useContext(GlobalStateContext)

    return (
        <div>
            <Typography color={"#ffffff"}>
                Resourses: {globalData.resourseNumber}
            </Typography>
            <Button onClick={globalData.addNumberPerClick}>Gather resourses</Button>
            <br />
            <br />
            <Button onClick={globalData.upgradeGatherer}>Upgrade gatherer</Button>
            <br />
            <Button onClick={globalData.upgradeGatherPerSecond}>Upgrade gather per second</Button>
        </div>
    );
}

export default Home;
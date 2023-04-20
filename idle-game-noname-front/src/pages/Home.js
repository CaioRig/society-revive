// import { useNavigate } from "react-router-dom";
import Gatherers from "../components/Gatherers";
import FindSurvivors from "../components/Actions/FindSurvivors";
import BuildHousing from "../components/Actions/BuildHousing";
import Tools from "../components/Actions/Tools";
import Resources from "../components/Resources";
import SurvivorsRenderer from "../components/ImgRenderers";
import { Container } from "@mui/material";

const Home = () => {
    // const navigate = useNavigate()

    return (
        <div>
            <Container sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Resources />
                <SurvivorsRenderer />
            </Container>
            <Gatherers />
            <br />
            <br />
            <FindSurvivors />
            <BuildHousing />
            <Tools />
        </div>
    );
}

export default Home;
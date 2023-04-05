import { useNavigate } from "react-router-dom";
import Gatherers from "../components/Gatherers";
import Survivors from "../components/Actions/Survivors";
import Houses from "../components/Actions/Houses";
import Tools from "../components/Actions/Tools";
import Resources from "../components/Resources";


const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Resources />
            <Gatherers />
            <br />
            <br />
            <Survivors />
            <Houses />
            <Tools />
        </div>
    );
}

export default Home;
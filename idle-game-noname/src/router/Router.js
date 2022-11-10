import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Debugger from "../debugger/Debugger";
import Home from "../pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Debugger />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
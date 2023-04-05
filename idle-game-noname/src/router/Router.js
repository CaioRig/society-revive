import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
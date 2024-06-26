import { Route, Routes } from "react-router-dom";
import Home from "../pages/users/01-home";
import Scholarships from "../compoents/users/homePageComponents/Scholarships";

function ConditionalRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/scholarships' element={<Scholarships />} />
            </Routes>
        </>
    );
}

export default ConditionalRoute;

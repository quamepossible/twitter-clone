import { Outlet } from "react-router-dom";
import LeftNav from "./Components/NAV/LeftNav";
import RightNav from "./Components/NAV/RightNav";

const HomeRouter = () => {
    return (
        <>
        <LeftNav />
        <Outlet />
        <RightNav />
        </>
    )
}

export default HomeRouter;
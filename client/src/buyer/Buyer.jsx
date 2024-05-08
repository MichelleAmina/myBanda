import { Route, Routes } from "react-router-dom"
import { Outlet, useLocation } from "react-router-dom"
import BuyerHome from "./BuyerHome";

function Buyer(){
    const location = useLocation()

    const renderHomePage = location.pathname === '/buyer';

    return(
        <div>
            {renderHomePage && <BuyerHome/>}
        </div>
    )
}

export default Buyer 
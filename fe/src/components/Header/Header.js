import React from "react"
import { useLocation } from "react-router-dom"
import {Link} from "react-router-dom"
import { Toolbar } from "primereact/toolbar"
import { ROUTES } from "../../constants/constants"

import "./style.scss"

const Header = () => {

    let location = useLocation();

    const start = (
        <div>
            {/* <Link to="/"> */}
                <img src={"./images/logo.svg"} alt="logo" />
            {/* </Link> */}
        </div>
    );

    const end = (
        <div>
            <Link  className="header-link" style={{color : location.pathname === ROUTES.main ? "#ffd60a" : "black"}} to={ROUTES.main}>Главная</Link>
            <Link  className="header-link" style={{color : location.pathname === ROUTES.to ? "#ffd60a" : "black"}} to={ROUTES.to}>Техосмотр</Link>
            <Link  className="header-link" style={{color : location.pathname === ROUTES.msto ? "#ffd60a" : "black"}} to={ROUTES.msto}>МСТО</Link>
            <Link  className="header-link" style={{color : location.pathname === ROUTES.tachograph ? "#ffd60a" : "black"}} to={ROUTES.tachograph}>Тахограф</Link>
        </div>
    )

    return (
            <div className="header">
                <Toolbar start={start} end={end}/>
            </div>  
            
    )
}

export default Header;
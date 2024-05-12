import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"

import "./style.scss"

const NavigationButton = ({ to, label, className }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(to);
    }


    return (
            <Button className={className} label={label} onClick={onClick}/>
    );
    
}

export default NavigationButton;
import React, {useEffect, useRef} from "react"
import {useLocation} from "react-router-dom"

import "./style.scss"

const Background = () => {
    const backgroundRef = useRef(null);

    let location = useLocation();
    const imgPath = "images/main.png";

    useEffect(() =>{
        if (backgroundRef !== undefined) {
            const currentRoute = location.pathname;
            if (currentRoute === "/") {
                backgroundRef.current.style.backgroundImage = `url(${imgPath})`;
            } else {
                backgroundRef.current.style.backgroundImage = "none";
            }
        }
        
    }, [location])

    return (
       <div ref={backgroundRef} className="background"></div>
    )
}

export default Background;
import React from "react"
import { Outlet } from "react-router-dom"
import {Header} from  "../Header"
import { Background } from "../Background"

import "./style.scss"

const Container = () => {
    return (
        <div>
            <Background/>
            <div>
                <Header />
                <div>
                    <Outlet  />
                </div>
            </div>
        </div>
    )
}

export default Container;
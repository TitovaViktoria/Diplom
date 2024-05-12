import React from "react"
import {ButtonGroup} from "primereact/buttongroup"
import { NavigationButton } from "../../components/NavigationButton"


import "./style.scss"

const Main = () => {


    return (
        <div > 
            <ButtonGroup className="main-button-group">
                <NavigationButton className="main-button" to="/all" label="Просмотр всего транспорта " />
                <NavigationButton className="main-button" to="/to" label="Техосмотр" />
                <NavigationButton className="main-button" to="/msto" label="МСТО" />
                <NavigationButton className="main-button" to="/tachograph" label="Тахограф" />
             </ButtonGroup>
        </div>
        
      );
  };
  
  export default Main;

import React from "react"
import { Transport } from "../Transport";
import "./style.scss"



const EditTransport = ({m}) => {

      return (
        <div className="sec" style={{position: "relative"}}>
           <div style={{position: "relative",margin: "20px 0px",fontSize: "24px", fontWeight: '700'}}>Режим редактора</div>
           <Transport m={m}></Transport>
        </div>
      );

  };
  
export default EditTransport;

import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import {Container} from "../Container"
import {Main} from "../../routes/Main"
import {AllTransport} from "../../routes/AllTranpsort"
import { Transport } from "../../routes/Transport";
import { TRANSPORT_MODE } from "../../constants/constants";
import { EditTransport } from "../../routes/EditTransport";
import { Tachograph } from "../../routes/Tachograph";
import { To } from "../../routes/To";
import { Msto } from "../../routes/Msto";

const App = () => {
  return (
      <div>
        {console.log(useParams())}
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Main />} />
            <Route path="/all" element={<AllTransport />} />
            <Route path="/transport/:regSign"  element={<Transport m={TRANSPORT_MODE.READ}/>}/>
            <Route path="/transport/create"  element={<Transport m={TRANSPORT_MODE.CREATE}/>}/>
            <Route path="/transport/edit/:regSign"  element={<EditTransport m={TRANSPORT_MODE.UPDATE}/>}/>
            <Route path="/transport/edit" element={<EditTransport m={TRANSPORT_MODE.CREATE}/>}/>
            <Route path="/tachograph" element={<Tachograph/>}/>
            <Route path="/to" element={<To/>}/>
            <Route path="/msto" element={<Msto/>}/>
          </Route>
        </Routes>
      </div>
          
  );
}

export default App;

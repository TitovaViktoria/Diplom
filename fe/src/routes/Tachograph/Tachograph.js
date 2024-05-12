import React, {useState,  useEffect} from "react"
import { Table } from "../../components/Table";
import { getTachographExpired } from "../../requests/transportRequests";
import "./style.scss"

const COLUMNS = [
  {
    header: "№",
    field: "id"
  },
  {
    header: "Марка-модел",
    field: "modelName"
  },
  {
    header: "Регистрационный номер",
    field: "registerSign"
  },
  {
    header: "Тип",
    field: "type"
  },
  {
    header: "Номер тахографа",
    field: "tachographNumber"
  },
  {
    header: "Тахограф действителен до",
    field: "tachographDate"
  }
];




const Tachograph = () => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        getTachographExpired().then(result => setData(result.data)).then(setLoading(false));
      }, [])


      return (
        <div>
          { !loading && (<div className="tachograph-container">
           <div className="tachograph-title"> В течении месяца у следующих ТС  должна быть проведена инспекция тахографа: </div>
           {data !== null ? <Table data={data} columns={COLUMNS}/> : <span></span>}
          </div>)}
        </div>
      );

  };
  
  export default Tachograph;

import React, {useState,  useEffect} from "react"
import { Table } from "../../components/Table";
import { getMstiExpired } from "../../requests/transportRequests";
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
    header: "Номер МСТО",
    field: "mstiNumber"
  },
  {
    header: "МСТО действителен до",
    field: "mstiDate"
  }
];




const Msto = () => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        getMstiExpired().then(result => setData(result.data)).then(setLoading(false));
      }, [])


      return (
        <div>
          { !loading && (<div className="msto-container">
           <div className="msto-title"> В течении месяца у следующих ТС  должен быть подтвержден МСТО: </div>
           {data !== null ? <Table data={data} columns={COLUMNS}/> : <span></span>}
          </div>)}
        </div>
      );

  };
  
  export default Msto;

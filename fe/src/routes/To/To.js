import React, {useState,  useEffect} from "react"
import { Table } from "../../components/Table";
import { getTechnicalInspectionExpired } from "../../requests/transportRequests";
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
    header: "ТО действителен до",
    field: "technicalInspectionValidUntilDate"
  }
];




const To = () => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        getTechnicalInspectionExpired().then(result => setData(result.data)).then(setLoading(false));
      }, [])


      return (
        <div>
          { !loading && (<div className="to-container">
           <div className="to-title"> В течении месяца у следующих ТС  должен быть пройден техосмотр: </div>
           {data !== null ? <Table data={data} columns={COLUMNS}/> : <span></span>}
          </div>)}
        </div>
      );

  };
  
  export default To;

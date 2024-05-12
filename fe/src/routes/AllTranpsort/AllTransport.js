import React, {useState,  useEffect} from "react"
import { Table } from "../../components/Table";
import { getAction } from "../../requests/transportRequests";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button'
import { isNotBlank } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import "./style.scss"

const COLUMNS = [
  {
    header: "№",
    field: "id"
  },
  {
    header: "Регистрационный номер",
    field: "registerSign"
  },
  {
    header: "Марка-модел",
    field: "modelName"
  },
  {
    header: "Шасси",
    field: "chassis"
  },
  {
    header: "Год выпуска",
    field: "yearOfManufacture"
  },
  {
    header: "Тип",
    field: "type"
  },
  {
    header: "Цвет",
    field: "color"
  },
  {
    header: "Доп. масса, кг",
    field: "permissibleWeight"
  },
  {
    header: "Масса без нагрузки",
    field: "unloadedWeight"
  },
  {
    header: "Св-во о регистрации,\n №",
    field: "technicalInspectionNumber"
  },
  {
    header: "Св-во о регистрации,\n дата",
    field: "technicalInspectionDate"
  },
];

const TYPE_OPTIONS = [
  { optionLabel : "Грузовой седельный тягач", optionValue : "грузовой седельный тягач" },
  { optionLabel: "Полуприцеп бортовой тентовый", optionValue: "полуприцеп бортовой тентовый" },
  { optionLabel: "Полуприцеп фургон тентовый", optionValue: "полуприцеп фургон тентовый" },
  { optionLabel: "Любой", optionValue  : "" }
];




const Actions = ({setData}) => {
    const navigate = useNavigate();

    const [sign, setSign] = useState("");
    const [type, setType] = useState("");

    const onSignChange = (e) => {
      setSign(e.target.value);
    }

    const constOnTypeChange = (e) => {
      setType(e.target.value)
    }

    const onFindClick = () => {
      const filters = {}
      if (isNotBlank(sign)) {
        filters.registerSign = sign;
      }
      if (isNotBlank(type)) {
        filters.type = type;
      }

      getAction(filters).then(result => setData(result.data));
    }

    const onCreateClick = () => {
      navigate("/transport/create")
    }
    
  
    return (
      <div>
        <div className="all-transport-title">Просмотр всего транспорта</div>
          <div className="all-transport-filters-container">
          <InputText className="srch" value={sign} onChange={onSignChange} placeholder="Введите регистрационный номер"/>
          <Dropdown value={type} onChange={constOnTypeChange} options={TYPE_OPTIONS} optionLabel="optionLabel" optionValue="optionValue"  placeholder="Select an option" />
            <Button className="btn" onClick={onFindClick}>Искать</Button>
            <Button className="btn" onClick={onCreateClick}>Создать</Button>
          </div>
      </div>
    );
}



const AllTransport = () => {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        getAction().then(result => setData(result.data)).then(setLoading(false));
      }, [])


      return (
        <div>
          { !loading && (<div className="all-transport-container">
           {data !== null ? 
           (<div>
            <Actions setData={setData}></Actions>
            <Table data={data} setData={setData} columns={COLUMNS}/>
           </div>
            
          ) : <span></span>
           }
          </div>)}
        </div>
      );

  };
  
  export default AllTransport;

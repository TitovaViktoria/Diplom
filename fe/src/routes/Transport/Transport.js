import React, {useEffect, useState} from "react";
import { Formik, Form, Field} from 'formik';
import { useParams } from "react-router-dom";
import { TRANSPORT_MODE, TRANSPORT_INITIAL } from "../../constants/constants";
import { getAction, postAction, putAction, deleteAction } from "../../requests/transportRequests";
import {isNotBlank,getConvertedDatesFront, getConvertedDatesBack} from "../../utils/utils"
import { useNavigate } from "react-router-dom";

import  "./styles.scss";

const isVisible = (mode, val) => {
    if (typeof val === "number") {
        return val !== null || val !== undefined
    }
    if (!isNotBlank(val) && mode === TRANSPORT_MODE.READ) {
        return false
    }
    return true;
}

const RegSignRow = ({mode, regSign, setMode}) => {
    


    return (
        <div className="transport-row">
            <label className="transport-header" htmlFor="registerSign">Рег. знак</label>
            <Field className="transport-input"
                    id="registerSign" 
                    name="registerSign"
                    type="text" 
                    placeholder="........................" 
                    disabled={mode === TRANSPORT_MODE.READ ? true : false}
             />
        </div>
    );
}


const FormRow = ({mode, fieldName, value, labelText, labelClassName,  fieldClassName }) => {

    if (!isVisible(mode, value)) {
        return null;
    }


    return (
        <div className="transport-row">
            <label className={labelClassName} htmlFor={fieldName}>{labelText}</label>
            <Field className={fieldClassName}
                    id={fieldName}
                    name={fieldName}
                    type="text" 
                    placeholder="........................" 
                    disabled={mode === TRANSPORT_MODE.READ ? true : false}
             />
        </div>
    );
}




const Transport = ({m, t }) => {

    const navigate = useNavigate();

    const [mode, setMode] = useState(m);
    const [transport, setTransport] = useState(t ? t : TRANSPORT_INITIAL);
    const {regSign} = useParams();
    console.log(regSign);


    useEffect(
        () => {
            if ((mode === TRANSPORT_MODE.READ || mode === TRANSPORT_MODE.UPDATE) && transport != null) {
                getAction({registerSign: regSign}).then(result =>setTransport({
                    ...transport,
                    ...JSON.parse(JSON.stringify(result.data[0])),
                    ...getConvertedDatesFront(result.data[0])
                }));            }
        }, []
    );


    const onEditClick = () => {
        navigate(`/transport/edit/${regSign}`);
        setMode(TRANSPORT_MODE.UPDATE);
    }

    const onDelete = () => {
        deleteAction({sign:regSign});
        navigate("/all");
        window.location.reload();
    }


    const onSubmit = (transport) => {
        transport = {
            ...transport, 
            ...getConvertedDatesBack(transport)
        }
        
        switch (mode) {
            case TRANSPORT_MODE.CREATE:
                postAction({data: transport});
                break;
            case TRANSPORT_MODE.UPDATE:
                putAction({sign: regSign, data: transport}).then(() => {
                    navigate(`/transport/${transport.registerSign}`)
                    }
                )
                break;
            default:
                break
        }
    };

    return (
        <div className="sec">
            <Formik
            enableReinitialize={true}
        initialValues={transport}
        onSubmit={onSubmit}
        >
        <Form>
            {mode === TRANSPORT_MODE.READ && (<div className="transport-title">Режим редактирования</div>)}
            <div className="transport-container">
                <div className="transport-container-half">
                    <RegSignRow mode={mode} regSign={regSign} setMode={setMode}></RegSignRow>
                    <FormRow fieldName="modelName" mode={mode} value={transport.modelName} labelText="Марка-модель" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <FormRow fieldName="chassis" mode={mode} value={transport.chassis} labelText="Шасси" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <FormRow fieldName="yearOfManufacture" mode={mode} value={transport.yearOfManufacture} labelText="Год выпуска" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <FormRow fieldName="type" mode={mode} value={transport.type} labelText="Тип" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <FormRow fieldName="color" mode={mode} value={transport.color} labelText="Цвет" labelClassName="transport-header" fieldClassName="transport-input"/>
                    {(isVisible(mode, transport.permissibleWeight) 
                        ||  isVisible(mode, transport.unloadedWeight)) 
                        && (<div className="transport-header" style={{backgroundColor: "#FEC02C"}}>По св-ву о регистрации</div>)}
                    <FormRow fieldName="permissibleWeight" mode={mode} value={transport.permissibleWeight} labelText="Допустимая масса, кг" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <FormRow fieldName="unloadedWeight" mode={mode} value={transport.unloadedWeight} labelText="Масса без нагрузки" labelClassName="transport-header" fieldClassName="transport-input"/>
                    
                </div>
                <div className="transport-container-half">    
                    {isVisible(mode, transport.technicalInspectionNumber) && (<div className="transport-header" style={{backgroundColor: "#FEC02C"}}>Свидетельство о регистрации </div>)}
                    <div className="transport-row">
                        <FormRow fieldName="technicalInspectionNumber" mode={mode} value={transport.technicalInspectionNumber} labelText="№" labelClassName="transport-header" fieldClassName="transport-input"/>
                        <FormRow fieldName="technicalInspectionDate" mode={mode} value={transport.technicalInspectionDate} labelText="Дата" labelClassName="transport-header" fieldClassName="transport-input"/>
                    </div>
                    <FormRow fieldName="technicalInspectionValidUntilDate" mode={mode} value={transport.technicalInspectionValidUntilDate} labelText="ТО действителен до:" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <div className="transport-row">
                        {isVisible(mode, transport.mstiNumber) && (<div className="transport-header" style={{backgroundColor: "#FEC02C"}}>МСТО </div>)}    
                        <FormRow fieldName="mstiNumber" mode={mode} value={transport.mstiNumber} labelText="№" labelClassName="transport-header" fieldClassName="transport-input"/>
                    </div>
                    <FormRow fieldName="mstiDate" mode={mode} value={transport.mstiDate} labelText="Действителен до" labelClassName="transport-header" fieldClassName="transport-input"/>
                    <div className="transport-row">
                        {isVisible(mode, transport.tachographNumber) && (<div className="transport-header" style={{backgroundColor: "#FEC02C"}}>Тахограф </div>)}    
                        <FormRow fieldName="tachographNumber" mode={mode} value={transport.tachographNumber} labelText="№" labelClassName="transport-header" fieldClassName="transport-input"/>
                    </div>
                    <FormRow fieldName="tachographDate" mode={mode} value={transport.tachographDate} labelText="Действителен до" labelClassName="transport-header" fieldClassName="transport-input"/>
                    {isVisible(mode, transport.adrNumber) && (<div className="transport-header" style={{backgroundColor: "#FEC02C"}}>АДР</div>)}
                    <div className="transport-row">
                        <FormRow fieldName="adrNumber" mode={mode} value={transport.technicalInspectionNadrNumberumber} labelText="№" labelClassName="transport-header" fieldClassName="transport-input"/>
                        <FormRow fieldName="adrDate" mode={mode} value={transport.adrDate} labelText="Дата" labelClassName="transport-header" fieldClassName="transport-input"/>
                    </div>
                </div>
            </div>
            {mode !== TRANSPORT_MODE.READ ? 
                (<button className="btn" style={{position: "relative"}} type="submit" >Сохранить</button>) :
                (<div>
                    <button className="btn" style={{position: "relative"}} type="button" onClick={onEditClick}>Редактировать</button>
                    <button className="btn" style={{position: "relative"}} type="button" onClick={onDelete}>Удалить</button>
                </div>) 
            }
        
        </Form>
      </Formik>
    </div>
        


        
    );
}

export default Transport;
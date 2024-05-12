const { origin } = window.location;
const DEV_UI_URL = "http://localhost:8000";
const DEV_BE_URL = "http://localhost:8080";
export const BASE_URL = "http://34.118.71.55:8080/api";

export const ROUTES = {
    main: "/",
    to: "/to",
    msto: "/msto",
    edit: "/edit",
    all: "/all",
    tachograph: "/tachograph"

}

export const TRANSPORT_MODE = {
    READ: 0,
    UPDATE: 1,
    CREATE: 2
}

export const TRANSPORT_INITIAL = {
    registerSign: "",
    modelName: "",
    chassis: "",
    yearOfManufacture: "",
    type: "",
    color: "",
    permissibleWeight: "",
    unloadedWeight: "",
    technicalInspectionNumber: "",
    technicalInspectionDate: "",
    technicalInspectionValidUntilDate: "",
    mstiNumber: "",
    mstiDate: "",
    tachographNumber: "",
    tachographDate: "",
    adrNumber: "",
    adrDate: ""
}
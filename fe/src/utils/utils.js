export const isNotBlank = (string) => {
    return string !== null && string !== undefined && string.trim().length > 0;
}

export const convertDateFormatBack = (dateString) => {
    if (!isNotBlank(dateString)) {
        return null;
    }
    var dateParts = dateString.split('.');

    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];

    var convertedDate = year + '-' + month + '-' + day;

    return convertedDate;
}

export const convertDateFormatFront = (dateString) => {
    if (!isNotBlank(dateString)) {
        return null;
    }
    var dateParts = dateString.split('-');

    var day = dateParts[2];
    var month = dateParts[1];
    var year = dateParts[0];

    var convertedDate = day + '.' + month + '.' + year;

    return convertedDate;
}




export const getConvertedDatesBack = (transport) => {
    return {
        technicalInspectionDate: convertDateFormatBack(transport.technicalInspectionDate), 
        technicalInspectionValidUntilDate: convertDateFormatBack(transport.technicalInspectionValidUntilDate), 
        mstiDate: convertDateFormatBack(transport.mstiDate), 
        tachographDate: convertDateFormatBack(transport.tachographDate), 
        adrDate: convertDateFormatBack(transport.adrDate) 
    }          
}

export const getConvertedDatesFront = (transport) => {
    return {
        technicalInspectionDate: convertDateFormatFront(transport.technicalInspectionDate), 
        technicalInspectionValidUntilDate: convertDateFormatFront(transport.technicalInspectionValidUntilDate), 
        mstiDate: convertDateFormatFront(transport.mstiDate), 
        tachographDate: convertDateFormatFront(transport.tachographDate), 
        adrDate: convertDateFormatFront(transport.adrDate) 
    }          
}
function timeStampToDate(timeStamp){
    return new Date(timeStamp*1000);
}

function dateToBasicString(date){
    return date.toLocaleDateString('fr-FR');
}

function dateToHourString(date){
    return date.toLocaleTimeString('fr-FR');
}

export function timeStampToFamiliar(timeStamp){
    return dateToBasicString(timeStampToDate(timeStamp)) + " - " + dateToHourString(timeStampToDate(timeStamp));
}
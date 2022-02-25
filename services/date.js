export const deleteRepeatedDates = (dates) => {
    const singleDates = [];

    dates.forEach(date => {
        if (singleDates.indexOf(date.formatedDate) === -1) singleDates.push(date.formatedDate);
    });

    return singleDates;
}

export const sortDate = (date) => {
    date.sort((a, b) => {
        const dateA = moment(a, "DD/MM/YYYY").format("YYYYMMDD");
        const dateB = moment(b, "DD/MM/YYYY").format("YYYYMMDD");

        return dateA - dateB;
    });
} 
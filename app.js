const oneEuroIs = {
    "JPY": 162.9, 
    "USD": 1.07,  
    "GBP": 0.85  
};

function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return roundToTwoDecimals(yenes);
}


function fromEuroToDollar(euros) {
    const dollars = euros * oneEuroIs.USD;
    return roundToTwoDecimals(dollars);
}

function fromYanToPound(yen) {
    const euros = yen / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return roundToTwoDecimals(pounds);
}

module.exports = { 
    fromDollarToYen, 
    fromEuroToDollar, 
    fromYanToPound 
};

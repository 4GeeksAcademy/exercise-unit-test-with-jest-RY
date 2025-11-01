const { 
    fromDollarToYen, 
    fromEuroToDollar, 
    fromYanToPound 
} = require('./app');

test('fromEuroToDollar convierte  10 Euros a Dólares', () => {
    const dollars = fromEuroToDollar(10);
    expect(dollars).toBe(10.70); 
});

test('fromDollarToYen convierte 20 Dólares a Yenes', () => {
    const yenes = fromDollarToYen(20);
    expect(yenes).toBe(3044.86); 
});

test('fromYanToPound 5000 convierte Yenes a Libras', () => {
    const pounds = fromYanToPound(5000);
    expect(pounds).toBe(26.09);
});
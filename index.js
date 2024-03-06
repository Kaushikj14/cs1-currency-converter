import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Q6NkC3AKovDkE9xthE2phGuag4NhhqFrX4bq9lvp');

export async function convertCurrency(fromCurrency,toCurrency,units){
    
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    });

    const multiplier = res.data[toCurrency];
    return multiplier*units;
}
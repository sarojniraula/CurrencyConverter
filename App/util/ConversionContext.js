import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from './api';

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY ='GBP';

export const ConversionContextProvider =({children}) => {
    const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
    const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
    const [date, setDate] = useState();
    const [rates, setRates] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const setBaseCurrency = (currency) => {
        setIsLoading(true);
        return api(`/latest?base=${currency}`)
        .then(response => {
            console.log(response)
            _setBaseCurrency(currency);
            setDate(response.date);
            setRates(response.rates);
        })
        .catch(error => {
            Alert.alert("Oops!! Something went wrong.", error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    };

    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
    };

    const contextValue = {
        baseCurrency,
        quoteCurrency,
        setBaseCurrency,
        setQuoteCurrency,
        swapCurrencies,
        date,
        rates,
        isLoading,
    };

    useEffect(() => {
        setBaseCurrency(DEFAULT_BASE_CURRENCY);
    }, []);
    
    return (
        <ConversionContext.Provider value={contextValue}>
            {children}
        </ConversionContext.Provider>
    );
};
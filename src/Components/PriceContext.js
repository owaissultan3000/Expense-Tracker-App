import React, { useState, createContext } from 'react';

export const PriceContext = createContext();

export const PriceProvider = (props) => {

    const [balance, setBalance] = useState("0");
    const [income, setIncome] = useState("0");
    const [expense, setExpense] = useState("0");

    return <PriceContext.Provider value={{balance:[balance, setBalance], income:[income, setIncome], expense:[expense, setExpense]}}>{props.children}</PriceContext.Provider>
}
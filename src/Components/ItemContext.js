import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = (props) => {

    const [store, setStore] = useState([
        
    ]);

    return <ItemContext.Provider value={[store, setStore]}>{props.children}</ItemContext.Provider>
}
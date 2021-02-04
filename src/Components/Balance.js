import React, { useState, useContext }from 'react'
import {PriceContext} from './PriceContext'
import "./Balance.css"

function Balance() {
    const {balance,income,expense} = useContext(PriceContext)
    const [value1, setValue1] = balance;
    return (
        <div className="Balance">
            <br />
            <br />
            <h2>YOUR BALANCE</h2>
            <h1 style={{color:"#ff9900"}}>${value1}</h1>
        </div>
    )
}

export default Balance

import React,{ useState, useContext} from 'react'
import {PriceContext} from './PriceContext'

import "./Display.css"

function Display() {
    const {balance,income,expense} = useContext(PriceContext)
    const [value1, setValue1] = balance;
    const [value2, setValue2] = income;
    const [value3, setValue3] = expense;
    return (
        <div className="Display">
            
                <div className="Income">
                
                    <h2>INCOME</h2>
                <h2 style={{ color: "green" }}>${value2}</h2>

                </div>

                <div className="Expense">
            
                    <h2>EXPENSE</h2>
                    <h2 style={{color:"red"}}>${value3}</h2>
                </div>
            
        </div>
            
    )
}

export default Display

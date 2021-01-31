import React, { useState,useContext } from 'react'
import { ItemContext } from './ItemContext'
import {PriceContext} from './PriceContext'
import './AddTransaction.css'

const AddTransaction = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState()

    const [store, setStore] = useContext(ItemContext)

    const {balance,income,expense} = useContext(PriceContext)
    const [value1, setValue1] = balance;
    const [value2, setValue2] = income;
    const [value3, setValue3] = expense;

    const additem = (e) => {
        setName(e.target.value)
    }

    const addprice = (e) => {
        setPrice(e.target.value)
    }

    const addtransaction = (e) => {
        e.preventDefault();
        if (name !== "" && price !== "") {
            setStore(previtem => [...previtem, { name: name, price: price }])
            if (price > 0) {
                const amount = parseFloat(value2) + parseFloat(price);
                setValue2(amount)
                setValue1("")
                const munafa = parseFloat(value1)+parseFloat(price)
                setValue1(munafa)

            }
            else {
        
                const amount = parseFloat(value3) + parseFloat(price);
                setValue3(amount)
                setValue1()
                const kharcha = parseFloat(value1)+parseFloat(price)
                setValue1(kharcha)

            }


            setName("")
            setPrice("")
        }
    }
    
    return (
        <div className="AddTransaction">
            <h2>ADD NEW TRANSACTION</h2>
            <br />
            <hr />

            <form onSubmit={addtransaction}>
                <br/>
                <h3>Enter Description</h3>
                <br/>
                <input type="text" value={name} onChange={additem} />
                <br />
                <br/>
                <h3>Enter Amount [ +ve value(income), -ve value(expense) ]</h3>
                <br/>
                <input type="text" value={price} onChange={addprice} />
               
                <button>Add Transaction</button>

            </form>
        </div>
    )
}

export default AddTransaction

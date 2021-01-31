import React,{useContext} from 'react'
import "./Store.css"
import History from '../Components/History'
import {ItemContext} from './ItemContext'

const Store = () => {
    const [store, setStore] = useContext(ItemContext)
    return (
        <div className="Store">
    
            <h2>HISTORY</h2>
            <br/>
            <hr />
            {store.map(item => (
                <History name={item.name} price={item.price}/> 

            ))
            }
        </div>
    )
}

export default Store


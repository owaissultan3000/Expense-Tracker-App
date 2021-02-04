import React from 'react'
import "./History.css"

const History = ({name,price}) => {
    return (
        <div className="History">
            <div className="Name_History">
                <h3>{name}</h3>
            </div>

            <div className="Price_History">
                <h3>{price}</h3>
            </div>
            
            
        </div>
    )
}

export default History


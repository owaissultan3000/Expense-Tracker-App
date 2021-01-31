import React from 'react';
import "./App.css"
import Title from './Components/Title'
import Balance from './Components/Balance'
import Display from './Components/Display'
import Store from './Components/Store'
import { ItemProvider } from './Components/ItemContext'
import {PriceProvider} from './Components/PriceContext'
import AddTransaction from './Components/AddTransaction'


function App() {
  return (
    <div className="App" >
      <Title />

      <PriceProvider>
        
        <Balance />
        <Display />
        

       <ItemProvider>

          <Store />
          <AddTransaction />
        
        </ItemProvider>
        
      </PriceProvider>
      
    </div>
  )
}

export default App

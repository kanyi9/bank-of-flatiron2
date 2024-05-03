// import React from 'react';
import React, { useState } from 'react';

import TransactionForm from './components/TransactionForm';
import TableOfTransaction from './components/TableOfTransaction';
import FilterTransaction from './components/FilterTransaction';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
 const [transactions,setTransactions]=useState([]);
  const handleTransactions= (newTransaction) =>
    {
      setTransactions([...transactions,newTransaction])
      };
      return(
        <div className="App">
          <div className="App-header">
          <h1 >The Royal Bank of Flatiron</h1>
          </div>
          <div class="filter-transaction">
            <FilterTransaction/>
            </div>
          <div className='transaction-form'>
            <TransactionForm onSubmit={handleTransactions}/>
            </div>
            <div className='table'>
              <TableOfTransaction Transactions={transactions}/>
            </div>
        </div>
      )
    };  
export default App;

// import React ,{useState}from 'react';
// import Button from 'react-bootstrap/Button'
// // here  I am creating the form 
// const TransactionForm=({onsubmit})=>{
//     const [date,setDate]=useState('');
//     const [description,setDescription]=useState('');
//     const [category,setCategory]=useState('');
//     const [amount,setAmount]=useState('');
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         onsubmit({date,description,category,amount});
//         setDescription('');
//         setAmount('');
//         setDate('');
//         setCategory('');
//     }
//     return (
// <form onsubmit={handleSubmit}>
//     <input type ='date'value={date}onChange={(e)=>{setDate(e.target.value)}}/>
//     <input type="text"placeholder='Description'value={description}onChange={(e)=>setDescription(e.target.value)}/>
//     <input type="text"placeholder='category'value={category}onChange={(e)=>setCategory(e.target.value)} />
// <input type ="number"placeholder='Amount'value={amount }onChange={(e)=>setAmount(e.target.value)}/>
// <Button type='submit' className="btn btn-primary">Add Transaction</Button>
// </form> 
//  );

// }



// export default TransactionForm;


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, description, category, amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type='number' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Button type='submit' className="btn btn-primary">Add Transaction</Button>
    </form>
  );
};

export default TransactionForm;

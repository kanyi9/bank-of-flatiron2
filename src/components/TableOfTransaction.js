// import React from "react";
// import Table from'react-bootstrap/Table';
// const TableOfTransaction = ({ Transactions }) => {
//   return (
//     <Table striped>
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Description</th>
//           <th>Category</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Transactions.map((transaction) => (
//           <tr key={transaction.id}>
//             <td className="center">{transaction.date}</td>
//             <td className="center">{transaction.description}</td>
//             <td className="center">{transaction.category}</td>
//             <td className="center">{transaction.amount}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default TableOfTransaction;


import React from 'react';
import Table from 'react-bootstrap/Table';


const TableOfTransaction = ({ Transactions }) => {
  return (
    
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      
      <tbody>
        {Transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
          
        ))}
      </tbody>
    </Table>
    
  );
};

export default TableOfTransaction;


import React from "react";
import { Card } from "react-bootstrap";

const Expense = (props) => {
  console.log(props);
  return (
    <React.Fragment>
        <Card className='m-2'>
      
        <p>Amount:{props.expense.amount}</p>
        <p>Description:{props.expense.description}</p>
        <p>category:{props.expense.category}</p>
      
      </Card>
    </React.Fragment>
  );
};

export default Expense;

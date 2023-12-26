import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

const Expense = (props) => {
console.log(props);
const expenses = useSelector(state=>state.expense.expenses);
// console.log(expenses)

 async function deleteExpense(){
    try{
        
        const res = await axios.delete(`${process.env.REACT_APP_FireBaseDataBase}expenses/${props.id}.json`);
            
          
          if (res.status==200) {
            
          
          
          
          console.log(res)
         
      
          
          } else {
          const data = await res.json();
          
          throw new Error(data.error.message);
          }
      
          } catch (err) {
              console.log(err)
          alert(err.message);
          }
    
props.getExpenses()
}


async function editExpenses(){
    const values = {
        amount:props.expense.amount,
        description:props.expense.description,
        category:props.expense.category
       }

       props.editExpense(values)
       deleteExpense()
}
  return (
    <React.Fragment>
        <Card className='m-3 p-2'>
        <p>Amount:{props.expense.amount}</p>
        <p>Description:{props.expense.description}</p>
        <p>category:{props.expense.category}</p>
        <Button className='m-2' onClick={deleteExpense}>Delete Expense</Button>
        <Button className='m-2' onClick={editExpenses}>Edit The Expense</Button>
      
      </Card>
    </React.Fragment>
  );
};

export default Expense;

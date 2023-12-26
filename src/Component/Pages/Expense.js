import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

const Expense = (props) => {
console.log(props);


 async function deleteExpense(){
    try{
        
        const res = await axios.delete(`${process.env.REACT_APP_FireBaseDataBase}expenses/${props.id}.json`);
            
          
          if (res.status==200) {
            
          alert('Expense Got Deleted')
          
          
          console.log(res)
         
      
          
          } else {
          const data = await res.json();
          
          throw new Error(data.error.message);
          }
      
          } catch (err) {
              console.log(err)
          alert(err.message);
          }
    

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
        <Card className='m-2'>
        <p>Amount:{props.expense.amount}</p>
        <p>Description:{props.expense.description}</p>
        <p>category:{props.expense.category}</p>
        <Button onClick={deleteExpense}>Delete Expense</Button>
        <Button onClick={editExpenses}>Edit The Expense</Button>
      
      </Card>
    </React.Fragment>
  );
};

export default Expense;

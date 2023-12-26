import React, { useEffect, useRef, useState } from "react";
import { Container,Form } from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import Expense from "./Expense";

const ExpenseTracker = ()=>{
const [ExpensesState,setExpenses] = useState('')

const addExpense = (data)=>{

    setExpenses(data)
}
const amountRef = useRef();
const descriptionRef = useRef();
const categoryRef = useRef();


async function saveExpense(event){
event.preventDefault()
try{
    const obj = {
        "amount": amountRef.current.value,
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
    
      };
      const head = {
        headers: {
          "Content-Type": "application/json",
        },
      };


      const res = await axios.post(`${process.env.REACT_APP_FireBaseDataBase}expenses.json`,obj,head);
      console.log(res)
    
    if (res.status==200) {
    alert('Expense Added')
    
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


useEffect(()=>{

    async function getExpenses(){
    try{
        
      const res = await axios.get(`${process.env.REACT_APP_FireBaseDataBase}expenses.json`);
          
        
        if (res.status==200) {
            setExpenses(res.data)
        console.log(ExpensesState)
        alert('Got the Expenses')
        
        
        console.log(ExpensesState)
       
    
        
        } else {
        const data = await res.json();
        
        throw new Error(data.error.message);
        }
    
        } catch (err) {
            console.log(err)
        alert(err.message);
        }
    }

    getExpenses()
    
},[])


return (
    <React.Fragment>
<Container className='m-2'>
    <Form>
     <MDBInput wrapperClass='mb-4' label='amount' id='email' type='email' ref={amountRef}/>
          <MDBInput wrapperClass='mb-4' label='description' id='description' type='description' ref={descriptionRef}/>
          <Form.Select aria-label="Default select example" ref={categoryRef}>
      <option>Open this select menu</option>
      <option value="Food">Food</option>
      <option value="Petrol">Petrol</option>
      <option value="Salary">Movie</option>
    </Form.Select>
          <MDBBtn onClick={saveExpense}>Add Expense</MDBBtn>

          </Form>
</Container>
<Container>
{Object.keys(ExpensesState).length > 0 ? (
    Object.entries(ExpensesState).map(([id, expense]) => (
      <Expense key={id} id={id} expense={expense} />
    ))
  ) : (
    <p>No expenses found.</p>
  )}

</Container>
    </React.Fragment>
)

}



export default ExpenseTracker;
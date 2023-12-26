import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container,Form } from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import Expense from "./Expense";
import { expenseActions } from "../store";

const ExpenseTracker = ()=>{
const [ExpensesState,setExpenses] = useState('')


const dispatch = useDispatch();
const expenses = useSelector(state=>state.expense.expenses);


const addExpense = (data)=>{

    setExpenses(data)
}
const amountRef = useRef();
const descriptionRef = useRef();
const categoryRef = useRef();


function editExpense(data){
    amountRef.current.value = data.amount
    descriptionRef.current.value = data.description
    categoryRef.current.value = data.category
    }
    

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
      const id =res.data.name

      const savedata= {[id]:obj}
      console.log(savedata)

    
    if (res.status==200) {
      // dispatch(expenseActions.addExpense(savedata))
      amountRef.current.value='';
      descriptionRef.current.value='';
      categoryRef.current.value='';
      getExpenses()
    
    
    console.log(savedata)
    

    
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
getExpenses()
},[])

    async function getExpenses(){
    try{
        
      const res = await axios.get(`${process.env.REACT_APP_FireBaseDataBase}expenses.json`);
          
        
        if (res.status==200) {
            setExpenses(res.data)
            dispatch(expenseActions.addExpense(res.data))
        
        
        
        console.log(res.data)
        console.log('useEffect called')
       
    
        
        } else {
        const data = await res.json();
        
        throw new Error(data.error.message);
        }
    
        } catch (err) {
            console.log(err)
        alert(err.message);
        }
    }
    



return (
    <React.Fragment>
<Container className='m-2'>
    <Form>
     <MDBInput wrapperClass='mb-4' label='amount' id='amount' type='number' ref={amountRef}/>
          <MDBInput wrapperClass='mb-4' label='description' id='description' type='description' ref={descriptionRef}/>
          <Form.Select aria-label="Default select example" ref={categoryRef}>
      <option>Select the Type of Expense</option>
      <option value="Food">Food</option>
      <option value="Petrol">Petrol</option>
      <option value="Salary">Movie</option>
    </Form.Select>
          <MDBBtn onClick={saveExpense}>Add Expense</MDBBtn>

          </Form>
</Container>
<Container>
{expenses.length > 0 ? (
  Object.keys(expenses[0] ?? {}).map(id => (
    <Expense key={id} id={id} expense={expenses[0][id]} editExpense={editExpense} getExpenses={getExpenses} />
  ))
) : (
  <p>No expenses found.</p>
)}

</Container>
    </React.Fragment>
)

}



export default ExpenseTracker;
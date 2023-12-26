import React, { useRef } from "react";
import { Container,Form } from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

const ExpenseTracker = ()=>{

const emailRef = useRef();
const descriptionRef = useRef();
const categoryRef = useRef();


async function saveExpense(event){
event.preventDefault()
console.log(emailRef.current.value,categoryRef.current.value)

}

return (
    <React.Fragment>
<Container className='m-2'>
    <Form>
     <MDBInput wrapperClass='mb-4' label='amount' id='email' type='email' ref={emailRef}/>
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

    </React.Fragment>
)

}



export default ExpenseTracker;
import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const ExpenseTracker = () => {
function removeFromLocal (){

    localStorage.setItem('tokenId','')

}

  return (
    <React.Fragment>
      <h1>Welcome To Expense Tracker</h1>
      <Link to='/updateprofile'><Button >Complete your Profile</Button></Link>
      <Link to='/verifyemail'><Button >Verify The Email</Button></Link>
      <Link to="/Login"><Button onClick={removeFromLocal}>Logout</Button></Link>
      
    </React.Fragment>
  );
};

export default ExpenseTracker;

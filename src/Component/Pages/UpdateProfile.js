import React, { useRef } from "react";
import { Form ,InputGroup,ListGroup,Button} from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";


const UpdateProfile = ()=>{
const navigate = useNavigate();


const fullNameRef = useRef();
const urlRef = useRef();

 async function updateDetails(event){
event.preventDefault();
    const fullname = fullNameRef.current.value;
    const urLPhoto = urlRef.current.value;
const tokenId = localStorage.getItem('tokenId')
console.log(tokenId,fullname,urLPhoto)

    let url =
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FireBaseAPI}`
    
    try {
    const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
    idToken:[tokenId.idToken],
    displayName:fullname,
    photoUrl:urLPhoto,
    returnSecureToken:true
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    });
    
    if (res.ok) {
    alert('User has successfully signed up.')
    navigate('/expensetracker',{replace:true})
    const data = await res.json();
    const convertedData = JSON.stringify(data)
  localStorage.setItem('tokenId', convertedData);
  console.log(data)
    
    } else {
    const data = await res.json();
    
    throw new Error(data.error.message);
    }
    } catch (err) {
        console.log(err)
    alert(err.message);
    }
     }


return(
<React.Fragment>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Full Name" ref={fullNameRef} />
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Profile Photo URL</Form.Label>
        <Form.Control type="text" placeholder="URL Link.JPG" ref={urlRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button variant="primary" type="submit" onClick={updateDetails}>
        Submit
      </Button>
    </Form>
    </React.Fragment>
)
}


export default UpdateProfile;
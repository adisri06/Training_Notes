import React, { useEffect, useState } from 'react';
import '../css/Registration.css'; // Import the external CSS file
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/actions';

const Registration = () => {
  const { id: paramId } = useParams(); // Get id from URL params
  const [id, setId] = useState(paramId); // State for id
  const navigate = useNavigate();

  // Initialize state for form data (name, mobile, email, password)
  const [empData, setEmpData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    color: '#FFCC99'
  });
  useEffect(()=>{
    setId(null);
    console.log("get api call id",id);
    if(id){
    axios.get(`http://localhost:4000/empdatabase/${id}`).then((resp)=>{  
        console.log(resp) 
        setEmpData(resp.data);   
    }).catch((error)=>{
      alert(error)
//[] will tell use effect that run only once the certain params inside the state changes
//It will rerendered during the recycle methods so basically at 4 stages.
// if i put [employeelist] in the bracket then it will be rendered when the value of the employee ~list changes
  })
  }
  else {
  reset()
  }},[paramId])
  
  // Initialize state for storing error messages for each field
  const [errempData, setErrEmpData] = useState({
    errname: '',
    errmobile: '',
    erremail: '',
    errpassword: '',
  });
  function reset() {
    setEmpData({
      name: '',
      mobile: '',
      email: '',
      password: '',
      color: '#FFCC99'
    });
  }
  // function update(){
  //   axios.put()
  // }
  // Update state whenever the user inputs values in the form fields
  const handleChange = (event) => {
    const { name, value } = event.target; // Get name and value of the input field
    setEmpData({
      ...empData, // Spread previous form data
      [name]: value, // Update only the specific field with the new value
    });
  };

  // Trigger validation on blur (when the user leaves the input field)
  const checkData = (event) => {
    const { name, value } = event.target; // Capture the name and value of the field
    validator(name, value); // Call validation function
  };

  // Validation logic for each field based on name and value
  const validator = (name, value) => {
    let errors = { ...errempData }; // Clone current error state
    switch (name) {
      case 'name':
        // If name is empty, set error message
        errors.errname = value.length <= 0 ? 'Enter full name' : '';
        break;
      case 'mobile':
        // Check if mobile number is exactly 10 digits using a regular expression
        const mobregex = /^\d{10}$/;
        errors.errmobile = mobregex.test(value)
          ? ''
          : 'Enter a valid 10-digit mobile number';
        break;
      case 'email':
        // Validate email format using a regular expression
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.erremail = emailregex.test(value)
          ? ''
          : 'Enter a valid email address';
        break;
      case 'password':
        // Ensure password length is at least 6 characters
        errors.errpassword = value.length < 6
          ? 'Password must be at least 6 characters long'
          : '';
        break;
      default:
        break;
    }
    setErrEmpData(errors); // Update the error state with new messages
  };

  // Handle form submission and prevent page reload
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
  
    // Trigger validation for all fields before submitting
    Object.keys(empData).forEach((key) => validator(key, empData[key]));
  
    // Check if there are any validation errors
    const isErrorPresent = Object.values(errempData).some(error => error !== "");
  
    // Check if all form fields are filled and no errors are present
    if (Object.values(empData).every(item => item !== "") && !isErrorPresent) {
      if(!paramId){
        axios.post("http://localhost:4000/empdatabase", empData).then((res)=>{
            alert("Form Submitted");
        }).catch((error)=>{
            alert(error.message);

        })}
        else{
          console.log("updating for id", paramId)
          axios.put(`http://localhost:4000/empdatabase/${paramId}`,empData).then((res)=>{
            alert("Values updated");
        }).catch((error)=>{
            alert(error.message);

        })
        }
      console.log('Form submitted:', empData); // Log the form data
      navigate('/table')

    } else{
        alert("please fill out all the form fields")
    }
  };

  return (
    <div className="container">
      <h1  className='header'>{paramId? "Update Form": "Registeration form"}</h1>
      {/* <h1>Registration Form</h1> */}
      <form onSubmit={handleSubmit} className="registration-form" onReset={reset}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={empData.name}
              onChange={handleChange} // Update state on change
              onBlur={checkData} // Validate on blur (when user leaves field)
              required // HTML5 validation
            />
            {/* Display error message for name if it exists */}
            {errempData.errname && <p className="error">{errempData.errname}</p>}
          </label>
        </div>

        <div className="form-group">
          <label>
            Mobile Number:
            <input
              type="text" // Use type "text" to avoid browser-specific number validations
              name="mobile"
              value={empData.mobile}
              onChange={handleChange} // Update state on change
              onBlur={checkData} // Validate on blur
              required // HTML5 validation
            />
            {/* Display error message for mobile if it exists */}
            {errempData.errmobile && (
              <p className="error">{errempData.errmobile}</p>
            )}
          </label>
        </div>

        <div className="form-group">
          <label>
            Email ID:
            <input
              type="email"
              name="email"
              value={empData.email}
              onChange={handleChange} // Update state on change
              onBlur={checkData} // Validate on blur
              required // HTML5 validation
            />
            {/* Display error message for email if it exists */}
            {errempData.erremail && <p className="error">{errempData.erremail}</p>}
          </label>
        </div>

        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={empData.password}
              onChange={handleChange} // Update state on change
              onBlur={checkData} // Validate on blur
              required // HTML5 validation
            />
            {/* Display error message for password if it exists */}
            {errempData.errpassword && (
              <p className="error">{errempData.errpassword}</p>
            )}
          </label>
        </div>

        {/* Submit button */}
        <div className="button-container">

    <button type="submit" className="btn-small"> {paramId ? "Update" :"Submit"}</button>
    <button type="reset" className="btn-small">Reset</button>
    </div>
      </form>
    </div>
  );
};

export default Registration;
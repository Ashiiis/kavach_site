import React, { useState } from 'react'
// import './Register.css';
import { Link } from "react-router-dom";
import { TextField, Button } from '@mui/material'
export default function Register() {
   // const BASE_URL = "http://localhost:8000/";
    const BASE_URL = "https://kavachbackend-hn0ceuc2r-ashiiis-projects.vercel.app/";

  
    // State to manage form data
    const [formData, setFormData] = useState({
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    });
    const containerStyle = {
      background: '#f1f1f1',
        width: '30%',
        height: '360px',
        border: '4px solid #48494B', 
        borderRadius: '15px', 
        color: '#111',
    };
  
    // Function to handle form submission
    const handleFormSubmit = () => {
      fetch(`${BASE_URL}register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle response accordingly
        // Redirect to login page upon successful registration (assuming you use React Router)
        // Replace '/login' with the actual route path to your login page
        // You can also use <Navigate to="/login" /> directly instead of history.push('/login')
      })
      .catch(error => {
        console.log(error);
      });
    };
  
    return (
      <div className='container text-center' style={containerStyle}>
        <h2>Register</h2>
        <div className='mt-3'>
          <TextField id="email" type='email' label="Email" variant="outlined" onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>
        <div className='mt-3'>
          <TextField id="first_name" type='text' label="First Name" variant="outlined" onChange={e => setFormData({...formData, first_name: e.target.value})} />
        </div>
        <div className='mt-3'>
          <TextField id="last_name" type='text' label="Last Name" variant="outlined" onChange={e => setFormData({...formData, last_name: e.target.value})} />
        </div>
        <div className='mt-3'>
          <TextField id="password" type='password' label="Password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})} />
        </div>
        <div className='mt-3'>
          <Button variant="contained" onClick={handleFormSubmit}>Register</Button>
          <Button varient="contained" >
            <Link to='/login'> <span className="text-gradient">Login</span></Link>
          </Button>
        </div>
        {/* Redirect to Login component upon successful registration */}
        
      </div>
    );
  }
  
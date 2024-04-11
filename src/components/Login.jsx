import React, { useState } from 'react'
// import './Login.css';
import {TextField, Button} from '@mui/material'
import {toast } from "react-hot-toast"
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import userReducer from '../redux/userReducer';
import { userExist } from '../redux/userReducer';
import {useNavigate} from 'react-router-dom'
function Login() {
    const BASE_URL ="https://kavachbackend-hn0ceuc2r-ashiiis-projects.vercel.app/";
    const [formData,setFormData ]=useState({
        "email": "",
        "password": ""
    });


    const dispatch  =   useDispatch() ; 
    const navigate = useNavigate()


    const containerStyle = {
        background: '#f1f1f1',
        width: '30%',
        height: '250px',
        border: '4px solid #48494B', 
        borderRadius: '15px', 
        color: '#111',

      };
    const handleFormSubmit = () => {
        // console.log(`Making request to ${BASE_URL}register/ with body:`, formData);
        fetch(`${BASE_URL}/login/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        .then(response => {
            if (response.headers.get('content-type').includes('application/json')) {
                return response.json();
            } else {
                throw new Error('Received non-JSON response');
            }
        })
        .then(data => {
            console.log(data);
            const {message} = data; 
             if(message=== 'login succesfull'){
dispatch(userExist(data.user.id)) ; 
navigate('/')
toast(message,'success');

             }
             else{
                toast("invalid email or password");
             }
            const token = data.token;
            document.cookie = `token=${token}; path=/`

        })
        .catch(error=>{
            console.log(error);

        })
    }
  return (
    <>
    <div className='containor text-center' style={containerStyle}>

        <div className='mt-3'>
            <TextField id="email" type='email' label="email" variant="outlined" onChange={e => setFormData({...formData, email: e.target.value})} />
        </div> 
        <div className='mt-3'>
            <TextField id="password" label="password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})}/>
        </div>
        <div className='mt-3'>
            <Button variant ="contained"onClick={handleFormSubmit}>Login</Button>
            <Button varient="contained" >
            <Link to='/register'> <span className="text-gradient">Sign Up</span></Link>
          </Button>
        </div> 
    </div>   
    </> 
  )
}
export default Login;

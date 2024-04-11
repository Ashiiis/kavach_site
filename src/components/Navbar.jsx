import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { CiLogin } from "react-icons/ci";
import   {useDispatch} from 'react-redux' ; 
import { userNotExist } from '../redux/userReducer';
import { FaUser } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
const Navbar = (user) => {

  const navigate = useNavigate() ; 
    const [active, setActive] = useState("Home");
    const [isOpen , setIsOpen] = useState(false) ; 
    const [toggle, setToggle] = useState(false);


    const dispatch = useDispatch() ; 

    const hanldeClick  = () =>{

      if(user.user.id===""){

        navigate( "/login")
      
      }
      
      else{
        dispatch(userNotExist())
        toast('Logged out successfully')
       
      }
    }

    
  //  console.log(props)
    console.log(user)
    // const users =  { 
    //   id : "" 
    // }
  
    return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="kavach" className="w-[104px] h-[86px]" />
  
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
  
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
  
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] m-6px ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>

              ))}


            </ul>
          </div>
        </div>
             {
              user.user.id ==="" ? (
                (

                  <button onClick={hanldeClick}><CiLogin color ='red'/></button>
                )
              )
              :
              (
                <>
                <button className='text-red-500' onClick ={()=>{
                    setIsOpen((prev)=> ! prev);
                  }}>
                  <FaUser color='red'/>
                </button>
              
                <dialog open = {isOpen}>
                  <div>
                    <h1>User</h1>
              
                    <button onClick={hanldeClick}>LOGOUT</button>
                  </div>
                </dialog>
                </>
              )
             }
      </nav>

      
    );
  };
  export default Navbar;

 
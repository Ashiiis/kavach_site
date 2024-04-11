import React from 'react'
import styles from './style';
import { Navbar, Hero, Specs, Explanation, Demo, CTA, Footer } from './components';
import { BrowserRouter  ,Routes , Route } from 'react-router-dom';
import {Toaster } from "react-hot-toast"
import Login from './components/Login'
import Register from './components/Register';
import {useSelector} from 'react-redux' ; 
import { useReducer } from 'react';

const App = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const openPopup = (isOpen) => {
  //   setIsPopupOpen(true);
  // };


  const {user}=useSelector((state)=> state.user )
  console.log(user)
  return (


<BrowserRouter>


<div className="app-container">
<div className = "bg-primary w-full overflow-hidden">
    <div className={ `${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar user = {user}/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Hero/>

        
      </div>

      <Routes>
          <Route  path="/register" element={<Register />}></Route>
        
          <Route  path="/login" element={<Login />}></Route>
      </Routes>
    
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Specs/>
        <Explanation/>
        <Demo/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
  </div>
<Toaster position='top-center'/>
</BrowserRouter>
 );

  
  }


export default App
import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import logo from '../img/logoAcqua.png';

import ScrollTop from '../scrollToTop/scrollToTopX';
import Bggrey from "./Bggrey"; 





import Home from '../pages/home';
import About from '../pages/about';
import Services from '../pages/services';
import Contact from '../pages/contact';

 




const Ul = styled.div`
width:95%;
list-style:none;
display:inline-block;
z-index:10;
position:fixed;
transition:all cubic-bezier(1, 0.09, 0.27, 0.89) 1s;
 
@media screen and (max-width:769px){
  width:50vh;
  height:100vh;
  background:#023047;
  list-style:none;
  display:block;
  transform:${({ open }) => open ? 'translateX(-0%)' : 'translateX(-100%)'};
  position: fixed;  
  box-shadow:5px 0px 40px -15px #111;
  
}



li{
padding:20px;
font-weight:bold;
text-align:center;
font-size:1.1rem; 
display:inline-block;

@media screen and (max-width:769px) {
  display:block;
  float:none;
  
}
}

li a{
  color:#059DC0;
  text-decoration:none;
  
  @media screen and (max-width:769px) {
    font-size:0.9rem; 
    color:#fff;

    
 }
}
`;


const Wrapper = styled.div`
padding-top:5%;
padding-right:70px;
float:right;

@media screen and (max-width:769px) {
  padding-top:60%;
  padding-right:17px;
   
  float:none;
  
 
}
`;



const RightNav = ({ open }) => {
  return (
    <>
            <Router>
              <ScrollTop>

       
              <Link to="/">
              <img src={logo} alt={"logo"} style={{width:'60px',zIndex:'1000',position:'fixed',margin:'5px 50px'}} />
              </Link>

                <Ul open={open}>
                  <Wrapper>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/services">services</Link></li>
                  <li><Link to="/contact">contact</Link></li>
                  </Wrapper>
                </Ul>
                        <Bggrey open={open}/>    
                <Routes> 
                  <Route path='/' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='services' element={<Services />} />
                  <Route path='contact' element={<Contact />} />
                </Routes>


            
              </ScrollTop>
            </Router>
        
    </>
  )
}

export default RightNav
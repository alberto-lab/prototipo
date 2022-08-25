import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RightNav from './RightNav';


const StyledBurger = styled.div`
 
width:2rem;
height:1.8rem;
position:fixed;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
z-index:2000;
bottom:2rem;
left:46%;


div {
    display:none;
    height:0.15rem;
    background:black;
    display:flex;
    border-radius:15px;
    transition:all ease-in-out 0.3s;
    display:none;
 


    &:nth-child(1) {
      width:2rem;
      transform: ${({ open }) => open ? 'rotate(41deg)' : 'rotate(0)'};
      transform-origin: top left;
    }
    &:nth-child(2) {
      width:1.5rem;
      transform: ${({ open }) => open ? 'translateX(-50px)' : 'translateX(40)'};
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    &:nth-child(3) {
      width:2rem;
      transform: ${({ open }) => open ? 'rotate(-41deg)' : 'rotate(0)'};
      transform-origin: bottom left;
    }

@media (max-width:769px){
  display:block;
}


    
}


`;




const Icon = () => {


  const [open, setOpen] = useState(false);


/*  useEffetc i for close the menu wen a link is clicked */

  useEffect(() => {
   document.addEventListener("mousedown", () => {
       setOpen(false);
   });
});



  return (
   <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
     <div /> 
     <div /> 
     <div /> 
    </StyledBurger>
     
     <RightNav open={open}/>
   </>


  )
}
export default Icon



 











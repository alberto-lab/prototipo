import React from 'react';
import styled from 'styled-components';


const BackgroundGrey = styled.div`
width:100%;
height:100vh;

  
z-index:6; 
opacity:0.8;
position: fixed;  
transition:all cubic-bezier(1, 0.09, 0.47, 1.29) 1s;
transform:${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
`;




const Bggrey = ({ open }) => {

  
  return (
    <>  
    <BackgroundGrey open={open}>
     
    </BackgroundGrey>
     </>

  )
}

export default Bggrey
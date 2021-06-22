import React, { useState } from 'react';
import styled from 'styled-components';


const FooterDiv = styled.div`
   
    background-color: #30BF45;
    width: 100%;
    height:2rem;
    display:flex;
    justify-content:center;
    align-item: baseline;
`;


function Footer() {
     return(
         <FooterDiv> Made by Lambda School</FooterDiv>
     )
}
export default Footer
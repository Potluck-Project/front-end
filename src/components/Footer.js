import React from 'react';
import styled from 'styled-components';


const FooterDiv = styled.div`
   
    background-color: #DEB887;
    width: 100%;
    height:2rem;
    position: fixed;
    bottom: 0;
`;


function Footer() {
     return(
         <FooterDiv> Made by Lambda School</FooterDiv>
     )
}
export default Footer